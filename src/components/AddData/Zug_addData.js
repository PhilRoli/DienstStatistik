import Zugselector from '../Datafilters/Filter/filterbuttons/Zugselector';
import StringInput from './StringInput';

function Zug_addData({ value, changeValue, data }) {
    return (
        <div className="Zug_addData">
            <div className="ZugText_addData">
                <h3>Zug</h3>
            </div>
            <div className="ZugInput_addData">
                {/* <Zugselector value={value} changeValue={changeValue} /> */}
                <StringInput data={data} changeValue={changeValue} placeholder={'Zug'} name={'zug'} />
            </div>
        </div>
    );
}

export default Zug_addData;
