function Dienst({ datenPunkt }) {
    const dateObj = new Date(datenPunkt.date.$date);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    const datum = day + '.' + month + '.' + year;

    return (
        <tr className="dienst">
            <td className="datum">{datum}</td>
            <td
                className="daytime"
                style={{
                    backgroundColor: datenPunkt.daytime === 'Tag' ? '#B4C6E7' : '#203764',
                }}
            >
                {datenPunkt.daytime}
            </td>
            <td
                className="type"
                style={{
                    backgroundColor:
                        datenPunkt.type === 'KTW' ? '#00B0F0' : datenPunkt.type === 'RTW' ? '#FF0000' : '#FFC000',
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
                style={{
                    backgroundColor:
                        datenPunkt.zug === '5'
                            ? '#C9A6E4'
                            : datenPunkt.zug === '-'
                            ? '#B4C6E7'
                            : datenPunkt.zug === 'Zivi'
                            ? '#B4C6E7'
                            : datenPunkt.zug === 'AMB'
                            ? '#FFEEB7'
                            : '',
                }}
            >
                {datenPunkt.zug}
            </td>
            <td className="car">{datenPunkt.car}</td>
            <td
                className="tf"
                style={{
                    backgroundColor: datenPunkt.tf ? '#C6EFCE' : '#FFC7CE',
                }}
            >
                {datenPunkt.tf ? 'Ja' : 'Nein'}
            </td>
        </tr>
    );
}

export default Dienst;
