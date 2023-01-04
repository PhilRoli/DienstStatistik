import TimelineHeader from './TimelineHeader';
import TimelineMonths from './TimelineMonths';

function TimelineYear({ year }) {
    return (
        <div class="container_timeline">
            <TimelineHeader year={year} />
            <TimelineMonths year={year} />
        </div>
    );
}

export default TimelineYear;
