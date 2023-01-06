function StringInput({ data, changeValue, placeholder, name }) {
    return (
        <>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={(e) => changeValue(e.target.value)}
                list={`${name}List`}
            />
            <datalist id={`${name}List`}>
                {data.map((item, key) => (
                    <option key={`${name}List_${key}`} value={item} />
                ))}
            </datalist>
        </>
    );
}

export default StringInput;
