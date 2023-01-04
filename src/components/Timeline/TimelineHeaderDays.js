import React from 'react';

function TimelineHeaderDays({ year }) {
    return (
        <div className="TimelineHeaderDays">
            {[...Array(31)].map((e, i) => (
                <div key={'headerDay_' + year + '_' + i}>{i + 1}</div>
            ))}
        </div>
    );
}

export default TimelineHeaderDays;
