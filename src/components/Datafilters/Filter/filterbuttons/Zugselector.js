import Dropdown from '../../../Base/Dropdown';
import { useState } from 'react';
import ZugDropwdownButton from './ZugDropwdownButton';

function Zugselector({ text, hideMobile, changeValue, value }) {
    // Dropdown Menu
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    // const options = ['Zug', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', 'Zivi', 'Tagd.', 'Extern', 'AMB'];

    return (
        <div className={`quickButton ${hideMobile && 'hideMobile'} wideButton`}>
            <Dropdown
                open={open}
                trigger={<button onClick={handleOpen}>{value}</button>}
                menu={[
                    <ZugDropwdownButton value={'Zug'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'1'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'2'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'3'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'4'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'5'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'6'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'7'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'8'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'9'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'10'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'11'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'Kolonne'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'Zivi'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'Tagd.'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'Extern'} setOpen={setOpen} changeValue={changeValue} />,
                    <ZugDropwdownButton value={'AMB'} setOpen={setOpen} changeValue={changeValue} />
                ]}
            />
        </div>
    );
}

export default Zugselector;
