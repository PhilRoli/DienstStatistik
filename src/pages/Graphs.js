import CallsPerWeekdays from '../components/Graphs/Barcharts/CallsPerWeekdays';
import ShiftsPerWeekdays from '../components/Graphs/Barcharts/ShiftsPerWeekday';
import CallTypePerWeekdayNight from '../components/Graphs/Barcharts/CallTypePerWeekdayNight';
import CallTypePerWeekdayDay from '../components/Graphs/Barcharts/CallTypePerWeekdayDay';
import Zug5Dienste from '../components/Graphs/Barcharts/Zug5Dienste';
import AmbulanzPerWeekdays from '../components/Graphs/Barcharts/AmbulanzPerWeekdays';
import CallsPerWeekdaysTotal from '../components/Graphs/Barcharts/CallsPerWeekdaysTotal';
import CallTypePerWeekdayTotal from '../components/Graphs/Barcharts/CallTypePerWeekdayTotal';
import CallTypePie from '../components/Graphs/Piecharts/CallTypePie';
import ZugPie from '../components/Graphs/Piecharts/ZugPie';
import TypePie from '../components/Graphs/Piecharts/TypePie';
import DaytimePie from '../components/Graphs/Piecharts/DayimePie';

function Graphs({ data }) {
    document.title = 'Graphs';

    const rktData = data.filter((value) => value.type === 'RTW' || value.type === 'KTW');

    return (
        <div className="graphGrid">
            <CallsPerWeekdays data={rktData} />
            <ShiftsPerWeekdays data={rktData} />
            <Zug5Dienste data={rktData} />
            <AmbulanzPerWeekdays data={data} />
            <CallTypePerWeekdayNight data={rktData} />
            <CallTypePerWeekdayDay data={rktData} />
            <CallsPerWeekdaysTotal data={rktData} />
            <CallTypePerWeekdayTotal data={rktData} />
            <CallTypePie data={rktData} />
            <TypePie data={data} />
            <DaytimePie data={rktData} />
            <ZugPie data={rktData} />
        </div>
    );
}

export default Graphs;
