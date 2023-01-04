import RotatePhone from '../components/Base/RotatePhone';
import TimelineCalender from '../components/Timeline/TimelineCalender';

function Timeline({ data }) {
    document.title = 'Timeline';
    return (
        <>
            <TimelineCalender data={data} />
            <RotatePhone />
        </>
    );
}

export default Timeline;
