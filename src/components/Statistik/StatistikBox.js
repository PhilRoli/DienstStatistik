function StatistikBox({ displayText, value, textColor }) {
    return (
        <div className="StatistikBox">
            <div className="displayText">{displayText}</div>
            <div className="value" style={{ color: textColor }}>
                {value}
            </div>
        </div>
    );
}

export default StatistikBox;
