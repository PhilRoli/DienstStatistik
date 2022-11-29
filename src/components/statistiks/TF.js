import StatistikBox from '../StatistikBox';

function TF({ data, textColor }) {
    const dienste = data.length;
    const time = data.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const tfkds = data
        .filter((value) => value.tf === true)
        .map((value) => value.kd)
        .reduce((partialSum, a) => partialSum + a, 0);
    const tfrds = data
        .filter((value) => value.tf === true)
        .map((value) => value.rd)
        .reduce((partialSum, a) => partialSum + a, 0);
    return (
        <>
            <StatistikBox displayText={'TF Dienste'} value={dienste} textColor={textColor} />
            <StatistikBox displayText={'TF Zeit'} value={time} textColor={textColor} />
            <StatistikBox displayText={'TF Einsätze'} value={tfkds + tfrds} textColor={textColor} />
        </>
    );
}

export default TF;
