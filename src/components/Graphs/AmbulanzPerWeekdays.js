import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function AmbulanzPerWeekdays({ data }) {
    const zugFilter = data.filter((value) => value.zug === 'AMB');
    const nightShifts = zugFilter.filter((value) => value.daytime === 'Nacht');
    const dayShifts = zugFilter.filter((value) => value.daytime === 'Tag');

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
            <h2>Ambulanz pro Wochentag</h2>
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
    return dateFilterd.length;
}

export default AmbulanzPerWeekdays;
