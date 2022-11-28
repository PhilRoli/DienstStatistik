import StatistikBox from '../StatistikBox';

function KTW({ data, textColor }) {
    const dienste = data.length;
    const time = data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const durchschnitt = Math.round(time / dienste);
    return (
        <>
            <StatistikBox displayText={'KTW Dienste'} value={dienste} textColor={textColor} />
            <StatistikBox displayText={'KTW Zeit'} value={time} textColor={textColor} />
            <StatistikBox displayText={'KTW Durchschnitt'} value={durchschnitt} textColor={textColor} />
        </>
    );
}

export default KTW;
