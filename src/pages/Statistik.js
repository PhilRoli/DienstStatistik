import { RotatingLines } from 'react-loader-spinner';
// Statistic boxes
import RKT from '../components/statistiks/RKT';
import AMB from '../components/statistiks/AMB';
import Tag from '../components/statistiks/Tag';
import Nacht from '../components/statistiks/Nacht';
import RTW from '../components/statistiks/RTW';
import KTW from '../components/statistiks/KTW';
import KD from '../components/statistiks/KD';
import RD from '../components/statistiks/RD';

function Statistik({ data }) {
    document.title = 'Statistik';
    if (data.length === 0) {
        return (
            <div className="center">
                <RotatingLines strokeColor="rgb(218, 37, 28)" strokeWidth="3" width="100" visible={true} />
            </div>
        );
    } else {
        return (
            <div className="parent">
                <RKT
                    data={data.filter((value) => value.type === 'RTW' || value.type === 'KTW')}
                    textColor={'rgb(204, 204, 220)'}
                />
                <AMB className="AMB" data={data.filter((value) => value.type === 'AMB')} textColor={'rgb(255, 192, 0)'} />
                <Tag data={data.filter((value) => value.daytime === 'Tag')} textColor={'rgb(180, 198, 231)'} />
                <Nacht data={data.filter((value) => value.daytime === 'Nacht')} textColor={'rgb(32, 55, 100)'} />
                <KTW data={data.filter((value) => value.type === 'KTW')} textColor={'rgb(0, 176, 240)'} />
                <RTW data={data.filter((value) => value.type === 'RTW')} textColor={'red'} />
                <KD data={data.filter((value) => value.type === 'RTW' || value.type === 'KTW')} textColor={''} />
                <RD data={data.filter((value) => value.type === 'RTW' || value.type === 'KTW')} textColor={''} />
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
