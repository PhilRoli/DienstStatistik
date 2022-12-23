import StatistikBox from '../StatistikBox';

function Zivi({ data, textColor }) {
    const dienste = data.length;
    const time = dienste === 0 ? 0 : data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const zivikds =
        dienste === 0
            ? 0
            : data
                  .filter((value) => value.zug === 'Zivi')
                  .map((value) => value.kd)
                  .reduce((partialSum, a) => partialSum + a, 0);
    const zivirds =
        dienste === 0
            ? 0
            : data
                  .filter((value) => value.zug === 'Zivi')
                  .map((value) => value.rd)
                  .reduce((partialSum, a) => partialSum + a, 0);
    return (
        <>
            <StatistikBox displayText={'Zivi Dienste'} value={dienste} textColor={textColor} />
            <StatistikBox displayText={'Zivi Zeit'} value={time} textColor={textColor} />
            <StatistikBox displayText={'Zivi Einsätze'} value={zivikds + zivirds} textColor={textColor} />
        </>
    );
}

export default Zivi;
