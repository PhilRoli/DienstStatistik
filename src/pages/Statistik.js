import { RotatingLines } from 'react-loader-spinner';
import RKT from '../components/RKT';
import AMB from '../components/AMB';

function Statistik({ data }) {
    if (data.length === 0) {
        return (
            <div className="center">
                <RotatingLines strokeColor="rgb(218, 37, 28)" strokeWidth="3" width="100" visible={true} />
            </div>
        );
    } else {
        return (
            <div className="parent">
                <RKT data={data.filter((value) => value.type === 'RTW' || value.type === 'KTW')} />
                <AMB data={data.filter((value) => value.type === 'AMB')} />
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
