
export const addUserLocalStorage = (user) => {
    return localStorage.setItem("user", JSON.stringify(user))
}



export const removeUserLocalStorage = () => {
    return localStorage.removeItem("user")
}


export const getUserLocalStorage = (user) => {
    return JSON.parse(localStorage.getItem(user)) || null
}