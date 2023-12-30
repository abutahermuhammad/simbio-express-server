import compression from "compression";

/**
 * Express Response Compression Middleware
 * 
 * This middleware compresses responses sent by your Express application.
 * It improves performance by reducing response size for supported clients.
 */

export default compression({
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      // Don't compress responses with this request header
      return false;
    }

    // Fallback to the standard filter function for compression
    return compression.filter(req, res);
  }
});
