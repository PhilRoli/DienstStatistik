function Car_addData({ changeValue, data, value }) {
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
                        // e.nativeEvent.inputType !== 'deleteContentBackward'
                        //     ? e.target.value.length === 2 && e.target.value[2] !== '-'
                        //         ? (e.target.value += '-')
                        //         : e.target.value.length === 4 && e.target.value[3] === '-'
                        //         ? (e.target.value = e.target.value.slice(0, 3))
                        //         : changeValue(e.target.value)
                        //     : changeValue(e.target.value)
                        {
                            // Check if input isnt delete
                            if (e.nativeEvent.inputType !== 'deleteContentBackward') {
                                // check if this is the third char (00-000), if yes and no dash is there yet, add one
                                if (e.target.value.length === 2 && e.target.value[2] !== '-') {
                                    e.target.value += '-';
                                    changeValue(e.target.value);
                                }
                                // If user inputs a dash after the one at [2] was already added, remove the input again
                                else if (e.target.value.length === 4 && e.target.value[3] === '-') {
                                    e.target.value = e.target.value.slice(0, 3);
                                    changeValue(e.target.value);
                                }
                                // Else input was okay, add it
                                changeValue(e.target.value);
                            }
                            // update input
                            changeValue(e.target.value);
                        }
                    }
                    list="knownCars"
                    value={value}
                    maxLength={6}
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
