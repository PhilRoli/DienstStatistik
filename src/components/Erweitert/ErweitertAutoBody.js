import ErweitertAuto from './ErweitertAuto';

function ErweitertAutoBody({ daten }) {
    // Generate list of unique cars
    var autoList = [];
    daten.forEach((element) => {
        element.car !== '' && autoList.push(element.car);
    });
    const uniqueAutoList = [...new Set(autoList)].sort();

    return (
        <>
            {uniqueAutoList.map((carNumber) => (
                <>
                    <ErweitertAuto daten={daten.filter((value) => value.car === carNumber)} car={carNumber} />
                    <tr className="spacerRow" style={{ height: '5px' }} />
                </>
            ))}
        </>
    );
}

export default ErweitertAutoBody;
