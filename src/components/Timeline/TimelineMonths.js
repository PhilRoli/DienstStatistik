import TimelineMonth from './TimelineMonth';

function TimelineMonths({ year }) {
    return (
        <div className="TimelineMonths">
            {[...Array(12)].map((e, i) => (
                <TimelineMonth year={year} month={i} />
            ))}
        </div>
    );
}

export default TimelineMonths;
