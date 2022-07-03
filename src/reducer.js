let reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        let newPeople = [...state.people, action.paylaod]

        return {
            ...state,
            people: newPeople,
            show: true,
            msg: "item added successfully"
        }
    }
    if (action.type === "NO_ITEM") {
        return {
            ...state,
            show: true,
            msg: "you can't add empty value"
        }
    }
    if (action.type === "COLSE_MODAL") {
        return {
            ...state,
            show: false,
        }
    }
    if (action.type === "REMOVE_ITEM") {
        let newPeople = state.people.filter(item => item.id !== action.paylaod)
        console.log(newPeople);
        return {
            ...state,
            people: newPeople,
            show: true,
            msg: "item remove successfully"
        }
    }
    return state
}

export default reducer