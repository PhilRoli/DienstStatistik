function ZugDropwdownButton({ value, setOpen, changeValue }) {
    return (
        <button
            value={value}
            onClick={(e) => {
                changeValue(e.target.value);
                setOpen(false);
            }}
        >
            {value}
        </button>
    );
}

export default ZugDropwdownButton;
