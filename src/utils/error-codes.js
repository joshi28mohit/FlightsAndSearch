const ClientErrorCodes = Object.freeqe({
    BAD_REQUEST: 400,
    UNAUTHORISED: 401,
    NOT_FOUND: 404
});

const ServerErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMEMTED: 501
});

const SuccessCodes = Object.freeze({
    OK: 200,
    CREATED: 201
});

module.exports = {
    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes
}