import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const initialData = {
    user: {}
}

const formReducers = (state = initialData, action) => {
    switch (action.type) {
        case "REGISTER_SUBMIT":
            const { data } = action.user;
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // setAuthError('');

                })
                .catch((error) => {
                    // setAuthError(error.message);
                    // ..
                });
            const newUser = { email: data.email, displayName: data.name };

            return {
                ...state,
                user: newUser
            }

        default: return state;
    }
}

export default formReducers;

