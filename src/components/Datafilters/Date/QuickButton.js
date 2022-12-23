function QuickButton({ text, hideMobile, changeValue, value }) {
    return (
        <div className={`quickButton ${hideMobile && 'hideMobile'}`}>
            <button onClick={() => changeValue(value)}>{text}</button>
        </div>
    );
}

export default QuickButton;
