function TimelineMonthDays({ year, month, days, data }) {
    var hasData = false;

    return (
        <div className="TimelineDays">
            {[...Array(31)].map((e, i) => {
                if (i < days) {
                    // Get amount of data on day
                    hasData = data.filter((value) => new Date(value.date).getDate() === i + 1);

                    if (hasData.length === 2) {
                        // Return day with 2 data (gradient)
                        var firstData = hasData[0];
                        var secondData = hasData[1];

                        return (
                            <div
                                className="TimelineDay"
                                key={'monthDay_' + year + '_' + month + '_' + i}
                                style={{
                                    backgroundColor:
                                        firstData['type'] === 'AMB'
                                            ? 'rgb(255, 192, 0)'
                                            : firstData['type'] === 'RTW'
                                            ? 'red'
                                            : firstData['type'] === 'KTW'
                                            ? 'rgb(0, 176, 240)'
                                            : '#181b1f',
                                    backgroundImage: `linear-gradient(to bottom right, ${
                                        firstData['type'] === 'AMB'
                                            ? 'rgb(255, 192, 0)'
                                            : firstData['type'] === 'RTW'
                                            ? 'red'
                                            : firstData['type'] === 'KTW'
                                            ? 'rgb(0, 176, 240)'
                                            : '#181b1f'
                                    } 50%, ${
                                        secondData['type'] === 'AMB'
                                            ? 'rgb(255, 192, 0)'
                                            : secondData['type'] === 'RTW'
                                            ? 'red'
                                            : secondData['type'] === 'KTW'
                                            ? 'rgb(0, 176, 240)'
                                            : '#181b1f'
                                    } 50%)`,
                                }}
                            >
                                {}
                            </div>
                        );
                    } else if (hasData.length === 1) {
                        hasData = hasData[0];
                        const dataType = hasData['type'];
                        // Return day with 1 data
                        return (
                            <div
                                className="TimelineDay"
                                key={'monthDay_' + year + '_' + month + '_' + i}
                                style={{
                                    backgroundColor:
                                        dataType === 'AMB'
                                            ? 'rgb(255, 192, 0)'
                                            : dataType === 'RTW'
                                            ? 'red'
                                            : dataType === 'KTW'
                                            ? 'rgb(0, 176, 240)'
                                            : '#181b1f',
                                }}
                            >
                                {hasData['zug'][0]}
                            </div>
                        );
                    } else {
                        // Return day without data
                        return (
                            <div
                                className="TimelineDay"
                                key={'monthDay_' + year + '_' + month + '_' + i}
                                style={{ backgroundColor: '#181b1f' }}
                            >
                                {}
                            </div>
                        );
                    }
                } else {
                    // Day doesnt exist
                    return (
                        <div style={{ backgroundColor: 'rgb(17, 18, 23)' }} key={'monthDay_' + year + '_' + month + '_' + i}>
                            {''}
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default TimelineMonthDays;
