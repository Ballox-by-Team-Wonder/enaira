import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


export function Chart({ data, barData }) {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        maxBarSize={20}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {
          barData?.map((item, i) => (
            <Bar 
              key={i}
              dataKey={item.dataKey}
              fill={item.fill}
            />
          ))
        }
      </BarChart>
    </ResponsiveContainer>
  )
}