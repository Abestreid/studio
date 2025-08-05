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
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, level = 0 }) => {
  const hasChildren = node.children && node.children.length > 0;
  const paddingLeft = level * 24; // 24px indent per level

  if (hasChildren) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={node.id} className="border-b-0">
          <AccordionTrigger
            className="hover:no-underline py-1"
            style={{ paddingLeft: `${paddingLeft}px` }}
          >
            <div className="flex items-center gap-2">
              <Checkbox id={node.id} />
              <Label htmlFor={node.id} className="font-normal cursor-pointer">{node.name}</Label>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {node.children!.map((child) => (
              <TreeNode key={child.id} node={child} level={level + 1} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <div
      className="flex items-center gap-2 py-1"
      style={{ paddingLeft: `${paddingLeft + 16}px` }} // Extra padding for non-trigger items
    >
      <Checkbox id={node.id} />
       <Label htmlFor={node.id} className="font-normal cursor-pointer">{node.name}</Label>
    </div>
  );
};

export const OkrbTree = () => {
  return (
    <div className="w-full">
      {okrbData.map((rootNode) => (
        <TreeNode key={rootNode.id} node={rootNode} />
      ))}
    </div>
  );
};
