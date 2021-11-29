import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { getUser } from '../../utils/userAuth';

export default function totalIncome({income}) {
  const user = getUser();

  const renderLabel = function(entry) {
    return entry.name;
  }

  return (
    <ResponsiveContainer>
        <PieChart width={200} height={200}>
          <Pie
            data={income}
            dataKey="value"
            label={renderLabel}
            innerRadius={25}
            outerRadius={80}
          />
        </PieChart>
    </ResponsiveContainer>
  );
}
