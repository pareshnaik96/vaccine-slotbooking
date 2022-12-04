import register from './registerModel';
import login from './loginModel';

import { handlerPath } from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'register',
                request: {
                    schemas: {
                        'application/json': register,
                    },
                },
            },
        },
        {
            http: {
                method: 'post',
                path: 'login',
                request: {
                    schemas: {
                        'application/json': login,
                    },
                },
            },
        },
    ],
};