import StatistikBox from '../StatistikBox';

function RD({ data, textColor }) {
    const tfRDs = data
        .filter((value) => value.tf === true)
        .map((value) => value.rd)
        .reduce((partialSum, a) => partialSum + a, 0);
    const summe = data.map((value) => value.rd).reduce((partialSum, a) => partialSum + a, 0);
    return (
        <>
            <StatistikBox displayText={'RD Einsätze'} value={summe} textColor={textColor} />
            <StatistikBox displayText={'RDs pro Dienst'} value={Math.round(summe / data.length)} textColor={textColor} />
            <StatistikBox displayText={'RDs als TF'} value={tfRDs} textColor={textColor} />
        </>
    );
}

export default RD;
