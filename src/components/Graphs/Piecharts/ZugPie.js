import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

function ZugPie({ data }) {
    const chartData = [
        {
            name: 'Zug 1',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === '1').length,
            color: '#850180',
        },
        {
            name: 'Zug 2',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === '2').length,
            color: '#850180',
        },
        {
            name: 'Zug 3',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === '3').length,
            color: '#850180',
        },
        {
            name: 'Zug 4',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === '4').length,
            color: '#850180',
        },
        {
            name: 'Zug 5',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === '5').length,
            color: '#850180',
        },
        {
            name: 'Zug 6',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === '6').length,
            color: '#850180',
        },
        {
            name: 'Zug 7',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === '7').length,
            color: '#850180',
        },
        {
            name: 'Zug 8',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === '8').length,
            color: '#850180',
        },
        {
            name: 'Zug 9',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === '9').length,
            color: '#850180',
        },
        {
            name: 'Zug 10',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === '10').length,
            color: '#850180',
        },
        {
            name: 'Zug 11',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === '11').length,
            color: '#850180',
        },
        {
            name: 'Zivi',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === 'Zivi').length,
            color: '#b4da55',
        },
        {
            name: 'Tagd.',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === 'Tagd.').length,
            color: 'rgb(204, 204, 220)',
        },
        {
            name: 'Extern',
            value: data.length === 0 ? 0 : data.filter((value) => value.zug === 'Extern').length,
            color: '#ffffff',
        },
    ];

    return (
        <div className="graphElement">
            <h2>Einheit Aufteilung</h2>
            <ResponsiveContainer width="100%" aspect={1}>
                <PieChart width={400} height={400}>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        isAnimationActive={false}
                        startAngle={90}
                        endAngle={450}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={chartData[index].color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ZugPie;
