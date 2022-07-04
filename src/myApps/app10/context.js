import React, { useContext, useState } from 'react';

const myContext = React.createContext()

const ContextProvider = ({ children }) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isShowBar, setIsShowBar] = useState(false);

    let modalOpen = () => {
        setIsShowModal(true)
    }
    let modalColse = () => {
        setIsShowModal(false)
    }

    let barOpen = () => {
        setIsShowBar(true)
    }
    let barColse = () => {
        setIsShowBar(false)
    }


    return (
        <myContext.Provider value={{ isShowModal, modalOpen, modalColse, isShowBar, barOpen, barColse }}>
            {children}
        </myContext.Provider>
    );
}

export let useGlobalContext = () => {
    return useContext(myContext);
}


export { myContext, ContextProvider };
