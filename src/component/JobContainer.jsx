import Wrapper from '../assets/wrappers/JobsContainer'
import { useSelector, useDispatch } from 'react-redux';
import { Job } from '.';
import { getAllJobs } from '../features/AllJobs/AllJobsSlice';
import { useEffect } from 'react';
import JobBtnPagination from './jobBtnPagination';



const JobContainer = () => {
    let { jobs, isLoading, jobsTotal, numOfPages, searchType, searchStatus, sortDefaultValue, search, page }
        = useSelector(store => store.allJobs)
    let dispatch = useDispatch()


    useEffect(() => {

        dispatch(getAllJobs())
    }, [searchType, searchStatus, sortDefaultValue, search, page]);




    if (isLoading) {

        return (
            <Wrapper>
                <h2>loading ....</h2>
            </Wrapper>
        )
    }

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>no job to display</h2>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <h5>{jobsTotal} jobs found</h5>
            <div className="jobs">
                {
                    jobs.map((job) => {
                        return <Job key={job._id} {...job} />
                    })
                }
            </div>
            {numOfPages > 1 && <JobBtnPagination />}
        </Wrapper>
    );
}

export default JobContainer;

