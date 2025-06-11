import CustomError from "./custom-error";

class AuthenticationError extends CustomError<ErrorCode> {}
export default AuthenticationError;
