function TFselector({ text, hideMobile, changeValue, value }) {
    const options = ['Egal', 'Ja', 'Nein'];
    let index = options.indexOf(value) + 1;
    index >= options.length && (index = 0);
    return (
        <div className={`quickButton ${hideMobile && 'hideMobile'} wideButton`}>
            <button onClick={() => changeValue(options[index])}>TF: {value}</button>
        </div>
    );
}

export default TFselector;
