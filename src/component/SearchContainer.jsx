import Wrapper from '../assets/wrappers/SearchContainer'
import React from 'react';
import { FormRowSelect, FormRow } from '.';
import { useSelector, useDispatch } from 'react-redux';


const SearchContainer = () => {
    let { search, searchStatus, searchType, sort, sortDefaultValue } = useSelector(store => store.allJobs)
    let { jobTypeStatus, statusOptions } = useSelector(store => store.job)

    let handlJob = () => {

    }
    return (
        <Wrapper>
            <form className='form'>
                <h4>search form</h4>
                <div className="form-center">
                    <FormRow type="text" name="search" value={search} handleChange={handlJob} />

                    <FormRowSelect name="status"
                        value={searchStatus} handleChange={handlJob} list={["all", ...statusOptions]}
                    />

                    <FormRowSelect name="type"
                        value={searchType} handleChange={handlJob} list={["all", ...jobTypeStatus]}
                    />

                    <FormRowSelect name="sort"
                        value={sortDefaultValue} handleChange={handlJob} list={["all", ...sort]}
                    />
                    <button className="btn btn-block btn-danger">clear filters</button>
                </div>
            </form>
        </Wrapper>
    );
}

export default SearchContainer;
