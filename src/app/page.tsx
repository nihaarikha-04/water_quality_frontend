import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample data for each chart
const data1 = [
  { name: 'Jan', uv: 400, pv: 2400 },
  { name: 'Feb', uv: 320, pv: 2300 },
  { name: 'Mar', uv: 200, pv: 3000 },
  { name: 'Apr', uv: 278, pv: 2900 },
  { name: 'May', uv: 189, pv: 3100 },
  { name: 'Jun', uv: 239, pv: 2600 },
  { name: 'Jul', uv: 349, pv: 2700 },
];

const data2 = [
  { name: 'Jan', uv: 500, pv: 3400 },
  { name: 'Feb', uv: 450, pv: 3800 },
  { name: 'Mar', uv: 300, pv: 3500 },
  { name: 'Apr', uv: 410, pv: 3900 },
  { name: 'May', uv: 250, pv: 3600 },
  { name: 'Jun', uv: 370, pv: 4200 },
  { name: 'Jul', uv: 450, pv: 4300 },
];

const data3 = [
  { name: 'Jan', uv: 150, pv: 2100 },
  { name: 'Feb', uv: 280, pv: 2300 },
  { name: 'Mar', uv: 330, pv: 2500 },
  { name: 'Apr', uv: 400, pv: 2800 },
  { name: 'May', uv: 270, pv: 3000 },
  { name: 'Jun', uv: 420, pv: 3200 },
  { name: 'Jul', uv: 510, pv: 3400 },
];

// Define prop types for LineChartCard
interface LineChartCardProps {
  title: string;
  data: { name: string; uv: number; pv: number }[]; // Define the structure of data
  color: string;
}

// Reusable LineChartCard component to display individual charts
function LineChartCard({ title, data, color }: LineChartCardProps) {
  return (
    <Card className="w-full h-[500px] p-8 bg-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke={color} strokeWidth={2} />
            <Line type="monotone" dataKey="pv" stroke="#ff7300" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      {isClient && (
        <div className="w-full flex gap-8 justify-center flex-wrap">
          {/* First Chart */}
          <div className="w-full sm:w-[45%] lg:w-[30%] h-[500px]">
            <LineChartCard title="Sales Overview" data={data1} color="hsl(12, 76%, 61%)" />
          </div>
          {/* Second Chart */}
          <div className="w-full sm:w-[45%] lg:w-[30%] h-[500px]">
            <LineChartCard title="User Growth" data={data2} color="hsl(173, 58%, 39%)" />
          </div>
          {/* Third Chart */}
          <div className="w-full sm:w-[45%] lg:w-[30%] h-[500px]">
            <LineChartCard title="Revenue Analysis" data={data3} color="hsl(197, 37%, 24%)" />
          </div>
        </div>
      )}
    </div>
  );
}