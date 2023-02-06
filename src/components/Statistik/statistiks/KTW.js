import StatistikBox from '../StatistikBox';

function KTW({ data, textColor }) {
    const dienste = data.length;
    const time = dienste === 0 ? 0 : data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const kteinsaetze = dienste === 0 ? 0 : data.map((value) => value.kd).reduce((acc, amount) => acc + amount);
    const rdeinsaetze = dienste === 0 ? 0 : data.map((value) => value.rd).reduce((acc, amount) => acc + amount);
    const einseatze = kteinsaetze + rdeinsaetze;
    const durchschnitt = dienste === 0 ? 0 : Math.round(einseatze / dienste);
    return (
        <>
            <StatistikBox displayText={'KTW Dienste'} value={dienste} textColor={textColor} />
            <StatistikBox displayText={'KTW Zeit'} value={time} textColor={textColor} />
            <StatistikBox displayText={'KTW Einsatz Durchschnitt'} value={durchschnitt} textColor={textColor} />
        </>
    );
}

export default KTW;
