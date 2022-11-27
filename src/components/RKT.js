import StatistikBox from './StatistikBox';

function RKT({ data }) {
    const dienste = data.length;
    const time = data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const durchschnitt = Math.round(time / dienste);
    return (
        <>
            <StatistikBox displayText={'RKT Dienste'} value={dienste} />
            <StatistikBox displayText={'RKT Zeit'} value={time} />
            <StatistikBox displayText={'RKT Durchschnitt'} value={durchschnitt} />
        </>
    );
}

export default RKT;
