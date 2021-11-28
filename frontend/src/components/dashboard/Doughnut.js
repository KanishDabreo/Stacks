import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { getUser } from '../../utils/userAuth';

export default function Doughnut(props) {
  const user = getUser();

  const renderLabel = function(entry) {
    return entry.name;
  }

  return (
    <ResponsiveContainer>
        <PieChart width={800} height={800}>
          <Pie
            data={props.expenses}
            dataKey="value"
            label={renderLabel}
            innerRadius={125}
            outerRadius={250}
          />
        </PieChart>
    </ResponsiveContainer>
  );
}
