import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CallsPerWeekdays({ data }) {
    const nightShifts = data.filter((value) => value.daytime === 'Nacht');
    const dayShifts = data.filter((value) => value.daytime === 'Tag');

    const chartData = [
        {
            name: 'Montag',
            Tagdienst: getSumOfDateIndex(dayShifts, 1),
            Nachtdienst: getSumOfDateIndex(nightShifts, 1),
        },
        {
            name: 'Dienstag',
            Tagdienst: getSumOfDateIndex(dayShifts, 2),
            Nachtdienst: getSumOfDateIndex(nightShifts, 2),
        },
        {
            name: 'Mittwoch',
            Tagdienst: getSumOfDateIndex(dayShifts, 3),
            Nachtdienst: getSumOfDateIndex(nightShifts, 3),
        },
        {
            name: 'Donnerstag',
            Tagdienst: getSumOfDateIndex(dayShifts, 4),
            Nachtdienst: getSumOfDateIndex(nightShifts, 4),
        },
        {
            name: 'Freitag',
            Tagdienst: getSumOfDateIndex(dayShifts, 5),
            Nachtdienst: getSumOfDateIndex(nightShifts, 5),
        },
        {
            name: 'Samsatg',
            Tagdienst: getSumOfDateIndex(dayShifts, 6),
            Nachtdienst: getSumOfDateIndex(nightShifts, 6),
        },
        {
            name: 'Sonntag',
            Tagdienst: getSumOfDateIndex(dayShifts, 0),
            Nachtdienst: getSumOfDateIndex(nightShifts, 0),
        },
    ];

    return (
        <div className="graphElement">
            <h2> Einsätze pro Wochentag</h2>
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
                    <Bar dataKey="Nachtdienst" stackId="a" fill="#203764" isAnimationActive={false} />
                    <Bar dataKey="Tagdienst" stackId="a" fill="#B4C6E7" isAnimationActive={false} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

function getSumOfDateIndex(data, index) {
    const dateFilterd = data.filter((value) => new Date(value.date).getDay() === index);
    // If no data exists for the give day, exit
    if (dateFilterd.length === 0) {
        return 0;
    }
    const sumCalls = dateFilterd.map((value) => value.sumcalls).reduce((val1, val2) => val1 + val2);
    return Math.round((sumCalls / dateFilterd.length + Number.EPSILON) * 100) / 100;
}

export default CallsPerWeekdays;
