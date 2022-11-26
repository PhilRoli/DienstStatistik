import Dienst from '../components/Dienst';

function Daten({ data }) {
    // console.log(data);
    return (
        <>
            {data.map((dataPoint) => (
                <Dienst datenPunkt={dataPoint} />
            ))}
        </>
    );
}

export default Daten;
