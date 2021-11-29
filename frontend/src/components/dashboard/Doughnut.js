import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { getUser } from '../../utils/userAuth';

export default function Doughnut({expenses}) {
  const user = getUser();

  const renderLabel = function(entry) {
    return entry.name;
  }

  return (
    <ResponsiveContainer>
        <PieChart width={200} height={200}>
          <Pie
            data={expenses}
            dataKey="value"
            label={renderLabel}
            innerRadius={35}
            outerRadius={150}
          />
        </PieChart>
    </ResponsiveContainer>
  );
}
