exports.STATUS_CODE = {
    OK: 200,
    INTERNAL_SERVER_ERROR: 500,
    UNAUTHORISED: 401,
    BADREQUEST: 400,
    NOTFOUND: 404
};

exports.SUCCESS = {
    USER: {
        REGISTRATION: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "User register successfully!"
        },
        LOGIN: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "User login successfully!"
        },
        LOGOUT: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "User logout successfully!"
        },
    },
};

exports.ERROR = {
    INTERNAL_SERVER_ERROR: {
        statuscode: this.STATUS_CODE.INTERNAL_SERVER_ERROR,
        success: false,
        message: "Internal server error!"
    },
    PAGE_NOT_FOUND: {
        statuscode: this.STATUS_CODE.NOTFOUND,
        success: false,
        message: "Page not found!"
    },
    UNAUTH: {
        statuscode: this.STATUS_CODE.UNAUTHORISED,
        success: false,
        message: "Invalid token!"
    },
    EMAIL_EXIST: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Email already exist!"
    },
    MOBILE_EXIST: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Mobile number already exist!"
    },
    CONFIRM_PASSWORD_NOT_MATCH: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Confirm password not match!"
    },
    INVALID_CREDENTIALS: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Invalid credentials!"
    },
    USER: {
        USER_NOT_REGISTER: {
            statuscode: this.STATUS_CODE.BADREQUEST,
            success: false,
            message: "User did not register!"
        },
    }
}