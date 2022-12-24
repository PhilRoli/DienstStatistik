function TageszeitSelector({ text, hideMobile, changeValue, value }) {
    const options = ['Tageszeit', 'Nacht', 'Tag'];
    let index = options.indexOf(value) + 1;
    index >= options.length && (index = 0);
    return (
        <div className={`quickButton ${hideMobile && 'hideMobile'} wideButton`}>
            <button onClick={() => changeValue(options[index])}>{value}</button>
        </div>
    );
}

export default TageszeitSelector;
