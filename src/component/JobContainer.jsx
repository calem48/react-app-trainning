import Wrapper from '../assets/wrappers/JobsContainer'
import { useSelector, useDispatch } from 'react-redux';
import { Job } from '.';
import { getAllJobs } from '../features/AllJobs/AllJobsSlice';
import { useEffect } from 'react';



const JobContainer = () => {
    let { jobs, isLoading } = useSelector(store => store.allJobs)
    let dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllJobs())
    }, []);

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
            <h5>{jobs.length} jobs found</h5>
            <div className="jobs">
                {
                    jobs.map((job) => {
                        return <Job key={job._id} {...job} />
                    })
                }
            </div>
        </Wrapper>
    );
}

export default JobContainer;

