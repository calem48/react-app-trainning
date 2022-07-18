import React from 'react';
import { useGlobalContext } from "./context"

const Stories = () => {
    let { stories: { hits }, loading } = useGlobalContext()


    if (loading) {
        return <h1>loading ...</h1>
    }


    if (hits.length) {
        return (
            <section className='stories'>

                {
                    hits.map(item => {
                        let { objectID, title, relevancy_score, num_comments, url } = item
                        return (
                            <article key={objectID} className="story" >
                                <h4 className="title">{title}</h4>
                                <p className="info">
                                    {relevancy_score} points by <span>Cogito | </span> {num_comments} comments
                                </p>
                                <div>
                                    <a href={url} className="read-link">read more</a>
                                    <button className="remove-btn">remove</button>
                                </div>
                            </article>
                        )
                    })
                }

            </section>
        );
    }

}

export default Stories;
