function Car_addData({ changeValue, data }) {
    return (
        <div className="Car_addData">
            <div className="CarText_addData">
                <h3>Auto</h3>
            </div>
            <div className="CarInput_addData">
                <input
                    type="text"
                    name="auto"
                    placeholder="00-000"
                    onChange={(e) =>
                        e.nativeEvent.inputType !== 'deleteContentBackward'
                            ? e.target.value.length === 2 && e.target.value[2] !== '-'
                                ? (e.target.value += '-')
                                : changeValue(e.target.value)
                            : changeValue(e.target.value)
                    }
                    list="knownCars"
                />
                <datalist id="knownCars">
                    {data.map((item, key) => (
                        <option key={`carList_${key}`} value={item} />
                    ))}
                </datalist>
            </div>
        </div>
    );
}

export default Car_addData;
