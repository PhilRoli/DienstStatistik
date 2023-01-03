import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CallTypePerWeekdayNight({ data }) {
    const nightShifts = data.filter((value) => value.daytime === 'Nacht');

    const chartData = [
        {
            name: 'Montag',
            KT: getSumOfDateIndex(nightShifts, 1, 0),
            RD: getSumOfDateIndex(nightShifts, 1, 1),
        },
        {
            name: 'Dienstag',
            KT: getSumOfDateIndex(nightShifts, 2, 0),
            RD: getSumOfDateIndex(nightShifts, 2, 1),
        },
        {
            name: 'Mittwoch',
            KT: getSumOfDateIndex(nightShifts, 3, 0),
            RD: getSumOfDateIndex(nightShifts, 3, 1),
        },
        {
            name: 'Donnerstag',
            KT: getSumOfDateIndex(nightShifts, 4, 0),
            RD: getSumOfDateIndex(nightShifts, 4, 1),
        },
        {
            name: 'Freitag',
            KT: getSumOfDateIndex(nightShifts, 5, 0),
            RD: getSumOfDateIndex(nightShifts, 5, 1),
        },
        {
            name: 'Samsatg',
            KT: getSumOfDateIndex(nightShifts, 6, 0),
            RD: getSumOfDateIndex(nightShifts, 6, 1),
        },
        {
            name: 'Sonntag',
            KT: getSumOfDateIndex(nightShifts, 0, 0),
            RD: getSumOfDateIndex(nightShifts, 0, 1),
        },
    ];

    return (
        <div className="graphElement">
            <h2>KT / RD pro Nacht</h2>
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
    const sumCalls = dateFilterd.map((value) => (selector === 0 ? value.kd : value.rd)).reduce((val1, val2) => val1 + val2);
    return Math.round((sumCalls / dateFilterd.length + Number.EPSILON) * 100) / 100;
}

export default CallTypePerWeekdayNight;
