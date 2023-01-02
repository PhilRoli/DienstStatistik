/* eslint-disable no-unreachable */
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import QuickButton from '../components/Datafilters/Date/QuickButton';
import NumericInput from 'react-numeric-input';
import Zugselector from '../components/Datafilters/Filter/filterbuttons/Zugselector';

function AddData() {
    const [date, changeDate] = useState(new Date());
    const [kd, changeKD] = useState(0);
    const [rd, changeRD] = useState(0);
    const [na, changeNA] = useState(0);
    const [duration, changeDuration] = useState(11.5);
    const [zug, changeZug] = useState('5');
    document.title = 'Dienst Hinzufügen';

    // TODO: Add mobile check to numeric inputs

    return <div>AddData</div>;

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
