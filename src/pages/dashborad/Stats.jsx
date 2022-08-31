import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChartContainer, StatsContainer } from '../../component';
import { getAllStats } from '../../features/AllJobs/AllJobsSlice';


const Stats = () => {
    let { monthlyApplications, isLoading } = useSelector(store => store.allJobs)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllStats())
    }, []);
    return (
        <>
            <StatsContainer />
            {monthlyApplications.length > 0 && <ChartContainer />}

        </>
    );
}

export default Stats;
