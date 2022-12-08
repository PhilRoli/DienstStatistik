import StatistikBox from '../StatistikBox';

function RTW({ data, textColor }) {
    const dienste = data.length;
    const time = dienste === 0 ? 0 : data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const durchschnitt = dienste === 0 ? 0 : Math.round(time / dienste);
    return (
        <>
            <StatistikBox displayText={'RTW Dienste'} value={dienste} textColor={textColor} />
            <StatistikBox displayText={'RTW Zeit'} value={time} textColor={textColor} />
            <StatistikBox displayText={'RTW Durchschnitt'} value={durchschnitt} textColor={textColor} />
        </>
    );
}

export default RTW;
