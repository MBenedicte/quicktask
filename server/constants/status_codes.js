// Informational responses
export const CONTINUE = 100;
export const SWITCHING_PROTOCOLS = 101;

// Success codes
export const OK = 200;
export const CREATED = 201;
export const ACCEPTED = 202;
export const NO_CONTENT = 204;

// Redirection codes
export const MOVED_PERMANENTLY = 301;
export const FOUND = 302; // Also known as Temporary Redirect
export const NOT_MODIFIED = 304;
export const TEMPORARY_REDIRECT = 307;

// Client error responses
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const FORBIDDEN = 403;
export const NOT_FOUND = 404;
export const METHOD_NOT_ALLOWED = 405;
export const CONFLICT = 409;
export const UNPROCESSABLE_ENTITY = 422;

// Server error responses
export const INTERNAL_SERVER_ERROR = 500;
export const NOT_IMPLEMENTED = 501;
export const BAD_GATEWAY = 502;
export const SERVICE_UNAVAILABLE = 503;
export const GATEWAY_TIMEOUT = 504;
