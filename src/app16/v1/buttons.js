import React from 'react';
import { useGlobalContext } from "./context"

const Buttons = () => {
    let { stories: { nbPages }, page, setPage } = useGlobalContext()

    let handlePagenNext = () => {
        if (page < nbPages - 1) {
            setPage(page + 1)
        } else {
            setPage(0)
        }
    }

    let handlePagenPrev = () => {
        // if (page <= 0) {
        //     setPage(nbPages - 1)
        // } else {
        //     setPage(page - 1)
        // }

        setPage(old => {
            if (old <= 0) {
                return nbPages - 1
            } else {
                return old - 1
            }
        })
    }

    return (
        <div className="btn-container">
            <button onClick={handlePagenPrev}>prev</button>
            <p>{page + 1} of {nbPages ? nbPages : 0}</p>
            <button onClick={handlePagenNext}>next</button>
        </div>
    );
}

export default Buttons;
