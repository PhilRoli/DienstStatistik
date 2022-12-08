import StatistikBox from '../StatistikBox';

function KD({ data, textColor }) {
    const tfkds =
        data.length === 0
            ? 0
            : data
                  .filter((value) => value.tf === true)
                  .map((value) => value.kd)
                  .reduce((partialSum, a) => partialSum + a, 0);
    const summe = data.length === 0 ? 0 : data.map((value) => value.kd).reduce((partialSum, a) => partialSum + a, 0);
    return (
        <>
            <StatistikBox displayText={'KD Einsätze'} value={summe} textColor={textColor} />
            <StatistikBox
                displayText={'KDs pro Dienst'}
                value={data.length === 0 ? 0 : Math.round(summe / data.length)}
                textColor={textColor}
            />
            <StatistikBox displayText={'KDs als TF'} value={tfkds} textColor={textColor} />
        </>
    );
}

export default KD;
