```bash
{
    "name": "SIMBIO - development",
    "aws": {
        "bucket": "default-bucket-name",
        "region": "default-region"
    },
    "azure": {},
    "cloudflare": {},
    "openai": {},
    "stripe": {},
    "mail": {
        "host": "dev-mail-server"
    },
    "server": {
        # Environment Variables
        "port": 5000,  // Environment Variables

        # This will determine the use of multi-core cluster.
        # Currently using `false` value to prevent `rate limit` related issue message.
        # export const NUM_WORKERS: number = os.cpus().length || 1;
        "worker_count": 1,

        # Request Payload Size
        # This will define the allowed payload size for a upcoming payload withing a REST API call.
        "request_payload_size": "100kb",

        # Public Static Directory
        "static_file_dir": "public"
    },
    "version": "v1"
}
```