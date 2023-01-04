import React from 'react';

function TimelineHeaderDays() {
    return <div className='TimelineHeaderDays'>
        {[...Array(31)].map((e, i) => <div>{i+1}</div>)}
    </div>;
}

export default TimelineHeaderDays;
