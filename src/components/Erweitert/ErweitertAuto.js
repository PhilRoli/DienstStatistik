import { useState } from 'react';

function ErweitertAuto({ daten, car }) {
    const [isActive, setActive] = useState(false);
    const tfDienste = daten.filter((value) => value.tf === true);
    const dienste = daten.length;
    const time = daten.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const kts = daten.map((value) => value.kd).reduce((acc, amount) => acc + amount);
    const ktsTF =
        tfDienste.length === 0
            ? 0
            : daten
                  .filter((value) => value.tf === true)
                  .map((value) => value.kd)
                  .reduce((acc, amount) => acc + amount);
    const rds = daten.map((value) => value.rd).reduce((acc, amount) => acc + amount);
    const rdsTF =
        tfDienste.length === 0
            ? 0
            : daten
                  .filter((value) => value.tf === true)
                  .map((value) => value.rd)
                  .reduce((acc, amount) => acc + amount);
    const nas = daten.map((value) => value.na).reduce((acc, amount) => acc + amount);
    const nasTF =
        tfDienste.length === 0
            ? 0
            : daten
                  .filter((value) => value.tf === true)
                  .map((value) => value.na)
                  .reduce((acc, amount) => acc + amount);

    return (
        <>
            <tr className={isActive ? 'active_erweitert' : 'erweitert'} onClick={() => setActive(!isActive)}>
                <td className="car_auto">{car}</td>
                <td>{dienste}</td>
                <td className="duration_auto">{time}</td>
                <td>{kts}</td>
                <td className="kts_tf_auto">{ktsTF}</td>
                <td>{rds}</td>
                <td className="rds_tf_auto">{rdsTF}</td>
                <td>{nas}</td>
                <td className="nas_tf_auto">{nasTF}</td>
                <td>{tfDienste.length}</td>
            </tr>
        </>
    );
}

export default ErweitertAuto;
