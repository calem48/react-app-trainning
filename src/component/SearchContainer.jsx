import Wrapper from '../assets/wrappers/SearchContainer'
import React from 'react';
import { FormRowSelect, FormRow } from '.';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, clearShearch, getAllJobs } from '../features/AllJobs/AllJobsSlice';



const SearchContainer = () => {
    let { isLoading, search, searchStatus, searchType, sortOption, sortDefaultValue, page } = useSelector(store => store.allJobs)
    let { jobTypeStatus, statusOptions } = useSelector(store => store.job)

    let dispatch = useDispatch()

    let handleSearch = (e) => {
        if (isLoading) return
        let name = e.target.name
        let value = e.target.value
        dispatch(handleChange({ name, value }))
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch(clearShearch())
    }


    return (
        <Wrapper>
            <form className='form' onSubmit={handleSubmit}>
                <h4>search form</h4>
                <div className="form-center">
                    <FormRow type="text" name="search" value={search} handleChange={handleSearch} />

                    <FormRowSelect name="searchStatus"
                        value={searchStatus} handleChange={handleSearch} list={["all", ...statusOptions]}
                    />

                    <FormRowSelect name="searchType"
                        value={searchType} handleChange={handleSearch} list={["all", ...jobTypeStatus]}
                    />

                    <FormRowSelect name="sortDefaultValue"
                        value={sortDefaultValue} handleChange={handleSearch} list={["all", ...sortOption]}
                    />
                    <button className="btn btn-block btn-danger">clear filters</button>
                </div>
            </form>
        </Wrapper>
    );
}

export default SearchContainer;
