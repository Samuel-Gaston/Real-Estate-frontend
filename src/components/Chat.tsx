import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

export default function DashboardCharts() {
  const [data, setData] = useState([
    { name: "Apartments", quantity: 0 },
    { name: "Lands", quantity: 0 },
    { name: "Houses", quantity: 0 },
  ]);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [apartmentsRes, landsRes, housesRes] = await Promise.all([
          axios.get("http://localhost:8000/api/apartments"),
          axios.get("http://localhost:8000/api/lands"),
          axios.get("http://localhost:8000/api/houses"),
        ]);

        setData([
          { name: "Apartments", quantity: apartmentsRes.data.length },
          { name: "Lands", quantity: landsRes.data.length },
          { name: "Houses", quantity: housesRes.data.length },
        ]);
      } catch (err) {
        console.error("Failed to fetch chart data", err);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div style={{ marginTop: 10 }}>
      <br />
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="quantity"
            stroke="#32CD32"
            fill="rgb(70, 148, 179)"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
