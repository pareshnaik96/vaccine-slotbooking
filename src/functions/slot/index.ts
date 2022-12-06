import slot from './slotModel';
import user from './userModel'
import booking from './bookingModel'

import { handlerPath } from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'slot/{adminId}',
                request: {
                    schemas: {
                        'application/json': slot,
                    },
                },
            },
        },
        {
            http: {
                method: 'get',
                path: 'slot',
                request: {
                    schemas: {
                        'application/json': slot,
                    },
                },
            },
        },
        {
            http: {
                method: 'get',
                path: 'user/{adminId}',
                request: {
                    schemas: {
                        'application/json': user,
                    },
                },
            },
        },
        {
            http: {
                method: 'get',
                path: 'user/admin/{adminId}',
                request: {
                    schemas: {
                        'application/json': booking,
                    },
                },
            },
        },
    ],
};