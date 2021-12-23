import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const initialData = {
    user: {}
}

const formReducers = (state = initialData, action) => {
    switch (action.type) {
        case "REGISTER_SUBMIT":
            const { data } = action.user;

            return createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // setAuthError('');
                    // user: { email: state.user.email, displayName: state.name };
                    // // setUser(newUser);

                })
                .catch((error) => {
                    // setAuthError(error.message);
                    // ..
                })
        default: return state;
    }
}

export default formReducers;

