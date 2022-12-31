import ErweitertZug from "./ErweitertZug";

function ErweitertZugBody({ daten }) {
    return (
        <>
            <ErweitertZug daten={daten} zug={'1'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'2'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'3'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'4'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'5'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'6'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'7'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'8'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'9'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'10'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'11'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'Zivi'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'Tagdienst'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'Extern'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
            <ErweitertZug daten={daten} zug={'AMB'} />
            <tr className="spacerRow" style={{ height: '5px' }} />
        </>
    );
}

export default ErweitertZugBody;
