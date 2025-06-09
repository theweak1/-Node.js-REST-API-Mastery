import CustomError from "./custom-error";

class EntityNotFoundError extends CustomError<ErrorCode> {}
export default EntityNotFoundError;
