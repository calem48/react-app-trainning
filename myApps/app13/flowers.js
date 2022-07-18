import React, { useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import Loading from './loading';
const Flowers = () => {
    let { data, loading } = useFetch()
    const [page, setPage] = useState(0);
    const [follwers, setFollwers] = useState([]);

    useEffect(() => {
        if (loading) return
        setFollwers(data[page])
    }, [loading, page]);


    if (loading) {
        return <Loading />
    }
    return (
        <section className='followers'>
            <div className="container">
                {
                    follwers.map(item => {
                        return (
                            <article key={item.id} className='card'>
                                <img src={item.avatar_url} alt={item.login} />
                                <a href={item.html_url} className="btn">view profile</a>
                            </article>
                        )
                    })
                }

            </div>
            <div className="btn-container">
                <button
                    onClick={() => page > 0 ? setPage(page - 1) : setPage(data.length - 1)}
                    className="prev-btn"
                >
                    prev
                </button>
                {
                    data.map((_, index) => {
                        return (
                            <button
                                onClick={() => setPage(index)}
                                className={`${index === page ? "page-btn active-btn" : "page-btn"}`}
                                key={index}
                            >
                                {
                                    index + 1
                                }
                            </button>
                        )
                    })
                }
                <button
                    onClick={() => page < data.length - 1 ? setPage(page + 1) : setPage(0)}
                    className="next-btn"
                >
                    next
                </button>
            </div>
        </section >
    );
}

export default Flowers;
