import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { DateRangePicker } from "react-date-range";

const Reviews = () => {
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);

    const start = format(state[0].startDate, 'PP');
    const end = format(state[0].endDate, 'PP');
    console.log(start,end)
    
    return (
      <div>
        <h3>Review date range</h3>

        <div>
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            ranges={state}
            direction="horizontal"
          />
        </div>
      </div>
    );
};

export default Reviews;