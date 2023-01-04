import TimelineMonthDays from './TimelineMonthDays';

function TimelineMonth({ year, month, data }) {
    const monthName = new Date(year, month).toLocaleString('default', {
        month: window.matchMedia('(max-width: 900px)').matches ? 'short' : 'long',
    });
    const numDays = new Date(year, month + 1, 0).getDate();

    return (
        <div className="TimelineMonth">
            <div key={'monthName_' + year + '_' + month}>{monthName}</div>
            <TimelineMonthDays
                key={'monthDays_' + year + '_' + month}
                year={year}
                month={month}
                days={numDays}
                data={data}
            />
        </div>
    );
}

export default TimelineMonth;
