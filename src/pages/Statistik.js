// Loading Spinner

// Statistic boxes
import RKT from '../components/statistiks/RKT';
import TF from '../components/statistiks/TF';
import AMB from '../components/statistiks/AMB';
import Tag from '../components/statistiks/Tag';
import Nacht from '../components/statistiks/Nacht';
import RTW from '../components/statistiks/RTW';
import KTW from '../components/statistiks/KTW';
import KD from '../components/statistiks/KD';
import RD from '../components/statistiks/RD';
import Loading from '../components/Loading';
import Zivi from '../components/statistiks/Zivi';

function Statistik({ data }) {
    document.title = 'Statistik';
    if (data.length === 0) {
        return (
            <>
                <Loading />
            </>
        );
    } else {
        const rktData = data.filter((value) => value.type === 'RTW' || value.type === 'KTW');

        return (
            <div className="parent">
                <TF data={rktData.filter((value) => value.tf === true)} textColor={'#b42069'} />
                <Zivi data={data.filter((value) => value.zug === 'Zivi')} textColor={'#b4da55'} />
                <RKT data={rktData} textColor={'rgb(204, 204, 220)'} />

                <AMB className="AMB" data={data.filter((value) => value.type === 'AMB')} textColor={'rgb(255, 192, 0)'} />
                <Tag data={data.filter((value) => value.daytime === 'Tag')} textColor={'rgb(180, 198, 231)'} />
                <Nacht data={data.filter((value) => value.daytime === 'Nacht')} textColor={'rgb(32, 55, 100)'} />
                <KTW data={data.filter((value) => value.type === 'KTW')} textColor={'rgb(0, 176, 240)'} />
                <RTW data={data.filter((value) => value.type === 'RTW')} textColor={'red'} />
                <KD data={rktData} textColor={''} />
                <RD data={rktData} textColor={''} />
            </div>
        );
    }
}

// const dienste = data.filter((value) => value.type === 'RTW').length;
// if (dienste === 0) {
//     return 0;
// }
// const time = data
//     .filter((value) => value.type === 'RTW')
//     .map((value) => value.duration)
//     .reduce((acc, amount) => acc + amount);

export default Statistik;
