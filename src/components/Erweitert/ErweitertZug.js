import { useState } from 'react';

function ErweitertZug({ daten, zug }) {
    const totalTime = daten.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const zugDaten = daten.filter((value) => value.zug === zug);
    const dienste = zugDaten.length;
    const time = dienste === 0 ? 0 : zugDaten.map((value) => value.duration).reduce((acc, amount) => acc + amount);
    const percent = Math.round((time / totalTime) * 100)
    const ktwDienste = zugDaten.filter((value) => value.type === 'KTW');
    const kwtTFdienste = ktwDienste.filter((value) => value.tf === true);
    const rtwDienste = zugDaten.filter((value) => value.type === 'RTW');
    const rwtTFdienste = rtwDienste.filter((value) => value.tf === true);
    const tfDienste = zugDaten.filter((value) => value.tf === true).length;

    const [isActive, setActive] = useState(false);

    return (
        <>
            <tr className={isActive ? 'active_erweitert' : 'erweitert'} onClick={() => setActive(!isActive)}>
                <td className="zug">{zug}</td>
                <td>{dienste}</td>
                <td className="duration_erweitert">{time}</td>
                <td >{percent}</td>
                <td>{ktwDienste.length}</td>
                <td className="ktw_tf_erweitert">{kwtTFdienste.length}</td>
                <td>{rtwDienste.length}</td>
                <td className="rtw_tf_erweitert">{rwtTFdienste.length}</td>
                <td>{tfDienste}</td>
            </tr>
        </>
    );
}

export default ErweitertZug;
