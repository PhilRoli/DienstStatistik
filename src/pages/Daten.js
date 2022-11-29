import Dienst from '../components/Dienst';
import { RotatingLines } from 'react-loader-spinner';

function Daten({ data }) {
    document.title = 'Daten';
    if (data.length === 0) {
        return (
            <div className="center">
                <RotatingLines strokeColor="rgb(218, 37, 28)" strokeWidth="3" width="100" visible={true} />
            </div>
        );
    } else {
        return (
            <>
                <table className="dienst_table">
                    <thead className="dienst_header">
                        <tr>
                            <th className="datum_header">Datum</th>
                            <th className="daytime_header">Tageszeit</th>
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
                            <>
                                <Dienst key={dataPoint._id['$oid']} datenPunkt={dataPoint} />
                                <tr className="spacerRow" style={{ height: '5px' }} />
                            </>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Daten;
