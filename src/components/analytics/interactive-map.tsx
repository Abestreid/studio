
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
  const [themeColors, setThemeColors] = useState({
    primary: 'hsl(196 35% 26%)',
    accent: 'hsl(168 76% 36%)',
    accentDark: 'hsl(168 76% 30%)',
    secondary: 'hsl(216 34% 91%)',
    foreground: 'hsl(215 28% 17%)',
  });

  // 1) Load theme colors on mount
  useEffect(() => {
    // This timeout ensures that the styles are applied before we read them
    const timer = setTimeout(() => {
      const computedStyle = getComputedStyle(document.documentElement);
      setThemeColors({
        primary: `hsl(${computedStyle.getPropertyValue('--primary').trim()})`,
        accent: `hsl(${computedStyle.getPropertyValue('--accent').trim()})`,
        accentDark: `hsl(${computedStyle.getPropertyValue('--accent-dark').trim()})`,
        secondary: `hsl(${computedStyle.getPropertyValue('--secondary').trim()})`,
        foreground: `hsl(${computedStyle.getPropertyValue('--foreground').trim()})`,
      });
    }, 0);
    return () => clearTimeout(timer);
  }, []);


  // 2) Load geoJSON
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

  // 3) Load statistics data (mock API call)
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const yearData = mockApiData[parseInt(year, 10) as keyof typeof mockApiData] || [];
      setData(yearData);
      setLoading(false);
    }, 300); // Simulate network delay
  }, [year]);

  // 4) ECharts options using theme colors
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
                color: [themeColors.secondary, themeColors.accentDark] // Gradient from light gray to dark accent
            },
            calculable: true,
            textStyle: {
                color: themeColors.foreground
            }
        },
        series: [
            {
                name: 'Беларусь',
                type: 'map',
                map: 'Belarus',
                roam: true,
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
                        areaColor: themeColors.accent // Hover color is the main accent color
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
