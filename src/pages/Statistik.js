// Loading Spinner

// Statistic boxes
import RKT from '../components/Statistik/statistiks/RKT';
import TF from '../components/Statistik/statistiks/TF';
import AMB from '../components/Statistik/statistiks/AMB';
import Tag from '../components/Statistik/statistiks/Tag';
import Nacht from '../components/Statistik/statistiks/Nacht';
import RTW from '../components/Statistik/statistiks/RTW';
import KTW from '../components/Statistik/statistiks/KTW';
import KD from '../components/Statistik/statistiks/KD';
import RD from '../components/Statistik/statistiks/RD';
import NA from '../components/Statistik/statistiks/NA';
import Zivi from '../components/Statistik/statistiks/Zivi';
import TwentyFour from '../components/Statistik/statistiks/TwentyFour';
// Base
import Loading from '../components/Base/Loading';
import NoValidData from '../components/Base/NoValidData';
// Date Range Selector
import React, { useState } from 'react';
import DateRangePickerDiv from '../components/Datafilters/Date/DateRangePickerDiv';

function Statistik({ data }) {
    document.title = 'Statistik';
    const [dateRange, changeDateRange] = useState([new Date(2021, 0, 1, 4), new Date(new Date().getFullYear(), 11, 31, 20)]);

    if (data.length === 0) {
        return (
            <>
                <Loading />
            </>
        );
    } else {
        const dataRanged = data.filter(
            (value) => new Date(value.date) > dateRange[0] && new Date(value.date) < dateRange[1]
        );

        if (dataRanged.length === 0) {
            return (
                <>
                    <DateRangePickerDiv changeValue={changeDateRange} value={dateRange} />

                    <NoValidData />
                </>
            );
        }

        const rktData = dataRanged.filter((value) => value.type === 'RTW' || value.type === 'KTW');

        return (
            <>
                <DateRangePickerDiv changeValue={changeDateRange} value={dateRange} />

                <div className="parent">
                    <TF data={rktData.filter((value) => value.tf === true)} textColor={'#b42069'} />
                    <Zivi data={dataRanged.filter((value) => value.zug === 'Zivi')} textColor={'#b4da55'} />
                    <RKT data={rktData} textColor={'rgb(204, 204, 220)'} />

                    <AMB
                        className="AMB"
                        data={dataRanged.filter((value) => value.type === 'AMB')}
                        textColor={'rgb(255, 192, 0)'}
                    />
                    <Tag data={rktData.filter((value) => value.daytime === 'Tag')} textColor={'rgb(180, 198, 231)'} />
                    <Nacht data={rktData.filter((value) => value.daytime === 'Nacht')} textColor={'rgb(32, 55, 100)'} />
                    <KTW data={dataRanged.filter((value) => value.type === 'KTW')} textColor={'rgb(0, 176, 240)'} />
                    <RTW data={dataRanged.filter((value) => value.type === 'RTW')} textColor={'red'} />
                    <KD data={rktData} textColor={'#01516e'} />
                    <RD data={rktData} textColor={'#a30000'} />
                    <NA data={rktData} textColor={'#850111'} />
                    <TwentyFour data={getTwentyFour(rktData)} textColor={'#850180'} />
                </div>
            </>
        );
    }
}

function getTwentyFour(data) {
    let returnArray = [];
    for (let i = 0; i < data.length - 1; i++) {
        if (
            checkTwoDates(new Date(data[i].date), new Date(data[i + 1].date)) &&
            data[i].daytime !== data[i + 1].daytime
        ) {
            returnArray.push(data[i]);
            returnArray.push(data[i + 1]);
        }
    }
    return returnArray;
}

function checkTwoDates(date1, date2) {
    const date1Added = new Date(date1.getTime() + 86400000);
    if (
        (date1Added.getFullYear() === date2.getFullYear() &&
            date1Added.getMonth() === date2.getMonth() &&
            date1Added.getDate() === date2.getDate()) ||
        (date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate())
    ) {
        return true;
    } else {
        return false;
    }
}

export default Statistik;
