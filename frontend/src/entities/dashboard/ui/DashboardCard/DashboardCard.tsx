import React from 'react';
import { Card } from '@/shared/ui/Card';

interface DashboardCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  children,
  title,
  className = '',
}) => {
  return (
    <Card className={className}>
      {title && (
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
      )}
      {children}
    </Card>
  );
}; 