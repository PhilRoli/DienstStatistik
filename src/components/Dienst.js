function Dienst({ datenPunkt }) {
    const dateObj = new Date(datenPunkt.date.$date);
    const year = dateObj.getUTCFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    const datum = `${year}-${month}-${day}`;

    return (
        <tr
            className="dienst"
            onClick={() =>
                navigator.clipboard.writeText(
                    `Dienst vom ${day}.${month}.${year}\nTageszeit: ${datenPunkt.daytime}\nTour: ${
                        datenPunkt.type
                    }\nEinsätze: ${datenPunkt.sumcalls}\nDienstzeit: ${datenPunkt.duration}h\nZug: ${datenPunkt.zug}\nTF: ${
                        datenPunkt.tf ? 'Ja' : 'Nein'
                    }`
                )
            }
        >
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
            <td
                className="zug"
                // style={{
                //     backgroundColor:
                //         datenPunkt.zug === '5'
                //             ? '#C9A6E4'
                //             : datenPunkt.zug === '-'
                //             ? '#B4C6E7'
                //             : datenPunkt.zug === 'Zivi'
                //             ? '#B4C6E7'
                //             : datenPunkt.zug === 'AMB'
                //             ? '#FFEEB7'
                //             : '',
                // }}
            >
                {datenPunkt.zug}
            </td>
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
        </tr>
    );
}

export default Dienst;
