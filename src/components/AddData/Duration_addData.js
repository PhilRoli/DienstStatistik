import NumberInput from './NumberInput';

function Duration_addData({ changeValue, data, value }) {
    return (
        <div className="Duration_addData">
            <div className="DurationText_addData">
                <h3>Dienstzeit</h3>
            </div>
            <div className="DurationInput_addData">
                <NumberInput data={data} changeValue={changeValue} placeholder={'12'} name={'duration'} maxValue={24} value={value} />
            </div>
        </div>
    );
}

export default Duration_addData;
