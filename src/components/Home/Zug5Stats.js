import StatistikBox from '../Statistik/StatistikBox';

function Zug5Stats({ data, textColor }) {
    const dataPoints = data.filter((value) => value.zug === '5');

    const dienste = dataPoints.length || 0;
    const time = dienste === 0 ? 0 : dataPoints.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const sumcalls = dienste === 0 ? 0 : dataPoints.map((value) => value.sumcalls).reduce((acc, amount) => acc + amount);

    return (
        <>
            <StatistikBox displayText={'Zug 5 Dienste'} value={dienste} textColor={textColor} />
            <StatistikBox displayText={'Zug 5 Stunden'} value={time} textColor={textColor} />
            <StatistikBox displayText={'Zug 5 Einsätze'} value={sumcalls} textColor={textColor} />
        </>
    );
}

export default Zug5Stats;
