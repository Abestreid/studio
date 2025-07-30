
'use client';

import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

// Mock data structure - in a real app, this would come from an API
// Region names must match the 'name' property in the geoJSON features.
const mockApiData: { [year: number]: { region: string; sum: number; count: number }[] } = {
  2025: [
    { region: "Minsk Voblasts'", sum: 1250000000, count: 4321 },
    { region: "Brest", sum: 850000000, count: 2987 },
    { region: "Homyel'", sum: 920000000, count: 3150 },
    { region: "Hrodna", sum: 780000000, count: 2640 },
    { region: "Mahilyow", sum: 710000000, count: 2400 },
    { region: "Vitsyebsk", sum: 810000000, count: 2800 },
    { region: "Minsk", sum: 1500000000, count: 5100 },
  ],
  2024: [
    { region: "Minsk Voblasts'", sum: 1150000000, count: 4100 },
    { region: "Brest", sum: 820000000, count: 2800 },
    { region: "Homyel'", sum: 890000000, count: 3050 },
    { region: "Hrodna", sum: 750000000, count: 2500 },
    { region: "Mahilyow", sum: 680000000, count: 2300 },
    { region: "Vitsyebsk", sum: 780000000, count: 2700 },
    { region: "Minsk", sum: 1400000000, count: 4900 },
  ],
   2023: [
    { region: "Minsk Voblasts'", sum: 1050000000, count: 3900 },
    { region: "Brest", sum: 790000000, count: 2700 },
    { region: "Homyel'", sum: 860000000, count: 2950 },
    { region: "Hrodna", sum: 720000000, count: 2400 },
    { region: "Mahilyow", sum: 650000000, count: 2200 },
    { region: "Vitsyebsk", sum: 750000000, count: 2600 },
    { region: "Minsk", sum: 1300000000, count: 4700 },
  ]
};

export function InteractiveMap() {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [bySum, setBySum] = useState(true);
  const [data, setData] = useState<{ region: string; sum: number; count: number }[]>([]);
  const [geoJson, setGeoJson] = useState(null);
  const [loading, setLoading] = useState(true);
  const echartsRef = useRef<any>(null);

  // 1) Load geoJSON
  useEffect(() => {
    fetch('/geo/belarus.json')
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
      const yearData = mockApiData[parseInt(year, 10)] || [];
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
                color: ['#e0f3ff', '#005b96'] // Light blue to dark blue
            },
            calculable: true,
            textStyle: {
                color: '#333'
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
      <div className="bg-secondary/30 rounded-lg p-1">
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
