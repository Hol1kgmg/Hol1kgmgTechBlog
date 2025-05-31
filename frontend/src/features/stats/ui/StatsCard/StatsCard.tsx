import React from 'react';
import { Card } from '@/shared/ui/Card';

interface StatItem {
  label: string;
  value: number;
}

interface StatsCardProps {
  stats: StatItem[];
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ stats, className = '' }) => {
  return (
    <Card className={className}>
      <h3 className="text-lg font-semibold mb-4">統計情報</h3>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between">
            <span>{stat.label}</span>
            <span className="font-bold">{stat.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}; 