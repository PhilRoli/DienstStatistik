import AddDataQuickbutton from './AddDataQuickbutton';

function Transport_addData({ value, changeTF }) {
    return (
        <div className="TF_addData">
            <div className="TFText_addData">
                <h3>Transportführer</h3>
            </div>
            <div className="TFInput_addData">
                <div className="TFno_addData">
                    <AddDataQuickbutton text={'Nein'} updateValue={changeTF} value={value} />
                </div>
                <div className="TFyes_addData">
                    <AddDataQuickbutton text={'Ja'} updateValue={changeTF} value={value} />
                </div>
            </div>
        </div>
    );
}

export default Transport_addData;
