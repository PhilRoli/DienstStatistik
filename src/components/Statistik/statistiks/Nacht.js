import StatistikBox from '../StatistikBox';

function Nacht({ data, textColor }) {
    const dienste = data.length;
    const time = dienste === 0 ? 0 : data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const durchschnitt = dienste === 0 ? 0 : Math.round(time / dienste);
    return (
        <>
            <StatistikBox displayText={'Nacht Dienste'} value={dienste} textColor={textColor} />
            <StatistikBox displayText={'Nacht Zeit'} value={time} textColor={textColor} />
            <StatistikBox displayText={'Nacht Durchschnitt'} value={durchschnitt} textColor={textColor} />
        </>
    );
}

export default Nacht;
