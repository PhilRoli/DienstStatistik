import AddDataQuickbutton from './AddDataQuickbutton';

function Type_addData({ value, changeType }) {
    return (
        <div className="Type_addData">
            <div className="TypeText_addData">
                <h3>Typ</h3>
            </div>
            <div className="TypeInput_addData">
                <div className="TypeKTW_addData">
                    <AddDataQuickbutton text={'KTW'} updateValue={changeType} value={value} />
                </div>
                <div className="TypeRTW_addData">
                    <AddDataQuickbutton text={'RTW'} updateValue={changeType} value={value} />
                </div>
                <div className="TypeAMB_addData">
                    <AddDataQuickbutton text={'AMB'} updateValue={changeType} value={value} />
                </div>
            </div>
        </div>
    );
}

export default Type_addData;
