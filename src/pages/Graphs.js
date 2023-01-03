import CallsPerWeekdays from '../components/Graphs/CallsPerWeekdays';
import ShiftsPerWeekdays from '../components/Graphs/ShiftsPerWeekday';
import CallTypePerWeekdayNight from '../components/Graphs/CallTypePerWeekdayNight';
import CallTypePerWeekdayDay from '../components/Graphs/CallTypePerWeekdayDay';
import Zug5Dienste from '../components/Graphs/Zug5Dienste';
import AmbulanzPerWeekdays from '../components/Graphs/AmbulanzPerWeekdays';
import CallsPerWeekdaysTotal from '../components/Graphs/CallsPerWeekdaysTotal';
import CallTypePerWeekdayTotal from '../components/Graphs/CallTypePerWeekdayTotal';

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
        </div>
    );
}

export default Graphs;
