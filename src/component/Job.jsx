import Wrapper from '../assets/wrappers/Job';
import { JobInfo } from '.';
import { deleteDjob } from '../features/Job/JobSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
const Job = ({ _id, company, createdAt, createdBy, jobLocation, jobType, position, status, updatedAt, __v }) => {
    let dispatch = useDispatch()
    return (
        <Wrapper>
            <header>
                <div className="main-icon"> {company.charAt(0)} </div>
                <div className="info">
                    <h5>{company}</h5>
                    <p>{jobLocation}</p>
                </div>
            </header>
            <div className="content">
                <div className="content-center">
                    <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
                    <JobInfo icon={<FaCalendarAlt />} text={jobType} />
                    <JobInfo icon={<FaBriefcase />} text={moment(createdAt).format("MMM Do YY")} />
                    <div className={`status ${status}`}>{status}</div>
                </div>
                <footer>
                    <div className="actions">
                        <a className="btn edit-btn" href="/add-job">Edit</a>
                        <button
                            type="button"
                            className="btn delete-btn"
                            onClick={() => dispatch(deleteDjob(_id))}
                        >
                            delete
                        </button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    );
}

export default Job;
