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
import { cn } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';

interface OkrbNodeData {
  id: string; // Keep id as string to match usage
  name: string;
  children: OkrbNodeData[];
}

interface TreeNodeProps {
  node: OkrbNodeData;
  selectedIds: string[];
  onSelectionChange: (id: string, isSelected: boolean) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, selectedIds, onSelectionChange }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedIds.includes(node.id);

  const handleCheckedChange = (checked: boolean | 'indeterminate') => {
    onSelectionChange(node.id, checked === true);
  };

  const content = (
      <div className="flex items-center gap-2 w-full">
        <Checkbox 
            id={node.id}
            checked={isSelected}
            onCheckedChange={handleCheckedChange}
            className="rounded-full" />
        <Label htmlFor={node.id} className="font-normal cursor-pointer text-left flex-1">{node.name}</Label>
      </div>
  );

  if (hasChildren) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={node.id} className="border-b-0">
          <AccordionTrigger
              className="hover:no-underline p-1 -ml-1 rounded-md hover:bg-accent/10 data-[state=open]:bg-accent/10"
              >
              {content}
          </AccordionTrigger>
          <AccordionContent className="pl-6">
            {node.children!.map((child) => (
              <TreeNode 
                key={child.id} 
                node={child} 
                selectedIds={selectedIds}
                onSelectionChange={onSelectionChange}
                />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <div className="flex items-center py-1 pl-8 pr-1 rounded-md hover:bg-accent/10">
      {content}
    </div>
  );
};

interface OkrbTreeProps {
    selectedIds: string[];
    onSelectionChange: (ids: string[]) => void;
}

export const OkrbTree: React.FC<OkrbTreeProps> = ({ selectedIds, onSelectionChange }) => {
    const [okrbData, setOkrbData] = React.useState<OkrbNodeData[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const buildTree = (items: { id: number; code: string; name: string }[]): OkrbNodeData[] => {
            const nodeMap: { [key: string]: OkrbNodeData } = {};

            // Initialize all nodes
            items.forEach(item => {
                nodeMap[item.code] = { 
                    id: item.code, 
                    name: `[${item.code}] - ${item.name.trim()}`, 
                    children: [] 
                };
            });

            const rootNodes: OkrbNodeData[] = [];

            // Parent-child linking
            items.forEach(item => {
                const node = nodeMap[item.code];
                const dotIndex = item.code.lastIndexOf('.');
                
                if (dotIndex > -1) {
                    const parentCode = item.code.substring(0, dotIndex);
                    const parent = nodeMap[parentCode];
                    if (parent) {
                        parent.children.push(node);
                    } else {
                        // If parent doesn't exist, treat it as a root node
                        rootNodes.push(node);
                    }
                } else {
                    rootNodes.push(node);
                }
            });

            return rootNodes;
        };

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
        <div className="w-full">
        {okrbData.map((rootNode) => (
            <TreeNode 
                key={rootNode.id} 
                node={rootNode} 
                selectedIds={selectedIds}
                onSelectionChange={handleNodeSelectionChange}
                />
        ))}
        </div>
    );
};
