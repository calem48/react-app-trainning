import React from 'react';
import { useFetch } from './useFetch';

const Pagination = () => {
    let { data } = useFetch()

    let myArrays = () => {
        let numberItemInOnePage = 15
        let numberOfPages = Math.ceil(data.length / numberItemInOnePage)
        console.log(data.length / numberItemInOnePage, numberOfPages);
        return Array.from({ length: numberOfPages }, (_, index) => {
            let start = index * numberItemInOnePage

            return data.slice(start, start + numberItemInOnePage)

        })
    }

    console.log(myArrays());

    return (
        <div>

        </div>
    );
}

export default Pagination;
