import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { useSelector, useDispatch } from 'react-redux';

import { Barchar, ChartArea } from '.';

const ChartContainer = () => {
    let { monthlyApplications: data } = useSelector(store => store.allJobs)
    const [state, setstate] = useState(true);
    return (
        <Wrapper>
            <h4>Monthly Applications</h4>
            <button type="button" onClick={() => setstate(!state)}>{state ? 'Area Chart' : "Bar char"}</button>
            {
                state ? <Barchar data={data} /> : <ChartArea data={data} />
            }
        </Wrapper>
    );
}

export default ChartContainer;
