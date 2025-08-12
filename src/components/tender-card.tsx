
'use client';

import { Badge } from './ui/badge';
import { Clock, MapPin, Building, Calendar, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type Tender } from '@/lib/tenders';
import { getStatusVariant } from '@/lib/utils';


export function TenderCard(tender: Tender) {
  const {
    id,
    title,
    location,
    customer,
    platform,
    published,
    deadline,
    type,
    price,
    status
  } = tender;

  return (
    <Link href={`/tender/${id}`} className="block text-decoration-none group">
        <article className="flex flex-col md:flex-row gap-4 p-4 rounded-xl shadow-sm bg-white hover:shadow-lg transition-all duration-300 border hover:border-primary hover:scale-105">
        <div className="flex flex-col flex-grow justify-between">
            <div>
                <h3 className="font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors text-base">{title}</h3>
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
                {status && <Badge variant={getStatusVariant(status)}>{status}</Badge>}
            </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-shrink-0 md:ml-3 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-dashed -mx-4 px-4 md:px-0 md:pl-4 md:-my-4 min-w-[150px]">
            <div className={`font-bold text-lg text-center ${price === '—' ? 'text-muted-foreground' : 'text-primary'}`}>{price}</div>
        </div>
        </article>
    </Link>
  );
}
