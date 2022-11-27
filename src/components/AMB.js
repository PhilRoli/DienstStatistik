import StatistikBox from './StatistikBox';

function AMB({ data }) {
    const dienste = data.length;
    const time = data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const durchschnitt = Math.round(time / dienste);
    return (
        <>
            <StatistikBox displayText={'AMB Dienste'} value={dienste} />
            <StatistikBox displayText={'AMB Zeit'} value={time} />
            <StatistikBox displayText={'AMB Durchschnitt'} value={durchschnitt} />
        </>
    );
}

export default AMB;
