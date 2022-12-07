import DateRangePicker from '@wojtekmaj/react-daterange-picker';
// Quick Selector
import QuickButton from './QuickButton';

function DateRangePickerDiv({ changeValue, value }) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    return (
        <div className="dateRangePicker">
            <QuickButton
                text={'tmp'}
                hideMobile={true}
                changeValue={changeValue}
                value={[new Date(2021, 0, 1), new Date(currentYear, 11, 31)]}
            />
            <QuickButton
                text={'Gesamt'}
                hideMobile={false}
                changeValue={changeValue}
                value={[new Date(2021, 0, 1), new Date(currentYear, 11, 31)]}
            />
            <DateRangePicker
                onChange={changeValue}
                // default value start 2021 to last day current year
                value={value}
                clearIcon={null}
                locale={'de'}
                minDetail={'decade'}
                className={'dateRangePickerObject'}
            />
            <QuickButton
                text={'Jahr'}
                hideMobile={false}
                changeValue={changeValue}
                value={[new Date(currentYear, 0, 1), new Date(currentYear, 11, 31)]}
            />
            <QuickButton
                text={'Monat'}
                hideMobile={true}
                changeValue={changeValue}
                value={[new Date(currentYear, currentMonth, 1), new Date(currentYear, currentMonth, lastDay)]}
            />
        </div>
    );
}

export default DateRangePickerDiv;
