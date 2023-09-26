import cors from 'cors';


const origins = ['http://localhost:3000', '0.0.0.0']; // List of allowed origins
const methods = ['GET', 'POST', 'PATCH', 'DELETE']; // List of allowed HTTP methods


/**
 * CORS Middleware
 * 
 * This middleware enforces Cross-Origin Resource Sharing (CORS) policies to control
 * which domains can access your server and which HTTP methods are allowed.
 */
export default cors({
  origin: origins, // Specify the list of allowed origins
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) expect a 200 status for preflight requests
  methods: methods, // Specify the allowed HTTP methods
  credentials: false, // Allow credentials (cookies, HTTP authentication) to be included in requests
});