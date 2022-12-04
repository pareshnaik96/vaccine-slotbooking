import model from './bookingModel';

import { handlerPath } from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'booking/:userId',
                request: {
                    schemas: {
                        'application/json': model,
                    },
                },
            },
        },
        {
            http: {
                method: 'put',
                path: 'booking/:userId',
                request: {
                    schemas: {
                        'application/json': model,
                    },
                },
            },
        },
    ],
};