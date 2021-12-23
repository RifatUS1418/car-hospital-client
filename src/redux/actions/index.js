export const submitData = (data) => {
    return {
        type: "REGISTER_SUBMIT",
        user: {
            data: data
        }
    }
}