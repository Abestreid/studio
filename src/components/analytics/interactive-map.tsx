
'use client';

import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { mockApiData } from '@/lib/content';

export function InteractiveMap() {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [bySum, setBySum] = useState(true);
  const [data, setData] = useState<{ region: string; sum: number; count: number }[]>([]);
  const [geoJson, setGeoJson] = useState(null);
  const [loading, setLoading] = useState(true);
  const echartsRef = useRef<any>(null);

  // 1) Load geoJSON
  useEffect(() => {
    fetch('/geo/by.json')
      .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json()
      })
      .then(geoData => {
        echarts.registerMap('Belarus', geoData as any);
        setGeoJson(geoData);
      })
      .catch(error => console.error("Failed to load geoJSON", error));
  }, []);

  // 2) Load statistics data (mock API call)
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const yearData = mockApiData[parseInt(year, 10) as keyof typeof mockApiData] || [];
      setData(yearData);
      setLoading(false);
    }, 300); // Simulate network delay
  }, [year]);

  // 3) ECharts options
  const getOption = () => {
      const currentMetricData = data.map(d => bySum ? d.sum : d.count);
      const maxValue = currentMetricData.length > 0 ? Math.max(...currentMetricData) : 0;
      
      return {
        tooltip: {
            trigger: 'item',
            formatter: (params: any) => {
                if (!params.name) return '';
                const item = data.find(d => d.region === params.name);
                if (!item) return params.name;

                const val = bySum ? item.sum : item.count;
                const metricName = bySum ? 'Сумма' : 'Лотов';
                const unit = bySum ? 'BYN' : '';

                return `${params.name}<br/>${metricName}: <strong>${val.toLocaleString()} ${unit}</strong>`;
            }
        },
        visualMap: {
            min: 0,
            max: maxValue,
            left: 'right',
            top: 'bottom',
            text: bySum ? ['Max сумма','Min сумма'] : ['Max кол-во','Min кол-во'],
            inRange: {
                color: ['#e0f2f1', '#2A4A56'] // Light Teal to Primary Blue
            },
            calculable: true,
            textStyle: {
                color: 'hsl(var(--foreground))'
            }
        },
        series: [
            {
                name: 'Беларусь',
                type: 'map',
                map: 'Belarus',
                roam: true, // Allows zooming and panning
                label: {
                    show: false,
                },
                data: data.map(d => ({
                    name: d.region,
                    value: bySum ? d.sum : d.count
                })),
                emphasis: {
                    label: {
                        show: true,
                        color: '#fff'
                    },
                    itemStyle: {
                        areaColor: '#16A085' // Accent color on hover
                    }
                }
            }
        ],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
  };

  if (!geoJson) {
    return <div className="h-[600px] flex items-center justify-center text-muted-foreground">Загрузка карты...</div>;
  }

  return (
      <div className="bg-card rounded-lg p-1">
        <div className="p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="w-full sm:w-[120px]">
                    <SelectValue placeholder="Год" />
                </SelectTrigger>
                <SelectContent>
                    {Array.from({ length: 3 }).map((_, i) => new Date().getFullYear() - i).map(y => (
                        <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
                <Switch
                    id="metric-switch"
                    checked={bySum}
                    onCheckedChange={setBySum}
                />
                 <Label htmlFor="metric-switch" className="cursor-pointer">
                    Отображать по: <span className="font-semibold">{bySum ? "Сумме" : "Количеству"}</span>
                </Label>
            </div>
        </div>
        {loading ? (
             <div className="h-[600px] flex items-center justify-center text-muted-foreground">Загрузка данных...</div>
        ) : (
            <ReactECharts
                ref={echartsRef}
                option={getOption()}
                style={{ height: '600px', width: '100%' }}
                notMerge={true}
                lazyUpdate={true}
            />
        )}
      </div>
  );
}
