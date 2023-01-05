import TFselector from './filterbuttons/TFselector';
import TageszeitSelector from './filterbuttons/TageszeitSelector';
import Typselector from './filterbuttons/Typselector';
import Zugselector from './filterbuttons/Zugselector';
import Resetselector from './filterbuttons/Resetselector';

function FilterPickerDiv({ changeTageszeit, changeType, changeZug, changeTF, tageszeit, type, zug, tf }) {
    return (
        <div className="dateRangePicker">
            <TageszeitSelector text={'Tagzeit'} hideMobile={false} changeValue={changeTageszeit} value={tageszeit} />
            <Typselector text={'Typ'} hideMobile={false} changeValue={changeType} value={type} />
            <Resetselector
                text={'Reset'}
                hideMobile={true}
                changeTageszeit={changeTageszeit}
                changeType={changeType}
                changeZug={changeZug}
                changeTF={changeTF}
            />
            <Zugselector text={'Tagd.'} hideMobile={false} changeValue={changeZug} value={zug} showKolonne={true} />
            <TFselector text={'TF: Nein'} hideMobile={false} changeValue={changeTF} value={tf} />
        </div>
    );
}

export default FilterPickerDiv;
