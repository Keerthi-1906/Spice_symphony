const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Falied", message: err.message || "error occured", stackTrace: err.stack });
            break;
        case constants.NOTFOUND:
            res.json({ title: "Not Found", message: err.message || "error occured", stackTrace: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "Un Authorized", message: err.message || "error occured", stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message || "error occured", stackTrace: err.stack });
            break;
        case constants.SERVER_ERROR:
            res.json({title: "server eroor" , message: err.message, stackTrace: err.stack});
            break;
        default:
            console.log("NO error");

    }
};

module.exports = errorHandler;