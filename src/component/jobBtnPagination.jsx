import Wrapper from '../assets/wrappers/PageBtnContainer'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../features/AllJobs/AllJobsSlice';


const JobBtnPagination = () => {
    let { page, numOfPages } = useSelector(store => store.allJobs)
    let dispatch = useDispatch()

    let pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1
    })
    let next = () => {
        let pageNew = page + 1
        if (pageNew > numOfPages) {
            pageNew = 1
        }

        dispatch(changePage(pageNew))

    }

    let prev = () => {
        let pageNew = page - 1

        if (pageNew < 1) {
            pageNew = numOfPages
        }
        dispatch(changePage(pageNew))
    }

    return (
        <Wrapper>
            <button onClick={() => prev()} type="button" className="prev-btn"><HiChevronDoubleLeft />prev</button>
            <div className="btn-container">
                {
                    pages.map(item => {
                        return (
                            <button
                                key={item}
                                type="button"
                                className={`${page === item ? "pageBtn active" : "pageBtn"}`}
                                onClick={() => dispatch(changePage(item))}
                            >
                                {item}
                            </button>
                        )
                    })
                }
            </div>
            <button onClick={() => next()} type="button" className="next-btn">next<HiChevronDoubleRight /></button>

        </Wrapper>
    );
}

export default JobBtnPagination;
