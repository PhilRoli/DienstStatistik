import StatistikBox from '../StatistikBox';

function RTW({ data, textColor }) {
    const dienste = data.length;
    const time = dienste === 0 ? 0 : data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const kteinsaetze = dienste === 0 ? 0 : data.map((value) => value.kd).reduce((acc, amount) => acc + amount);
    const rdeinsaetze = dienste === 0 ? 0 : data.map((value) => value.rd).reduce((acc, amount) => acc + amount);
    const einseatze = kteinsaetze + rdeinsaetze;
    const durchschnitt = dienste === 0 ? 0 : Math.round(einseatze / dienste);
    return (
        <>
            <StatistikBox displayText={'RTW Dienste'} value={dienste} textColor={textColor} />
            <StatistikBox displayText={'RTW Zeit'} value={time} textColor={textColor} />
            <StatistikBox displayText={'RTW Einsätze Durchschnitt'} value={durchschnitt} textColor={textColor} />
        </>
    );
}

export default RTW;
