import { pinoHttp } from 'pino-http';

const options = {
    transport: {
        target: 'pino-pretty',
        options: {
            translateTime: 'HH:MM:ss Z'
        },
    },
};

export default pinoHttp(options);
