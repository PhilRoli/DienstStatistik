/* eslint-disable react/jsx-pascal-case */
import { useState } from 'react';
// Grid components
import Datum_addData from '../components/AddData/Datum_addData';
import Daytime_addData from '../components/AddData/Daytime_addData';
import Type_addData from '../components/AddData/Type_addData';
import Calls_addData from '../components/AddData/Calls_addData';
import Duration_addData from '../components/AddData/Duration_addData';
import Zug_addData from '../components/AddData/Zug_addData';
import Car_addData from '../components/AddData/Car_addData';
import Transport_addData from '../components/AddData/Transport_addData';
import Confirm_addData from '../components/AddData/Confirm_addData';

function AddData({ data }) {
    const [date, changeDate] = useState(new Date());
    const [daytime, changeDaytime] = useState('Nacht');
    const [type, changeType] = useState('KTW');
    const [kd, changeKD] = useState(0);
    const [rd, changeRD] = useState(0);
    const [na, changeNA] = useState(0);
    const [duration, changeDuration] = useState(12);
    const [zug, changeZug] = useState('5');
    const [car, changeCar] = useState('');
    const [tf, changeTF] = useState(true);
    document.title = 'Dienst Hinzufügen';

    // Set clock to 0 for combatability
    date.setHours(12);
    date.setMinutes(0);
    date.setMilliseconds(0);

    const jsonObj = {
        date: date,
        daytime: daytime,
        type: type,
        kd: kd,
        rd: rd,
        na: na,
        sumcalls: kd + rd + na,
        duration: duration,
        zug: zug,
        car: car,
        tf: tf,
    };
    console.log(jsonObj);

    const ktList = createUniqieList(data, 'kd');
    const rdList = createUniqieList(data, 'rd');
    const naList = createUniqieList(data, 'na');
    const durationList = createUniqieList(data, 'duration');
    const zugList = createUniqieList(data, 'zug');
    const carList = createUniqieList(data, 'car');

    return (
        <div className="container_addData">
            <Datum_addData value={date} changeDate={changeDate} />
            <Daytime_addData value={daytime} changeDaytime={changeDaytime} />
            <Type_addData value={type} changeType={changeType} />
            <Calls_addData
                ktValue={kd}
                ktData={ktList}
                changeKT={changeKD}
                rdValue={rd}
                rdData={rdList}
                changeRD={changeRD}
                naValue={na}
                naData={naList}
                changeNA={changeNA}
            />
            <Duration_addData changeValue={changeDuration} data={durationList} value={duration} />
            <Zug_addData value={zug} changeValue={changeZug} data={zugList} />
            <Car_addData changeValue={changeCar} data={carList} />
            <Transport_addData value={tf} changeTF={changeTF} />
            <Confirm_addData />
        </div>
    );
}

export default AddData;

function createUniqieList(data, key) {
    var unsortetList = [];
    if (data.length !== 0) {
        data.forEach((element) => {
            element[key] !== '' && unsortetList.push(element[key]);
        });
    }

    const sortetList =
        typeof unsortetList[0] === 'undefined'
            ? []
            : typeof unsortetList[0] === 'string'
            ? [...new Set(unsortetList)].sort()
            : [...new Set(unsortetList)].sort((a, b) => a - b);

    return sortetList;
}
