const initialData = {
    data: {}
}

const formReducers = (state = initialData, action) => {
    switch (action.type) {
        case "REGISTER_SUBMIT":

            const { data } = action.user;

            return {
                ...state,
                data:
                {
                    data: data
                }
            }
        default: return state;
    }
}

export default formReducers;

