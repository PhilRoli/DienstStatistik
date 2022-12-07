import Dienst from '../components/Dienst';
import Loading from '../components/Loading';
// Date Range Selector
import React, { useState } from 'react';
import DateRangePickerDiv from '../components/DateRangePickerDiv';

function Daten({ data }) {
    document.title = 'Daten';
    const [dateRange, changeDateRange] = useState([new Date(2021, 0, 1), new Date(new Date().getFullYear(), 11, 31)]);

    if (data.length === 0) {
        return (
            <>
                <Loading />
            </>
        );
    } else {
        const dataRanged = data.filter(
            (value) => new Date(value.date.$date) > dateRange[0] && new Date(value.date.$date) < dateRange[1]
        );

        if (dataRanged.length === 0) {
            changeDateRange([new Date(2021, 0, 1), new Date(new Date().getFullYear(), 11, 31)]);
        }

        return (
            <>
                <DateRangePickerDiv changeValue={changeDateRange} value={dateRange} />

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
                        {dataRanged.map((dataPoint) => (
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
