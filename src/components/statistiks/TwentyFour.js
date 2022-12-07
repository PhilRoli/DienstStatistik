import StatistikBox from '../StatistikBox';

function TwentyFour({ data, textColor }) {
    const dienste = data.length / 2;
    const time = data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const durchschnitt = Math.round(time / dienste);
    return (
        <>
            <StatistikBox displayText={'24H Dienste'} value={dienste} textColor={textColor} />
            <StatistikBox displayText={'24H Zeit'} value={time} textColor={textColor} />
            <StatistikBox displayText={'24H Durchschnitt'} value={durchschnitt} textColor={textColor} />
        </>
    );
}

export default TwentyFour;
