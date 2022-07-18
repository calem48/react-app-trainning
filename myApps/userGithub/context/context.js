import React from 'react';
import { useEffect, useState, useContext } from 'react';
import flowers from './data/flowers'
import repo from './data/repo'
import gitUser from './data/user'

import axios from 'axios';

const urlRepos = "https://api.github.com/"



let appContext = React.createContext()

const AppContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState(repo);
    const [followers, setFollowers] = useState(flowers);
    const [myUser, setGitUser] = useState(gitUser);
    const [error, setError] = useState({ type: false, msg: "" });
    // const [query, setQuery] = useState("calem48");


    let serarchQuery = async (user) => {
        setLoading(true)
        showError()
        let resp = await axios(`${urlRepos}users/${user}`).catch(err => { throw new Error(`user doesn't find it`) })

        if (resp) {
            setGitUser(resp.data)
            let { login } = resp.data
            Promise.allSettled([
                axios(`${urlRepos}users/${login}/repos?per_page=100`),
                axios(`${urlRepos}users/${login}/followers?per_page=100`)
            ]).then(data => {
                let [repos, follower] = data
                if (repos.status === "fulfilled") {
                    setRepos(repos.value.data)
                }
                if (follower.status === "fulfilled") {
                    setFollowers(follower.value.data)
                }
            })
        } else {
            showError(true, 'no user')
        }
        setLoading(false)

    }

    let showError = (type = false, msg = "") => {
        setError({ type, msg })
    }


    useEffect(() => {
        serarchQuery("calem48")
    }, []);

    return (
        <appContext.Provider value={{ repos, loading, followers, myUser, error, serarchQuery }}>
            {children}
        </appContext.Provider >
    );
}

export let useGlobalContext = () => {
    return useContext(appContext)
}

export { AppContext, appContext };