import StatistikBox from '../StatistikBox';

function AMB({ data, textColor }) {
    const dienste = data.length;
    const time = data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const durchschnitt = Math.round(time / dienste);
    return (
        <>
            <StatistikBox displayText={'AMB Dienste'} value={dienste} textColor={textColor} />
            <StatistikBox displayText={'AMB Zeit'} value={time} textColor={textColor} />
            <StatistikBox displayText={'AMB Durchschnitt'} value={durchschnitt} textColor={textColor} />
        </>
    );
}

export default AMB;
