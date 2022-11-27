function StatistikBox({ displayText, value }) {
    return (
        <div className="StatistikBox">
            <div className="displayText">{displayText}</div>
            <div className="value">{value}</div>
        </div>
    );
}

export default StatistikBox;
