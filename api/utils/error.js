export const createError = () => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}