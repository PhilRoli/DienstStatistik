function Confirm_addData({ json, checkData, toggleSubmit }) {
    console.log(checkData())
    return (
        <div className="Confirm_addData">
            <button type="submit" onClick={() => checkData()} disabled={toggleSubmit} >
                Confirm
            </button>
        </div>
    );
}

export default Confirm_addData;

// TODO: Match car against regex, if wrong, send alert
// /^\d{2}-\d{3}/gm
