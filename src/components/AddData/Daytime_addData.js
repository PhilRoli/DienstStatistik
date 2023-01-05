import AddDataQuickbutton from './AddDataQuickbutton';

function Daytime_addData({ value, changeDaytime }) {
    return (
        <div className="Daytime_addData">
            <div className="DaytimeText_addData">
                <h3>Tageszeit</h3>
            </div>
            <div className="DaytimeInput_addData">
                <div className="DaytimeDay_addData">
                    <AddDataQuickbutton
                        text={'Tag'}
                        updateValue={changeDaytime}
                        value={value}
                        className={'DatePicker_addData'}
                    />
                </div>
                <div className="DaytimeNight_addData">
                    <AddDataQuickbutton text={'Nacht'} updateValue={changeDaytime} value={value} />
                </div>
            </div>
        </div>
    );
}

export default Daytime_addData;
