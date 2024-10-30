import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Recharts = () => {
  const data = [
    { student: "Student 1", math: 78, chemistry: 85 },
    { student: "Student 2", math: 92, chemistry: 88 },
    { student: "Student 3", math: 84, chemistry: 76 },
    { student: "Student 4", math: 69, chemistry: 82 },
    { student: "Student 5", math: 75, chemistry: 90 },
    { student: "Student 6", math: 88, chemistry: 78 },
    { student: "Student 7", math: 94, chemistry: 91 },
    { student: "Student 8", math: 76, chemistry: 73 },
    { student: "Student 9", math: 83, chemistry: 87 },
    { student: "Student 10", math: 90, chemistry: 92 },
  ];

  return (
    <div>
      {/* <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
      </LineChart> */}

      <LineChart width={500} height={600} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type='monotone' dataKey='math' stroke='#ff2f'></Line>
                        <CartesianGrid stroke="#f23" strokeDasharray="5 5" />
                        <XAxis dataKey="math" />
                        <YAxis dataKey="chemistry" />
                        <Tooltip></Tooltip>
                </LineChart>
    </div>
  );
};

export default Recharts;
