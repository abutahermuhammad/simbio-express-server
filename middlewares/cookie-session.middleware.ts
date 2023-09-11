import cookieSession from 'cookie-session';

/**
 * Cookie Session Configuration
 * 
 * This middleware sets up a cookie-based session with the specified options.
 * It includes a session name, secret keys for encryption, and cookie options
 * such as the maximum age of the cookie.
 */
export default cookieSession({
  name: 'session', // Name of the session cookie
  keys: [
    'Bl1)JhG2Al;|9BOQ>hVKF^KBkEHPkqk.C z1~8i-,<{kpXv ^ }Pd+->5=yEyMZb',
    '`,5*_&Yvu/#gM|&uXIl|=vzJH0~7jF{W+R*ib0e>u`m0@wMv`is~+lEeR:E6DL_/',
    '/+_ekKS{]w5%*^T{5kKq|/6@o6QXV+e%sx~/`K+lecem)b&CZ<[m+Qkg8&*g{1O0'
  ], // Array of secret keys for encryption

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000, // Maximum age of the session cookie (24 hours)
});
