const handlePromise = (promise) => {
    return promise
        .then((data) => [null, data])
        .catch((error) => [error, undefined]);
};
const [error, data] = await handlePromise(promise);
module.exports = handlePromise;