
import React from 'react';

export interface FinancialItem {
  id: string;
  item: string;
  value: string;
  isTotal?: boolean;
}

export interface ScopeItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  activities: string[];
  outputs: string[];
}

export interface CardItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
