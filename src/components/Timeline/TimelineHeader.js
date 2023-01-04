import TimelineHeaderDays from './TimelineHeaderDays';

function TimelineHeader({ year }) {
    return (
        <div className="Header_timeline">
            <div>{year}</div>
            <TimelineHeaderDays year={year} />
        </div>
    );
}

export default TimelineHeader;
