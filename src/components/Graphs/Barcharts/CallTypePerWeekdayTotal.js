import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CallTypePerWeekdayDay({ data }) {
    const chartData = [
        {
            name: 'Montag',
            KT: getSumOfDateIndex(data, 1, 0),
            RD: getSumOfDateIndex(data, 1, 1),
            NA: getSumOfDateIndex(data, 1, 2),
        },
        {
            name: 'Dienstag',
            KT: getSumOfDateIndex(data, 2, 0),
            RD: getSumOfDateIndex(data, 2, 1),
            NA: getSumOfDateIndex(data, 2, 2),
        },
        {
            name: 'Mittwoch',
            KT: getSumOfDateIndex(data, 3, 0),
            RD: getSumOfDateIndex(data, 3, 1),
            NA: getSumOfDateIndex(data, 3, 2),
        },
        {
            name: 'Donnerstag',
            KT: getSumOfDateIndex(data, 4, 0),
            RD: getSumOfDateIndex(data, 4, 1),
            NA: getSumOfDateIndex(data, 4, 2),
        },
        {
            name: 'Freitag',
            KT: getSumOfDateIndex(data, 5, 0),
            RD: getSumOfDateIndex(data, 5, 1),
            NA: getSumOfDateIndex(data, 5, 2),
        },
        {
            name: 'Samsatg',
            KT: getSumOfDateIndex(data, 6, 0),
            RD: getSumOfDateIndex(data, 6, 1),
            NA: getSumOfDateIndex(data, 6, 2),
        },
        {
            name: 'Sonntag',
            KT: getSumOfDateIndex(data, 0, 0),
            RD: getSumOfDateIndex(data, 0, 1),
            NA: getSumOfDateIndex(data, 0, 2),
        },
    ];

    return (
        <div className="graphElement">
            <h2>KT / RD / NA Gesamt</h2>
            <ResponsiveContainer width="100%" aspect={1}>
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 15,
                        right: 30,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="KT" stackId="a" fill="#01516e" isAnimationActive={false} />
                    <Bar dataKey="RD" stackId="a" fill="#a30000" isAnimationActive={false} />
                    <Bar dataKey="NA" stackId="a" fill="#850111" isAnimationActive={false} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

function getSumOfDateIndex(data, index, selector) {
    const dateFilterd = data.filter((value) => new Date(value.date).getDay() === index);
    // If no data exists for the give day, exit
    if (dateFilterd.length === 0) {
        return 0;
    }
    const sumCalls =
        selector === 0
            ? dateFilterd.map((value) => value.kd).reduce((val1, val2) => val1 + val2)
            : selector === 1
            ? dateFilterd.map((value) => value.rd).reduce((val1, val2) => val1 + val2) -
              dateFilterd.map((value) => value.na).reduce((val1, val2) => val1 + val2)
            : dateFilterd.map((value) => value.na).reduce((val1, val2) => val1 + val2);
    return sumCalls;
}

export default CallTypePerWeekdayDay;
