function QuickButton({ text, hideMobile, changeValue, value, isActive }) {
    return (
        <div className={`quickButton ${hideMobile && 'hideMobile'}`}>
            <button
                style={isActive === true ? { backgroundColor: '#181b1f' } : { backgroundColor: '' }}
                onClick={() => changeValue(value)}
            >
                {text}
            </button>
        </div>
    );
}

export default QuickButton;
