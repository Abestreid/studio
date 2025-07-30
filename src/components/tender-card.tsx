'use client';

import { Badge } from './ui/badge';
import { Clock, MapPin, Building, Calendar, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TenderCardProps {
  title: string;
  location: string;
  customer: string;
  platform: string;
  published: string;
  deadline: string;
  type: string;
  price: string;
  status?: string;
}

export function TenderCard({ 
  title,
  location,
  customer,
  platform,
  published,
  deadline,
  type,
  price,
  status
}: TenderCardProps) {

  const statusVariant = status === 'Время истекает!' ? 'destructive' : 
                        status === 'Предварительное обсуждение' ? 'default' : 
                        'secondary';
  
  const statusClass = status === 'Предварительное обсуждение' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : '';


  return (
    <article className="flex flex-col md:flex-row gap-4 p-4 rounded-xl shadow-sm bg-white hover:shadow-lg transition-all duration-300 border hover:border-accent hover:-translate-y-1">
      <div className="flex flex-col flex-grow justify-between">
          <div>
              <a href="#" className="text-decoration-none group">
                <h3 className="font-semibold text-primary mb-3 leading-tight group-hover:text-accent transition-colors text-base">{title}</h3>
              </a>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 text-muted-foreground text-xs sm:text-sm mb-3">
                  <span className="flex items-center gap-1.5 truncate"><MapPin className="w-4 h-4 shrink-0"/>{location}</span>
                  <span className="flex items-center gap-1.5 truncate"><UserCircle className="w-4 h-4 shrink-0"/>{customer}</span>
                  <span className="flex items-center gap-1.5 truncate"><Building className="w-4 h-4 shrink-0"/>{platform}</span>
                  <span className="flex items-center gap-1.5 sm:col-span-2 lg:col-span-1"><Calendar className="w-4 h-4 shrink-0"/>Опубликовано: {published}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 shrink-0"/>{deadline}</span>
              </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center mt-auto pt-3 border-t border-dashed -mx-4 px-4">
              <Badge variant="secondary">{type}</Badge>
              {status && <Badge variant={statusVariant} className={cn(statusClass)}>{status}</Badge>}
          </div>
      </div>
      <div className="flex flex-col items-start md:items-end justify-end flex-shrink-0 md:ml-3 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-dashed -mx-4 px-4 md:px-0 md:pl-4 md:-my-4 min-w-[150px]">
          <div className={`font-bold text-lg text-right w-full mt-auto self-end ${price === '—' ? 'text-muted-foreground' : 'text-accent'}`}>{price}</div>
      </div>
    </article>
  );
}
