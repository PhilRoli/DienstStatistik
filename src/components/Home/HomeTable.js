import Dienst from '../Daten/Dienst';

function HomeTable({ data }) {
    const dataPoints = data;

    // get latest shift
    const sortet = dataPoints.sort((obj1, obj2) => (Date.parse(obj1.date) < Date.parse(obj2.date) ? 1 : -1)).slice(0, 5);

    return (
        <div className="home_wrapper">
            <table className="dienst_table home_table">
                <thead className="dienst_header home_head">
                    <tr>
                        <th className="datum_header fifteen">Datum</th>
                        <th className="daytime_header ten">Tageszeit</th>
                        <th className="type_header ten">Typ</th>
                        <th className="kd_header five">KT</th>
                        <th className="rd_header five">RD</th>
                        <th className="na_header five">NA</th>
                        <th className="sumcalls_header five">Summe</th>
                        <th className="duration_header ten">Zeit</th>
                        <th className="zug_header five">Zug</th>
                        <th className="car_header ten">Auto</th>
                        <th className="tf_header twenty">Transportführer</th>
                    </tr>
                </thead>
                <tbody>
                    {sortet.map((dataPoint) => (
                        <>
                            <Dienst key={`homeTable_data_${dataPoint['_id']}`} datenPunkt={dataPoint} />
                            <tr
                                key={`homeTable_spacer_${dataPoint['_id']}`}
                                className="spacerRow"
                                style={{ height: '5px' }}
                            />
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HomeTable;
