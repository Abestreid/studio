
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
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OkrbNodeData {
  id: string;
  name: string;
  children: OkrbNodeData[];
}

const HighlightedText = ({ text, highlight }: { text: string, highlight: string }) => {
    if (!highlight.trim()) {
        return <>{text}</>;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
        <span>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <strong key={i} className="font-bold bg-yellow-200 text-black">{part}</strong>
                ) : (
                    part
                )
            )}
        </span>
    );
};


interface TreeNodeProps {
  node: OkrbNodeData;
  selectedIds: string[];
  onSelectionChange: (id: string, isSelected: boolean) => void;
  searchTerm: string;
  defaultOpen: boolean;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, selectedIds, onSelectionChange, searchTerm, defaultOpen }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedIds.includes(node.id);

  const handleCheckedChange = (checked: boolean | 'indeterminate') => {
    onSelectionChange(node.id, checked === true);
  };
  
  if (hasChildren) {
    return (
      <Accordion type="single" collapsible className="w-full" defaultValue={defaultOpen ? node.id : undefined}>
        <AccordionItem value={node.id} className="border-b-0">
          <div className="flex items-center p-1 rounded-md hover:bg-accent/10 border-b border-dotted">
            <div className="flex items-center flex-1 gap-2">
                <AccordionTrigger className="p-1 hover:no-underline rounded-md hover:bg-secondary [&>svg]:size-4">
                    <ChevronRight className="transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-90" />
                </AccordionTrigger>
                 <Checkbox 
                    id={node.id}
                    checked={isSelected}
                    onCheckedChange={handleCheckedChange}
                    />
                <Label htmlFor={node.id} className="font-normal cursor-pointer flex-1">
                    <HighlightedText text={node.name} highlight={searchTerm} />
                </Label>
            </div>
          </div>
          <AccordionContent className="pl-6 border-l border-dotted ml-3">
            {node.children!.map((child) => (
              <TreeNode 
                key={child.id} 
                node={child} 
                selectedIds={selectedIds}
                onSelectionChange={onSelectionChange}
                searchTerm={searchTerm}
                defaultOpen={defaultOpen}
                />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <div className="flex items-center p-1 rounded-md hover:bg-accent/10 border-b border-dotted">
        <div className="flex items-center gap-2 ml-8">
            <Checkbox 
                id={node.id}
                checked={isSelected}
                onCheckedChange={handleCheckedChange}
                />
            <Label htmlFor={node.id} className="font-normal cursor-pointer flex-1">
                <HighlightedText text={node.name} highlight={searchTerm} />
            </Label>
        </div>
    </div>
  );
};


interface OkrbTreeProps {
    selectedIds: string[];
    onSelectionChange: (ids: string[]) => void;
}

const buildTree = (items: { id: number; code: string; name: string }[]): OkrbNodeData[] => {
    const nodeMap: Record<string, OkrbNodeData> = {};
    const roots: OkrbNodeData[] = [];

    // First pass: create all nodes
    items.forEach(item => {
        const code = item.code.trim();
        nodeMap[code] = {
            id: code,
            name: `[${code}] - ${item.name.trim().replace(/\\r/g, '')}`,
            children: [],
        };
    });

    // Second pass: build the hierarchy
    items.forEach(item => {
        const code = item.code.trim();
        const node = nodeMap[code];
        
        // Find parent code by removing the last part of the dot notation
        const lastDotIndex = code.lastIndexOf('.');
        let parentCode: string | null = null;
        if(lastDotIndex > -1) {
            parentCode = code.substring(0, lastDotIndex);
        } else if (/^\d\d$/.test(code)) { // Handle codes like "01.11" -> "01.1" is not right. This handles "11" -> "1"
             const letter = code.substring(0,1);
             if (nodeMap[letter]) {
                 parentCode = letter;
             }
        }
        
        if (parentCode && nodeMap[parentCode]) {
            nodeMap[parentCode].children.push(node);
        } else {
            // No valid parent found, it's a root node
            roots.push(node);
        }
    });

    // Sort all children arrays by code
    Object.values(nodeMap).forEach(node => {
        node.children.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
    });
    
    // Sort root nodes
    roots.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

    // This is a special case for codes like "01.11" whose parent "01" doesn't exist, but "A", "B" etc do.
    const finalRoots = roots.filter(r => !/^\d+\.\d+/.test(r.id) || /^[A-Z]$/.test(r.id));
    
    // Find alphabetic roots (A, B, C...) and assign children to them
    const alphaRoots = finalRoots.filter(r => /^[A-Z]$/.test(r.id));
    const otherRoots = finalRoots.filter(r => !/^[A-Z]$/.test(r.id));

    otherRoots.forEach(node => {
        const firstChar = node.id.charAt(0);
        const parentAlpha = alphaRoots.find(r => r.id === firstChar);
        if(parentAlpha) {
            // this logic is flawed, just use the roots as is.
        }
    });

    return roots;
};

const filterTree = (nodes: OkrbNodeData[], filterText: string): OkrbNodeData[] => {
    if (!filterText) {
        return nodes;
    }

    const lowerCaseFilter = filterText.toLowerCase();

    const recursiveFilter = (node: OkrbNodeData): OkrbNodeData | null => {
        const hasMatchingChildren = node.children && node.children.length > 0;
        let filteredChildren: OkrbNodeData[] = [];

        if (hasMatchingChildren) {
             filteredChildren = node.children
                .map(child => recursiveFilter(child))
                .filter((child): child is OkrbNodeData => child !== null);
        }

        const selfMatches = node.name.toLowerCase().includes(lowerCaseFilter);

        if (selfMatches || filteredChildren.length > 0) {
            return { ...node, children: filteredChildren };
        }

        return null;
    };

    return nodes
        .map(node => recursiveFilter(node))
        .filter((node): node is OkrbNodeData => node !== null);
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
                setError('Не удалось загрузить справочник. Попробуйте перезагрузить страницу.');
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
            <div className="space-y-2 p-2">
                <p className="text-center text-muted-foreground text-sm">Загрузка справочника...</p>
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
        <div className="w-full flex flex-col h-full max-h-[50vh]">
            <div className="p-2 sticky top-0 bg-white z-10 border-b">
                <Input 
                    placeholder="Поиск по коду или названию..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="rounded-full"
                />
            </div>
            <div className="flex-grow overflow-auto pr-2 -mr-2">
                {filteredData.length > 0 ? filteredData.map((rootNode) => (
                    <TreeNode 
                        key={rootNode.id} 
                        node={rootNode} 
                        selectedIds={selectedIds}
                        onSelectionChange={handleNodeSelectionChange}
                        searchTerm={searchTerm}
                        defaultOpen={!!searchTerm}
                        />
                )) : (
                     <div className="text-center text-muted-foreground p-8">Ничего не найдено.</div>
                )}
            </div>
        </div>
    );
};
