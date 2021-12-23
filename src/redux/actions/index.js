export const submitData = (data) => {
    // console.log(data);
    return {
        type: "REGISTER_SUBMIT",
        user: {
            data: data
        }
    }
}