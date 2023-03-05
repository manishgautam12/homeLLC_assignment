export function responseData(res, message, ErrorCode, status, errorMessage ,  resData=[]) {
    return res.status(ErrorCode).json({
      message: message,
      status: status,
      errorMessage: errorMessage,
      code: ErrorCode,
      data: resData,
    });
  }