'use client';

import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Skeleton } from './ui/skeleton';
import { Input } from './ui/input';

interface OkrbNodeData {
  id: string;
  name: string;
  children: OkrbNodeData[];
}

interface TreeNodeProps {
  node: OkrbNodeData;
  selectedIds: string[];
  onSelectionChange: (id: string, isSelected: boolean) => void;
  depth: number;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, selectedIds, onSelectionChange, depth }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedIds.includes(node.id);

  const handleCheckedChange = (checked: boolean | 'indeterminate') => {
    onSelectionChange(node.id, checked === true);
  };
  
  const content = (
     <div className="flex items-center gap-2">
        <Checkbox 
            id={node.id}
            checked={isSelected}
            onCheckedChange={handleCheckedChange}
             />
        <Label htmlFor={node.id} className="font-normal cursor-pointer flex-1">{node.name}</Label>
    </div>
  );

  if (hasChildren) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={node.id} className="border-b-0">
            <div className="flex items-center p-1 rounded-md hover:bg-accent/10 data-[state=open]:bg-accent/10">
                <div className="flex-1">{content}</div>
                 <AccordionTrigger className="p-2 hover:no-underline" />
            </div>
          <AccordionContent className="pl-6">
            {node.children!.map((child) => (
              <TreeNode 
                key={child.id} 
                node={child} 
                selectedIds={selectedIds}
                onSelectionChange={onSelectionChange}
                depth={depth+1}
                />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <div className="flex items-center p-1 rounded-md hover:bg-accent/10">
      <div className="flex-1 pl-8">{content}</div>
    </div>
  );
};


interface OkrbTreeProps {
    selectedIds: string[];
    onSelectionChange: (ids: string[]) => void;
}

const buildTree = (items: { id: number; code: string; name: string }[]): OkrbNodeData[] => {
    const nodeMap: { [key: string]: OkrbNodeData } = {};
    
    items.forEach(item => {
        nodeMap[item.code] = { 
            id: item.code, 
            name: `[${item.code}] - ${item.name.trim()}`, 
            children: [] 
        };
    });

    const roots: OkrbNodeData[] = [];
    items.forEach(item => {
        const node = nodeMap[item.code];
        const dotIndex = item.code.lastIndexOf('.');
        const isRootCandidate = /^[A-Z]$/.test(item.code);

        if (isRootCandidate) {
          roots.push(node)
          return;
        }

        if (dotIndex > -1) {
            const parentCode = item.code.substring(0, dotIndex);
            if (nodeMap[parentCode]) {
                nodeMap[parentCode].children.push(node);
            } else {
                 roots.push(node);
            }
        } else {
             const parentCode = item.code.substring(0,1);
             if (nodeMap[parentCode]) {
                nodeMap[parentCode].children.push(node)
             } else {
                roots.push(node)
             }
        }
    });
    
    // Final filtering to get only true roots
    const allChildIds = new Set<string>();
    Object.values(nodeMap).forEach(node => {
        node.children.forEach(child => {
            allChildIds.add(child.id);
        });
    });

    return roots.filter(node => !allChildIds.has(node.id));
};

const filterTree = (nodes: OkrbNodeData[], filterText: string): OkrbNodeData[] => {
    if (!filterText) {
        return nodes;
    }

    const lowerCaseFilter = filterText.toLowerCase();

    const recursiveFilter = (node: OkrbNodeData): OkrbNodeData | null => {
        const hasMatchingChildren = node.children.length > 0;
        const filteredChildren = hasMatchingChildren 
            ? node.children.map(child => recursiveFilter(child)).filter((child): child is OkrbNodeData => child !== null)
            : [];

        const isMatch = node.name.toLowerCase().includes(lowerCaseFilter);
        
        if (isMatch || filteredChildren.length > 0) {
            return { ...node, children: filteredChildren };
        }

        return null;
    };

    return nodes.map(node => recursiveFilter(node)).filter((node): node is OkrbNodeData => node !== null);
};

export const OkrbTree: React.FC<OkrbTreeProps> = ({ selectedIds, onSelectionChange }) => {
    const [okrbData, setOkrbData] = React.useState<OkrbNodeData[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);
    const [searchTerm, setSearchTerm] = React.useState('');

    React.useEffect(() => {
        const fetchOkrbData = async () => {
            try {
                const response = await fetch('/okrb.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const rawData = await response.json();
                const treeData = buildTree(rawData.data);
                setOkrbData(treeData);
            } catch (error) {
                console.error("Failed to fetch OKRB data:", error);
                setError('Не удалось загрузить локальный справочник okrb.json.');
            } finally {
                setLoading(false);
            }
        };

        fetchOkrbData();
    }, []);


    const handleNodeSelectionChange = (id: string, isSelected: boolean) => {
        let newSelectedIds;
        if (isSelected) {
            newSelectedIds = [...selectedIds, id];
        } else {
            newSelectedIds = selectedIds.filter(selectedId => selectedId !== id);
        }
        onSelectionChange(newSelectedIds);
    };
    
    const filteredData = React.useMemo(() => filterTree(okrbData, searchTerm), [okrbData, searchTerm]);

    if (loading) {
        return (
            <div className="space-y-2">
                <p className="text-center text-muted-foreground">Загрузка справочника...</p>
                {Array.from({ length: 10 }).map((_, i) => (
                    <Skeleton key={i} className="h-8 w-full" />
                ))}
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="text-center text-destructive-foreground bg-destructive/80 p-4 rounded-md">
                <p className="font-semibold">Ошибка</p>
                <p>{error}</p>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col h-full">
            <div className="p-1 mb-2">
                <Input 
                    placeholder="Поиск по коду или названию..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex-grow overflow-auto pr-4">
                {filteredData.map((rootNode) => (
                    <TreeNode 
                        key={rootNode.id} 
                        node={rootNode} 
                        selectedIds={selectedIds}
                        onSelectionChange={handleNodeSelectionChange}
                        depth={0}
                        />
                ))}
                {filteredData.length === 0 && (
                    <div className="text-center text-muted-foreground p-8">Ничего не найдено.</div>
                )}
            </div>
        </div>
    );
};
