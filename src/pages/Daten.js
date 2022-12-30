// Base
import Dienst from '../components/Daten/Dienst';
import Loading from '../components/Base/Loading';
import NoValidData from '../components/Base/NoValidData';
// Date Range Selector
import React, { useState } from 'react';
import DateRangePickerDiv from '../components/Datafilters/Date/DateRangePickerDiv';
import FilterPickerDiv from '../components/Datafilters/Filter/FilterPickerDiv';

function Daten({ data }) {
    document.title = 'Daten';
    let filteredData = data;
    // Date range
    const [dateRange, changeDateRange] = useState([new Date(2021, 0, 1), new Date(new Date().getFullYear(), 11, 31)]);

    // Tageszeit
    const [tageszeit, changeTageszeit] = useState('Tageszeit');

    // Typ
    const [typ, changeTyp] = useState('Egal');

    // Zug
    const [zug, changeZug] = useState('Zug');

    // Transportfuehrer
    const [transportfuehrer, changeTransportfuehrer] = useState('Egal');

    if (filteredData.length === 0) {
        return (
            <>
                <Loading />
            </>
        );
    } else {
        // Filter date
        filteredData = data.filter(
            (value) => new Date(value.date) > dateRange[0] && new Date(value.date) < dateRange[1].setHours(23)
        );

        // Filter Tageszeit
        tageszeit !== 'Tageszeit' && (filteredData = filteredData.filter((value) => value.daytime === tageszeit));

        // Filter Type
        typ !== 'Egal' &&
            (typ !== 'RKT'
                ? (filteredData = filteredData.filter((value) => value.type === typ))
                : (filteredData = filteredData.filter((value) => value.type === 'RTW' || value.type === 'KTW')));

        // Filter Zug
        zug !== 'Zug' &&
            (zug === 'Kolonne'
                ? (filteredData = filterKolonne(filteredData))
                : (filteredData = filteredData.filter((value) => value.zug === zug)));

        // Filter TF
        transportfuehrer !== 'Egal' &&
            (transportfuehrer === 'Ja'
                ? (filteredData = filteredData.filter((value) => value.tf === true))
                : (filteredData = filteredData.filter((value) => value.tf === false)));

        // check if data filtered != 0
        if (filteredData.length === 0) {
            return (
                <>
                    <DateRangePickerDiv changeValue={changeDateRange} value={dateRange} />

                    <FilterPickerDiv
                        changeTageszeit={changeTageszeit}
                        changeType={changeTyp}
                        changeZug={changeZug}
                        changeTF={changeTransportfuehrer}
                        tageszeit={tageszeit}
                        type={typ}
                        zug={zug}
                        tf={transportfuehrer}
                    />

                    <NoValidData />
                </>
            );
        }

        return (
            <>
                <DateRangePickerDiv changeValue={changeDateRange} value={dateRange} />

                <FilterPickerDiv
                    changeTageszeit={changeTageszeit}
                    changeType={changeTyp}
                    changeZug={changeZug}
                    changeTF={changeTransportfuehrer}
                    tageszeit={tageszeit}
                    type={typ}
                    zug={zug}
                    tf={transportfuehrer}
                />

                <table className="dienst_table">
                    <thead className="dienst_header">
                        <tr>
                            <th className="datum_header">Datum</th>
                            <th className="daytime_header">Tageszeit</th>
                            <th className="type_header">Typ</th>
                            <th className="kd_header">KT</th>
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
                        {filteredData.map((dataPoint) => (
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

function filterKolonne(dataset) {
    return dataset
        .filter((value) => value.zug !== 'Zivi')
        .filter((value) => value.zug !== 'Tagdienst')
        .filter((value) => value.zug !== 'Extern')
        .filter((value) => value.zug !== 'AMB');
}

export default Daten;
