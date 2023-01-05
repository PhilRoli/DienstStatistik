/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unreachable */
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import QuickButton from '../components/Datafilters/Date/QuickButton';
import NumericInput from 'react-numeric-input';
import Zugselector from '../components/Datafilters/Filter/filterbuttons/Zugselector';
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

function AddData() {
    const [date, changeDate] = useState(new Date());
    const [daytime, changeDaytime] = useState('Nacht');
    const [type, changeType] = useState('KTW');
    const [kd, changeKD] = useState(0);
    const [rd, changeRD] = useState(0);
    const [na, changeNA] = useState(0);
    const [duration, changeDuration] = useState(11.5);
    const [zug, changeZug] = useState('5');
    const [car, changeCar] = useState('');
    const [tf, changeTF] = useState(true);
    document.title = 'Dienst Hinzufügen';

    // Set clock to 0 for combatability
    date.setHours(12);
    date.setMinutes(0);
    date.setMilliseconds(0);

    // TODO: Add mobile check to numeric inputs

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

    return (
        <div className="container_addData">
            <Datum_addData value={date} changeDate={changeDate} />
            <Daytime_addData value={daytime} changeDaytime={changeDaytime} />
            <Type_addData value={type} changeType={changeType} />
            <Calls_addData />
            <Duration_addData />
            <Zug_addData />
            <Car_addData />
            <Transport_addData value={tf} changeTF={changeTF} />
            <Confirm_addData />
        </div>
    );

    return (
        <div className="AddData">
            <div className="outerFlexAddData">
                <div className="rowFlexAddData">
                    <div className="elementFlexAddData textField">Datum</div>
                    <div className="elementFlexAddData oneElement">
                        <DatePicker value={date} locale={'de'} onChange={changeDate} minDetail={'decade'} />
                    </div>
                </div>
                <div className="rowFlexAddData">
                    <div className="elementFlexAddData textField">Tageszeit</div>
                    <div className="elementFlexAddData twoElements">
                        <QuickButton text={'Tag'} />
                    </div>
                    <div className="elementFlexAddData twoElements">
                        {' '}
                        <QuickButton text={'Nacht'} />
                    </div>
                </div>
                <div className="rowFlexAddData">
                    <div className="elementFlexAddData textField">Typ</div>
                    <div className="elementFlexAddData threeElements">
                        <QuickButton text={'KTW'} />
                    </div>
                    <div className="elementFlexAddData threeElements">
                        {' '}
                        <QuickButton text={'RTW'} />
                    </div>
                    <div className="elementFlexAddData threeElements">
                        {' '}
                        <QuickButton text={'AMB'} />
                    </div>
                </div>
                <div className="rowFlexAddData">
                    <div className="elementFlexAddData textField">Einsätze</div>
                    <div className="elementFlexAddData threeElements">
                        <NumericInput min={0} max={100} value={kd} step={1} inputmode="numeric" onChange={changeKD} />
                    </div>
                    <div className="elementFlexAddData threeElements">
                        <NumericInput min={0} max={100} value={rd} step={1} inputmode="numeric" onChange={changeRD} />
                    </div>
                    <div className="elementFlexAddData threeElements">
                        <NumericInput min={0} max={rd} value={na} step={1} inputmode="numeric" onChange={changeNA} />
                    </div>
                </div>
                <div className="rowFlexAddData">
                    <div className="elementFlexAddData textField">Dienstzeit</div>
                    <div className="elementFlexAddData timerangefix">
                        <NumericInput
                            min={0}
                            max={24}
                            value={duration}
                            step={0.5}
                            precision={1}
                            inputmode="numeric"
                            onChange={changeDuration}
                        />
                    </div>
                    <div className="elementFlexAddData threeElements">Timevalue</div>
                </div>
                <div className="rowFlexAddData">
                    <div className="elementFlexAddData textField">Einheit / Zug</div>
                    <div className="elementFlexAddData oneElement">
                        <Zugselector text={'Tagd.'} hideMobile={false} changeValue={changeZug} value={zug} />
                    </div>
                </div>
                <div className="rowFlexAddData">
                    <div className="elementFlexAddData textField">Auto</div>
                    <div className="elementFlexAddData oneElement">Auto</div>
                </div>
                <div className="rowFlexAddData">
                    <div className="elementFlexAddData textField">Transportführer</div>
                    <div className="elementFlexAddData twoElements">TF ja</div>
                    <div className="elementFlexAddData twoElements">TF nein</div>
                </div>
                <div className="rowFlexAddData outerConfirmField">
                    <div className="elementFlexAddData confirmField">Confirm</div>
                </div>
            </div>
        </div>
    );
}

export default AddData;
