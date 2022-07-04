import React from 'react';
import data from "./data"
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Review = () => {
    const [Index, setIndex] = useState(0);
    const { id, name, job, img, text } = data[Index]

    let handelPrev = () => {
        // setIndex(Index - 1)
        // if (Index <= 0) {
        //     setIndex(data.length - 1)
        // }

        setIndex((Index) => {
            let newIndex = Index - 1
            return checkNumber(newIndex)
        })
    }

    let handelNext = () => {
        // setIndex(Index + 1)
        // if (Index > data.length - 1) {
        //     setIndex(0)
        // }

        setIndex((Index) => {
            let newIndex = Index + 1
            return checkNumber(newIndex)
        })
    }

    let checkNumber = (number) => {
        if (number > data.length - 1)
            return 0
        if (number < 0)
            return data.length - 1
        return number
    }


    return (
        <div className="container">
            <div className="my-image">
                <img src={img} />
            </div>

            <h2>{name}</h2>
            <p>{job}</p>
            <p>{text}</p>

            <div className="slide">
                <button onClick={handelPrev} className="prev-btn"><FaChevronLeft /></button>
                <button onClick={handelNext} className="next-btn"><FaChevronRight /></button>

                {/* <button className="next-btn"><i className="fas fa-chevron-right"></i></button> */}
            </div>

        </div>
    );
}

export default Review;

