function NumberInput({ data, changeValue, placeholder, name, maxValue, value }) {
    return (
        <>
            <input
                type="number"
                name={name}
                placeholder={placeholder}
                onChange={(e) => (e.target.value > maxValue ? changeValue(maxValue) : changeValue(e.target.value))}
                list={`${name}List`}
                max={maxValue}
                min={0}
            />
            <datalist id={`${name}List`}>
                {data.map((item, key) => (
                    <option key={`${name}List_${key}`} value={item} />
                ))}
            </datalist>
        </>
    );
}

export default NumberInput;
