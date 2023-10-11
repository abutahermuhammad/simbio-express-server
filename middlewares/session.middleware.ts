import session from 'express-session';

/**
 * Cookie Session Configuration
 * 
 * This middleware sets up a cookie-based session with the specified options.
 * It includes a session name, secret keys for encryption, and cookie options
 * such as the maximum age of the cookie.
 * 
 * For more details check  out [documentation](https://expressjs.com/en/resources/middleware/session.html)
 */

const options = {
  resave: true,
  saveUninitialized: true,
  secret: "this-is-a-simbio-secret-key",
  cookie: {
    httpOnly: true,
    sameSite: true,
    //   maxAge: 24 * 60 * 60 * 1000, // Maximum age of the session cookie (24 hours)
  },

}

export default session(options);