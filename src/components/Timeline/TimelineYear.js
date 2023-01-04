import TimelineHeader from './TimelineHeader';
import TimelineMonths from './TimelineMonths';

function TimelineYear({ year, data }) {
    // Filter data for given year
    const dataFiltered = data.filter((value) => new Date(value.date).getFullYear() === year);

    return (
        <div className="container_timeline">
            <TimelineHeader year={year} />
            <TimelineMonths year={year} data={dataFiltered} />
        </div>
    );
}

export default TimelineYear;
