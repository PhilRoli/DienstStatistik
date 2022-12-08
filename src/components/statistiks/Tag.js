import StatistikBox from '../StatistikBox';

function Tag({ data, textColor }) {
    const dienste = data.length;
    const time = dienste === 0 ? 0 : data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const durchschnitt = dienste === 0 ? 0 : Math.round(time / dienste);
    return (
        <>
            <StatistikBox displayText={'Tag Dienste'} value={dienste} textColor={textColor} />
            <StatistikBox displayText={'Tag Zeit'} value={time} textColor={textColor} />
            <StatistikBox displayText={'Tag Durchschnitt'} value={durchschnitt} textColor={textColor} />
        </>
    );
}

export default Tag;
