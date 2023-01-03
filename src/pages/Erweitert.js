import Loading from '../components/Base/Loading';
import React, { useState } from 'react';
import DateRangePickerDiv from '../components/Datafilters/Date/DateRangePickerDiv';
// Data Rows
import ErweitertZugBody from '../components/Erweitert/ErweitertZugBody';
import ErweitertAutoBody from '../components/Erweitert/ErweitertAutoBody';

function Erweitert({ data }) {
    document.title = 'Erweitert';
    const [dateRange, changeDateRange] = useState([new Date(2021, 0, 1), new Date(new Date().getFullYear(), 11, 31)]);

    if (data.length === 0) {
        return (
            <>
                <Loading />
            </>
        );
    } else {
        // Filter date
        const filteredData = data.filter(
            (value) => new Date(value.date) > dateRange[0] && new Date(value.date) < dateRange[1].setHours(23)
        );
        if (filteredData.length === 0) {
            return (
                <>
                    <DateRangePickerDiv changeValue={changeDateRange} value={dateRange} />{' '}
                </>
            );
        }

        return (
            <>
                <DateRangePickerDiv changeValue={changeDateRange} value={dateRange} />
                {/* Zug Table */}
                <table className="erweitert_table">
                    <thead className="erweitert_header">
                        <tr>
                            <th className="zug_header_erweitert">Zug / Einheit</th>
                            <th className="dienste_header_erweitert">Dienste</th>
                            <th className="duration_header_erweitert">Stunden</th>
                            <th className="percent_header_erweitert">Prozent</th>
                            <th className="ktw_header_erweitert">KTW</th>
                            <th className="ktw_tf_header_erweitert">KTW TF</th>
                            <th className="rtw_header_erweitert">RTW</th>
                            <th className="rtw_tf_header_erweitert">RTW TF</th>
                            <th className="tf_header_erweitert">TF Dienste</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ErweitertZugBody daten={filteredData} />
                    </tbody>
                </table>
                {/* Auto Table */}
                <table className="auto_table">
                    <thead className="auto_header">
                        <tr>
                            <th className="kennung_header_auto">Funkkennung</th>
                            <th className="dienste_header_auto">Dienste</th>
                            <th className="duration_header_auto">Stunden</th>
                            <th className="kt_header_auto">KT</th>
                            <th className="kt_tf_header_auto">KT TF</th>
                            <th className="rd_header_auto">RD</th>
                            <th className="rd_tf_header_auto">RD TF</th>
                            <th className="na_header_auto">NA</th>
                            <th className="na_tf_header_auto">NA TF</th>
                            <th className="tf_header_auto">TF Dienste</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ErweitertAutoBody daten={filteredData} />
                    </tbody>
                </table>
            </>
        );
    }
}

export default Erweitert;
