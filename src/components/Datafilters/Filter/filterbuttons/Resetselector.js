function Resetselector({ text, hideMobile, changeTageszeit, changeType, changeZug, changeTF }) {
    // function setDefaultValue() {
    //     changeTageszeit('Tageszeit');
    //     changeType('Egal');
    //     changeZug('Zug');
    //     changeTF('Egal');
    // }

    return (
        <div className={`quickButton ${hideMobile && 'hideMobile'}`}>
            <button
                onClick={() => {
                    changeTageszeit('Tageszeit');
                    changeType('Egal');
                    changeZug('Zug');
                    changeTF('Egal');
                }}
            >
                {text}
            </button>
        </div>
    );
}

export default Resetselector;
