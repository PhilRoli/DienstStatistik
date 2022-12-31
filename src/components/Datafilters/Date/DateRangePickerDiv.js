import DateRangePicker from '@wojtekmaj/react-daterange-picker';
// Quick Selector
import QuickButton from './QuickButton';

function DateRangePickerDiv({ changeValue, value }) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    const monday = getFirstDayOfWeek(currentDate);
    const sunday = new Date(monday);
    sunday.setDate(sunday.getDate() + 6);

    return (
        <div className="dateRangePicker">
            <QuickButton
                text={'Letzt. J'}
                hideMobile={true}
                changeValue={changeValue}
                value={[new Date(currentYear - 1, 0, 1), new Date(currentYear - 1, 11, 31)]}
            />
            <QuickButton
                text={'Letzt. M'}
                hideMobile={true}
                changeValue={changeValue}
                value={[
                    new Date(currentYear, currentMonth - 1, 1),
                    new Date(currentYear, currentMonth - 1, new Date(currentYear, currentMonth - 1, 0).getDate(), -4),
                    // -4 to ensure consitency troughout diffrent timezones
                ]}
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
                value={[new Date(currentYear, currentMonth, 1, 4), new Date(currentYear, currentMonth, lastDay, 20)]}
            />
            <QuickButton text={'Woche'} hideMobile={true} changeValue={changeValue} value={[monday, sunday]} />
        </div>
    );
}

function getFirstDayOfWeek(d) {
    const date = new Date(d);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(new Date(date.setDate(diff)).setHours(4));
}

export default DateRangePickerDiv;
