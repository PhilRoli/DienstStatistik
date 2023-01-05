import QuickButton from '../Datafilters/Date/QuickButton';

function AddDataQuickbutton({ text, value, updateValue }) {
    return (
        <>
            <QuickButton
                text={text}
                // Special case for TF buttons
                value={text === 'Ja' || text === 'Nein' ? !value : text}
                changeValue={updateValue}
                // Special case for TF buttons
                isActive={
                    (value === text || (value === true && text === 'Ja') | (value === false && text === 'Nein')) && true
                }
            />
        </>
    );
}

export default AddDataQuickbutton;
