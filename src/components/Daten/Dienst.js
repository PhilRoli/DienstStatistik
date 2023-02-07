import { useState } from 'react';

function Dienst({ datenPunkt }) {
    const dateObj = new Date(datenPunkt.date);
    const year = dateObj.getUTCFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    const datum = `${year}-${month}-${day}`;

    const [isActive, setActive] = useState(false);
    const [deleting, toggleDeleting] = useState(false);

    return (
        <tr className={isActive ? 'active_dienst' : 'dienst'} onClick={() => setActive(!isActive)} key={datenPunkt._id}>
            <td className="datum">{datum}</td>
            <td
                className="daytime"
                style={{
                    backgroundColor: datenPunkt.daytime === 'Tag' ? '#B4C6E7' : '#203764',
                    color: datenPunkt.daytime === 'Tag' ? '#B4C6E7' : '#203764',
                }}
            >
                {datenPunkt.daytime}
            </td>
            <td
                className="type"
                style={{
                    backgroundColor:
                        datenPunkt.type === 'KTW'
                            ? '#00B0FF'
                            : datenPunkt.type === 'RTW'
                            ? '#FF0000'
                            : datenPunkt.type === 'BTW'
                            ? '#7FFF7F'
                            : '#FFC000',
                    color:
                        datenPunkt.type === 'KTW'
                            ? '#00B0FF'
                            : datenPunkt.type === 'RTW'
                            ? '#FF0000'
                            : datenPunkt.type === 'BTW'
                            ? '#7FFF7F'
                            : '#FFC000',
                }}
            >
                {datenPunkt.type}
            </td>
            <td className="kd">{datenPunkt.kd}</td>
            <td className="rd">{datenPunkt.rd}</td>
            <td className="na">{datenPunkt.na}</td>
            <td className="sumcalls">{datenPunkt.sumcalls}</td>
            <td className="duration">{datenPunkt.duration}</td>
            <td className="zug">{datenPunkt.zug}</td>
            <td className="car">{datenPunkt.car}</td>
            <td
                className="tf"
                style={{
                    backgroundColor: datenPunkt.tf ? '#C6EFCE' : '#FFC7CE',
                    color: datenPunkt.tf ? '#C6EFCE' : '#FFC7CE',
                }}
            >
                {datenPunkt.tf ? 'Ja' : 'Nein'}
            </td>
            <td className="deleteData">
                <div className="deleteDataButtonDiv">
                    <button
                        className="deleteDataButton"
                        onClick={async () => {
                            toggleDeleting(true);
                            if (window.confirm('Willst du diesen Dateneintrag wirklich löschen?') === true) {
                                const response = await fetch(
                                    `https://dienststatistikbackend-development.up.railway.app/api/delete/${datenPunkt._id}`,
                                    {
                                        method: 'DELETE',
                                        headers: {
                                            Accept: 'application/json',
                                            'Content-Type': 'application/json',
                                        },
                                    }
                                ).catch((error) => {
                                    console.error(error);
                                });
                                response.status === 200
                                    ? window.alert('Dateneintrag wurde erfolgreich gelöscht')
                                    : window.alert(`Status ${response.status}`);
                                toggleDeleting(false);
                            } else {
                                console.log('canceled');
                                toggleDeleting(false);
                            }
                        }}
                        disabled={deleting}
                    >
                        Löschen
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default Dienst;
