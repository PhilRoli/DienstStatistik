import StatistikBox from '../StatistikBox';

function NA({ data, textColor }) {
    const tfNAs =
        data.length === 0
            ? 0
            : data
                  .filter((value) => value.tf === true)
                  .map((value) => value.na)
                  .reduce((partialSum, a) => partialSum + a, 0);
    const summe = data.length === 0 ? 0 : data.map((value) => value.na).reduce((partialSum, a) => partialSum + a, 0);
    return (
        <>
            <StatistikBox displayText={'NA Einsätze'} value={summe} textColor={textColor} />
            <StatistikBox
                displayText={'NAs pro Dienst'}
                value={data.length === 0 ? 0 : Math.round((summe / data.length + Number.EPSILON) * 100) / 100}
                textColor={textColor}
            />
            <StatistikBox displayText={'NAs als TF'} value={tfNAs} textColor={textColor} />
        </>
    );
}

export default NA;
