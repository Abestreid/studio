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

interface OkrbNodeData {
  id: string;
  name: string;
  children?: OkrbNodeData[];
}

const okrbData: OkrbNodeData[] = [
    { id: 'A', name: '[A] - Продукция сельского хозяйства, лесного хозяйства, рыболовства и рыбоводства' },
    { id: 'B', name: '[B] - Продукция добычи полезных ископаемых' },
    { 
        id: 'C', 
        name: '[C] - Продукция обрабатывающей промышленности',
        children: [
            { id: 'C.10', name: '[C.10] - Продукты пищевые' },
            { id: 'C.11', name: '[C.11] - Напитки' },
        ]
    },
    { id: 'D', name: '[D] - Электроэнергия, газ, пар, горячая вода и кондиционированный воздух' },
    { id: 'E', name: '[E] - Услуги по снабжению водой, очистке сточных вод, утилизации и обезвреживанию отходов' },
    { id: 'F', name: '[F] - Здания и сооружения; работы общестроительные по возведению зданий и сооружений' },
    { id: 'G', name: '[G] - Услуги по оптовой и розничной торговле; услуги по ремонту автомобилей и мотоциклов' },
    { id: 'H', name: '[H] - Услуги транспорта и услуги по хранению грузов' },
    { id: 'I', name: '[I] - Услуги по временному проживанию и общественному питанию' },
    { id: 'J', name: '[J] - Услуги в области информации и связи' },
    { id: 'K', name: '[K] - Услуги финансовые и страховые' },
    { id: 'L', name: '[L] - Услуги, связанные с недвижимым имуществом' },
    { id: 'M', name: '[M] - Услуги профессиональные, научные и технические' },
    { id: 'N', name: '[N] - Услуги административные и вспомогательные' },
    { id: 'O', name: '[O] - Услуги в области государственного управления и обороны, предоставляемые обществу в целом; услуги по обязательному социальному страхованию' },
    { id: 'P', name: '[P] - Услуги в области образования' },
    { id: 'Q', name: '[Q] - Услуги в области здравоохранения и социального обслуживания населения' },
    { id: 'R', name: '[R] - Услуги в области искусства, развлечений и отдыха' },
    { id: 'S', name: '[S] - Услуги прочие' },
    { id: 'T', name: '[T] - Услуги частных домашних хозяйств в качестве работодателей; различная продукция и услуги, произведенные частными домашними хозяйствами для собственного потребления' },
    { id: 'U', name: '[U] - Услуги экстерриториальных организаций и органов' },
];


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
            className="flex items-center"
            style={{ paddingLeft: `${paddingLeft}px` }}
          >
             <div className="flex items-center gap-2 py-1 flex-1">
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
      style={{ paddingLeft: `${paddingLeft + 16}px` }}
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

    const handleNodeSelectionChange = (id: string, isSelected: boolean) => {
        let newSelectedIds;
        if (isSelected) {
            newSelectedIds = [...selectedIds, id];
        } else {
            newSelectedIds = selectedIds.filter(selectedId => selectedId !== id);
        }
        onSelectionChange(newSelectedIds);
    };

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
