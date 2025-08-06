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
  children?: OkrbNodeData[];
}

interface TreeNodeProps {
  node: OkrbNodeData;
  level?: number;
  selectedIds: string[];
  onSelectionChange: (id: string, isSelected: boolean) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, level = 0, selectedIds, onSelectionChange }) => {
  const hasChildren = node.children && node.children.length > 0;
  const paddingLeft = level * 24;
  const isSelected = selectedIds.includes(node.id);

  const handleCheckedChange = (checked: boolean | 'indeterminate') => {
    onSelectionChange(node.id, checked === true);
  };


  if (hasChildren) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={node.id} className="border-b-0">
           <div
            className="flex items-center gap-2 py-1"
            style={{ paddingLeft: `${paddingLeft}px` }}
          >
             <Checkbox 
                id={node.id}
                checked={isSelected}
                onCheckedChange={handleCheckedChange}
                className="rounded-full"/>
            <AccordionTrigger
                className="hover:no-underline p-0 flex-1 justify-start gap-1"
                >
                <Label htmlFor={node.id} className="font-normal cursor-pointer text-left">{node.name}</Label>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            {node.children!.map((child) => (
              <TreeNode 
                key={child.id} 
                node={child} 
                level={level + 1} 
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
    <div
      className="flex items-center gap-2 py-1"
      style={{ paddingLeft: `${paddingLeft + 34}px` }} // 24px for level + 10px for alignment
    >
      <Checkbox 
        id={node.id}
        checked={isSelected}
        onCheckedChange={handleCheckedChange}
        className="rounded-full" />
       <Label htmlFor={node.id} className="font-normal cursor-pointer">{node.name}</Label>
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
            const tree: OkrbNodeData[] = [];
            const lookup: { [key: string]: OkrbNodeData } = {};

            // Initialize lookup table
            items.forEach(item => {
                lookup[item.code] = { id: item.code, name: `[${item.code}] - ${item.name.trim()}`, children: [] };
            });

            items.forEach(item => {
                const parts = item.code.split('.');
                if (parts.length > 1) {
                    const parentCode = parts.slice(0, -1).join('.');
                    if (lookup[parentCode]) {
                        // Ensure children array exists
                        if (!lookup[parentCode].children) {
                            lookup[parentCode].children = [];
                        }
                        lookup[parentCode].children!.push(lookup[item.code]);
                    } else {
                        // Root node (e.g., code has no parent in the list)
                        tree.push(lookup[item.code]);
                    }
                } else {
                    // Root node
                    tree.push(lookup[item.code]);
                }
            });

             // Filter out nodes that have been nested
            const rootCodes = new Set(tree.map(node => node.id));
            items.forEach(item => {
                const parts = item.code.split('.');
                 if (parts.length > 1) {
                    const parentCode = parts.slice(0, -1).join('.');
                     if (lookup[parentCode]) {
                        rootCodes.delete(item.code);
                    }
                }
            })

            return tree.filter(node => rootCodes.has(node.id));
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
