import StatistikBox from '../StatistikBox';

function Zivi({ data, textColor }) {
    if (data.length === 0) {
        return (
            <>
                <StatistikBox displayText={'Zivi Dienste'} value={0} textColor={textColor} />
                <StatistikBox displayText={'Zivi Zeit'} value={0} textColor={textColor} />
                <StatistikBox displayText={'Zivi Einsätze'} value={0} textColor={textColor} />
            </>
        );
    } else {
        const dienste = data.length;
        const time = data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
        const zivikds = data
            .filter((value) => value.zug === 'Zivi')
            .map((value) => value.kd)
            .reduce((partialSum, a) => partialSum + a, 0);
        const zivirds = data
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
}

export default Zivi;
