import FilterButton from './FilterButton';

function FilterPickerDiv() {
    return (
        <div className="dateRangePicker">
            <FilterButton text={'Uhrzeit'} hideMobile={false} />
            <FilterButton text={'Typ'} hideMobile={false} />
            <FilterButton text={'KD: 10'} hideMobile={true} />
            <FilterButton text={'RD: 10'} hideMobile={true} />
            <FilterButton text={'NA: 10'} hideMobile={true} />
            <FilterButton text={'Summe: 10'} hideMobile={false} />
            <FilterButton text={'Zeit'} hideMobile={false} />
            <FilterButton text={'Tagdienst'} hideMobile={false} />
            <FilterButton text={'TF: Nein'} hideMobile={true} />
        </div>
    );
}

export default FilterPickerDiv;
