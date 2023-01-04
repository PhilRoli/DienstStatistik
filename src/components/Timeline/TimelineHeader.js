import TimelineHeaderDays from './TimelineHeaderDays';

function TimelineHeader({ year }) {
    return (
        <div class="Header_timeline">
            <div>{year}</div>
            <TimelineHeaderDays />
        </div>
    );
}

export default TimelineHeader;
