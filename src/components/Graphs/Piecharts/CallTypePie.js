import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

function CallTypePie({ data }) {
    const chartData = [
        {
            name: 'KT',
            value: data.length === 0 ? 0 : data.map((value) => value.kd).reduce((val1, val2) => val1 + val2),
        },
        {
            name: 'RD',
            value:
                data.length === 0
                    ? 0
                    : data.map((value) => value.rd).reduce((val1, val2) => val1 + val2) -
                      (data.length === 0 ? 0 : data.map((value) => value.na).reduce((val1, val2) => val1 + val2)),
        },
        {
            name: 'NA',
            value: data.length === 0 ? 0 : data.map((value) => value.na).reduce((val1, val2) => val1 + val2),
        },
    ];

    const COLORS = ['#01516e', '#a30000', '#850111'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="graphElement">
            <h2>KT / RD / NA</h2>
            <ResponsiveContainer width="100%" aspect={1}>
                <PieChart width={400} height={400}>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        isAnimationActive={false}
                        startAngle={90}
                        endAngle={450}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CallTypePie;
