import { useState } from 'react';
import DatePicker from 'react-date-picker';
import QuickButton from '../components/Datafilters/Date/QuickButton';
import NumericInput from 'react-numeric-input';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker';

function AddData() {
    const [date, changeDate] = useState(new Date());
    const [timeRange, changeTimeRange] = useState(['18:30:00', '06:00:00']);
    const [kd, changeKD] = useState(0);
    const [rd, changeRD] = useState(0);
    const [na, changeNA] = useState(0);
    document.title = 'Dienst Hinzufügen';

    // TODO: Add mobile check to numeric inputs

    return (
        <>
            {/* <div className="AddData">
                <div className="DatePicker">
                    <DatePicker value={date} locale={'de'} onChange={changeDate} minDetail={'decade'} />
                </div>
                <div className="daytimePicker">
                    <QuickButton text={'Tag'} />
                    <QuickButton text={'Nacht'} />
                </div>
                <div className="typePicker">
                    <QuickButton text={'KTW'} />
                    <QuickButton text={'RTW'} />
                    <QuickButton text={'AMB'} />
                </div>
                <div className="kdInput">
                    <NumericInput min={0} max={100} value={kd} onChange={changeKD} />
                </div>
                <div className="rdInput">
                    <NumericInput min={0} max={100} value={rd} onChange={changeRD} />
                </div>
                <div className="ndInput">
                    <NumericInput min={0} max={rd} value={na} onChange={changeNA} />
                </div>
                <div className="timeInput">
                <TimeRangePicker locale={'de'} value={timeRange} onChange={changeTimeRange} />
                </div>
                <div className="zugPicker"></div>
                <div className="carInput"></div>
                <div className="tfSelector"></div>
            </div> */}
            <table>
                <tbody>
                    <tr>
                        <td>
                            <DatePicker value={date} locale={'de'} onChange={changeDate} minDetail={'decade'} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ display: 'flex' }}>
                            <QuickButton text={'Tag'} />
                            <QuickButton text={'Nacht'} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ display: 'flex' }}>
                            <QuickButton text={'KTW'} />
                            <QuickButton text={'RTW'} />
                            <QuickButton text={'AMB'} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default AddData;
