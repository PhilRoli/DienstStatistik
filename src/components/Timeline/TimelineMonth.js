function TimelineMonth({ year, month }) {
    const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
    const numDays = new Date(year, month + 1, 0).getDate();

    return (
        <div className="TimelineMonth">
            <div>{monthName}</div>
            <div className="TimelineDays">
                {[...Array(31)].map((e, i) => (i < numDays ? <div>{i + 1}</div> : <div>{''}</div>))}
            </div>
        </div>
    );
}

export default TimelineMonth;
