import TimelineMonth from './TimelineMonth';

function TimelineMonths({ year, data }) {
    return (
        <div className="TimelineMonths">
            {[...Array(12)].map((e, i) => (
                // Filter data for month
                <TimelineMonth
                    key={'month_' + year + '_' + i}
                    year={year}
                    month={i}
                    data={data.filter((value) => new Date(value.date).getMonth() === i)}
                />
            ))}
        </div>
    );
}

export default TimelineMonths;
