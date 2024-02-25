import config from 'config';
import session, { SessionOptions } from 'express-session';

/**
 * Cookie Session Configuration
 *
 * This middleware sets up a cookie-based session with the specified options.
 * It includes a session name, secret keys for encryption, and cookie options
 * such as the maximum age of the cookie.
 *
 * For more details check  out [documentation](https://expressjs.com/en/resources/middleware/session.html)
 */

const options: SessionOptions = {
  secret: "This is a secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: config.get('NODE_ENV') === 'production',
    httpOnly: true,
    sameSite: true,
    maxAge: 1000 * 60 * 60 * 24, // Maximum age of the session cookie (24 hours)
  },

}

export default session(options);