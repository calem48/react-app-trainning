import { SET_LOADING, SET_STORY, REMOVE_STORY, HANDLE_PAGE, HANDLE_QUERY } from './actions'

export let reducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: true }

        case SET_STORY:

            let { data, nbPages } = action.payload
            return { ...state, stories: data, loading: false, nbPages: nbPages }

        case HANDLE_QUERY:
            return { ...state, query: action.payload, page: 0 }

        case HANDLE_PAGE:



            if (action.payload === "inc") {
                let page = state.page + 1
                if (page > state.nbPages - 1) {
                    page = 0
                }
                return { ...state, page }
            }

            else {
                let page = state.page - 1
                if (page < 0) {
                    page = state.nbPages - 1
                }

                return { ...state, page }
            }


        default:
            throw new Error(`no match ${action.type}`)

    }
}