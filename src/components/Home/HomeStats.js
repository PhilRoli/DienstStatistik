import StatistikBox from '../Statistik/StatistikBox';

function HomeStats({ data, textColor }) {
    const dataPoints = data

    const dienste = dataPoints.length || 0;
    const time = dienste === 0 ? 0 : dataPoints.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const sumcalls = dienste === 0 ? 0 : dataPoints.map((value) => value.sumcalls).reduce((acc, amount) => acc + amount);

    return (
        <>
            <div className="parent">
                <StatistikBox displayText={'Dienste'} value={dienste} textColor={textColor} />
                <StatistikBox displayText={'Stunden'} value={time} textColor={textColor} />
                <StatistikBox displayText={'Einsätze'} value={sumcalls} textColor={textColor} />
            </div>
        </>
    );
}

export default HomeStats;
