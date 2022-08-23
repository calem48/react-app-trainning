import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRow, FormRowSelect } from '../../component';
import { handleChange, clearValue, addJob, editeJob } from '../../features/Job/JobSlice'


const AddJobs = () => {
    let { jobTypeStatus, statusOptions, typeJob, status, isLoading, position, company, jobLocation, isEdit, editJobId }
        = useSelector(store => store.job)
    let { location } = useSelector(store => store.user.user)

    let dispatch = useDispatch()

    let handleJob = (e) => {
        let name = e.target.name
        let value = e.target.value
        dispatch(handleChange({ name, value }))
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        if (!position || !company || !jobLocation) {
            toast.error("fill the input")
            return
        }
        if (isEdit) {
            dispatch(
                editeJob({
                    jobID: editJobId,
                    job: { position, company, jobLocation, typeJob, status }
                }))
            return
        }
        dispatch(addJob({ position, company, jobLocation, status, typeJob }))
    }

    useEffect(() => {
        if (!isEdit) {
            dispatch(handleChange({ name: "jobLocation", value: location }))
        }
    }, []);

    console.log("render");
    return (
        <Wrapper>
            <form className="form" onSubmit={handleSubmit}>
                <h3> {isEdit ? 'edit job' : 'profile'} </h3>
                <div className="form-center">
                    <FormRow type="text" name="position" handleChange={handleJob} value={position} />
                    <FormRow type="text" name="company" handleChange={handleJob} value={company} />
                    <FormRow type="text" name="jobLocation" textLabale='job location' handleChange={handleJob}
                        value={jobLocation}
                    />
                    <FormRowSelect name="status" list={statusOptions} value={status} handleChange={handleJob} />
                    <FormRowSelect name="typeJob" textLabale="type job" list={jobTypeStatus} value={typeJob}
                        handleChange={handleJob}
                    />

                    <div className="btn-container">
                        <button
                            onClick={() => dispatch(clearValue())}
                            type="button" className="btn btn-block clear-btn"
                        >
                            clear
                        </button>
                        <button type="submit" className="btn btn-block submit-btn">submit</button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
}

export default AddJobs;
