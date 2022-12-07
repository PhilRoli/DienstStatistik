// Loading Spinner

// Statistic boxes
import RKT from '../components/statistiks/RKT';
import TF from '../components/statistiks/TF';
import AMB from '../components/statistiks/AMB';
import Tag from '../components/statistiks/Tag';
import Nacht from '../components/statistiks/Nacht';
import RTW from '../components/statistiks/RTW';
import KTW from '../components/statistiks/KTW';
import KD from '../components/statistiks/KD';
import RD from '../components/statistiks/RD';
import Loading from '../components/Loading';
import Zivi from '../components/statistiks/Zivi';
// Date Range Selector
import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
// Quick Selector
import KalButtonJahr from '../components/KalButtonJahr';
import KalButtonGesamt from '../components/KalButtonGesamt';

function Statistik({ data }) {
    document.title = 'Statistik';
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

        const rktData = dataRanged.filter((value) => value.type === 'RTW' || value.type === 'KTW');

        return (
            <>
                <div className="dateRangePicker">
                    <KalButtonGesamt />
                    <DateRangePicker
                        onChange={changeDateRange}
                        // default value start 2021 to last day current year
                        value={dateRange}
                        clearIcon={null}
                        locale={'de'}
                        minDetail={'decade'}
                        className={'dateRangePickerObject'}
                    />
                    <KalButtonJahr />
                </div>

                <div className="parent">
                    <TF data={rktData.filter((value) => value.tf === true)} textColor={'#b42069'} />
                    <Zivi data={dataRanged.filter((value) => value.zug === 'Zivi')} textColor={'#b4da55'} />
                    <RKT data={rktData} textColor={'rgb(204, 204, 220)'} />

                    <AMB
                        className="AMB"
                        data={dataRanged.filter((value) => value.type === 'AMB')}
                        textColor={'rgb(255, 192, 0)'}
                    />
                    <Tag data={dataRanged.filter((value) => value.daytime === 'Tag')} textColor={'rgb(180, 198, 231)'} />
                    <Nacht data={dataRanged.filter((value) => value.daytime === 'Nacht')} textColor={'rgb(32, 55, 100)'} />
                    <KTW data={dataRanged.filter((value) => value.type === 'KTW')} textColor={'rgb(0, 176, 240)'} />
                    <RTW data={dataRanged.filter((value) => value.type === 'RTW')} textColor={'red'} />
                    <KD data={rktData} textColor={''} />
                    <RD data={rktData} textColor={''} />
                </div>
            </>
        );
    }
}

export default Statistik;
