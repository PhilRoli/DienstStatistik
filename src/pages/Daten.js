import Dienst from '../components/Dienst';

function Daten({ data }) {
    // console.log(data);
    return (
        <>
            <table className="dienst_table">
                <thead className="dienst_header">
                    <tr>
                        <th className="datum_header">Datum</th>
                        <th className="daytime_header">Schicht</th>
                        <th className="type_header">Typ</th>
                        <th className="kd_header">KD</th>
                        <th className="rd_header">RD</th>
                        <th className="na_header">NA</th>
                        <th className="sumcalls_header">Summe</th>
                        <th className="duration_header">Zeit</th>
                        <th className="zug_header">Zug</th>
                        <th className="car_header">Auto</th>
                        <th className="tf_header">Transportführer</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataPoint) => (
                        <Dienst key={dataPoint._id['$oid']} datenPunkt={dataPoint} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Daten;
