/**
 * @function requestResponseFormatter
 * @description Formats API responses
 * @param {string} type - Response type (success/error)
 * @param {object} payload - Response payload
 * @returns {object} - Formatted response
 */
export const requestResponseFormatter = (type, payload) => {
  const response = {};
  if (type === "success") {
    response.data = payload.data;
    response.message = payload.message;
    response.status = payload.status;
    response.code = payload.code;
    response.token = payload.token;
  } else {
    response.status = payload.status;
    response.error = {
      code: payload.code,
      message: payload.message,
    };
  }
  return response;
};

/**
 * @function queryResponsesFormatter
 * @description Formats database query responses
 * @param {string} type - Response type (success/error)
 * @param {object} data - Query result or error info
 * @returns {object} - Formatted response
 */
export const queryResponsesFormatter = (type, data) => ({
  type,
  data: type === "error" ? { cause: data.cause, message: data.message } : data,
});
