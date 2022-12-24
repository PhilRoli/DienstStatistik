function Typselector({ text, hideMobile, changeValue, value }) {
    const options = ['Egal', 'KTW', 'RTW', 'RKT', 'AMB'];
    let index = options.indexOf(value) + 1;
    index >= options.length && (index = 0);
    return (
        <div className={`quickButton ${hideMobile && 'hideMobile'} wideButton`}>
            <button onClick={() => changeValue(options[index])}>Typ: {value}</button>
        </div>
    );
}

export default Typselector;
