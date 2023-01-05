import DatePicker from 'react-date-picker';

function Datum_addData({ value, changeDate }) {
    return (
        <div className="Datum_addData">
            <div className="DatumText_addData">
                <h3>Datum</h3>
            </div>
            <div className="DatumInput_addData">
                <DatePicker locale={'de'} minDetail={'decade'} value={value} onChange={changeDate} clearIcon={null} />
            </div>
        </div>
    );
}

export default Datum_addData;
