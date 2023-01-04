import TimelineYear from './TimelineYear';
import Loading from '../Base/Loading';

function TimelineCalender({ data }) {
    // Get earliest data year
    const dateArray = data.map((value) => value.date);
    const earliestDate =
        dateArray.length !== 0 &&
        new Date(
            dateArray.reduce(function (a, b) {
                return a < b ? a : b;
            })
        ).getFullYear();

    // Get current year
    const currentYear = new Date().getFullYear();

    // If data hasnt been fetched, display loading
    if (!earliestDate) {
        return (
            <>
                <Loading />
            </>
        );
    }

    // return calenders from earliest data year to current year
    return (
        <>
            {[...Array(currentYear - earliestDate + 1)].map((e, i) => (
                <TimelineYear key={`calenderYear_${i + 1}`} year={earliestDate + i} data={data} />
            ))}
        </>
    );
}

export default TimelineCalender;
