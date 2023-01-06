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

function AddData({ data }) {
    const [date, changeDate] = useState(new Date());
    const [daytime, changeDaytime] = useState('Nacht');
    const [type, changeType] = useState('KTW');
    const [kd, changeKD] = useState(0);
    const [rd, changeRD] = useState(0);
    const [na, changeNA] = useState(0);
    const [duration, changeDuration] = useState(12);
    const [zug, changeZug] = useState('');
    const [car, changeCar] = useState('');
    const [tf, changeTF] = useState(true);
    const [submiting, toggleSubmit] = useState(false);
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
        sumcalls: kd + rd,
        duration: duration,
        zug: zug,
        car: car,
        tf: tf,
    };

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
            <Car_addData changeValue={changeCar} data={carList} value={car} />
            <Transport_addData value={tf} changeTF={changeTF} />
            <div className="Confirm_addData">
                <button
                    type="submit"
                    onClick={async () => {
                        var errorList = [];
                        toggleSubmit(true)

                        // Check date
                        if (typeof jsonObj.date.getMonth !== 'function') {
                            errorList.push('Datum ist inkorrekt');
                            changeDate(new Date());
                        }

                        // Check daytime
                        if (
                            typeof jsonObj.type !== 'string' ||
                            (jsonObj.daytime !== 'Tag' && jsonObj.daytime !== 'Nacht') ||
                            jsonObj.type === ''
                        ) {
                            errorList.push('Tageszeit ist inkorrekt');
                            changeDaytime('Nacht');
                        }

                        // Check type
                        if (
                            typeof jsonObj.type !== 'string' ||
                            (jsonObj.type !== 'KTW' && jsonObj.type !== 'RTW' && jsonObj.type !== 'AMB') ||
                            jsonObj.daytime === ''
                        ) {
                            errorList.push('Typ ist inkorrekt');
                            changeType('KTW');
                        }

                        // Check KT
                        if (typeof jsonObj.kd !== 'number' || jsonObj.kd < 0) {
                            errorList.push('KT ist inkorrekt');
                            changeKD(0);
                        }

                        // Check RD
                        if (typeof jsonObj.rd !== 'number' || jsonObj.rd < 0) {
                            errorList.push('RD ist inkorrekt');
                            changeRD(0);
                        }

                        // Check NA
                        if (typeof jsonObj.na !== 'number' || jsonObj.na < 0 || jsonObj.na > jsonObj.rd) {
                            errorList.push('NA ist inkorrekt');
                            changeNA(0);
                        }

                        // Check duration
                        if (typeof jsonObj.duration !== 'number' || jsonObj.duration < 0 || jsonObj.duration > 24) {
                            errorList.push('Dienstzeit ist inkorrekt');
                            changeDuration(12);
                        }

                        // Check zug
                        if (typeof jsonObj.zug !== 'string' || jsonObj.zug === '') {
                            errorList.push('Zug ist inkorrekt');
                            changeZug('');
                        }

                        // Check car
                        if (
                            typeof jsonObj.car !== 'string' ||
                            (/^\d{2}-\d{3}/gm.test(jsonObj.car) === false && jsonObj.car !== '')
                        ) {
                            errorList.push('Auto ist inkorrekt');
                            changeCar('');
                        }

                        // Check tf
                        if (typeof jsonObj.tf !== 'boolean' || (jsonObj.tf !== true && jsonObj.tf !== false)) {
                            errorList.push('Tageszeit ist inkorrekt');
                            changeTF(true);
                        }

                        if (errorList.length === 0) {
                            console.log('Lets Submit');
                            console.log(jsonObj)
                            // return;
                            const response = await fetch(
                                'https://dienststatistikbackend-production.up.railway.app/api/post',
                                {
                                    method: 'POST',
                                    body: JSON.stringify(jsonObj),
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                }
                            ).catch((error) => {
                                console.error(error);
                            });
                            console.log(response);
                            toggleSubmit(false)
                        } else {
                            window.alert(errorList.join('\r\n'));
                            toggleSubmit(false)
                        }
                    }}
                    disabled={submiting}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}

function createUniqieList(data, key) {
    var unsortetList = [];
    if (data.length !== 0) {
        data.forEach((element) => {
            element[key] !== '' && unsortetList.push(element[key]);
        });
    }

    const uniqueList = [...new Set(unsortetList)].sort();

    const numbers = uniqueList.filter((element) => typeof element === 'number' || isNumeric(element) ).sort((a, b) => a-b)
    const strings = uniqueList.filter((element) => typeof element !== 'number' && !isNumeric(element) ).sort();

    const sortetList = numbers.concat(strings);

    return sortetList;
}

function isNumeric(str) {
    if (typeof str != 'string') return false; // we only process strings!
    return (
        !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
}

export default AddData;
