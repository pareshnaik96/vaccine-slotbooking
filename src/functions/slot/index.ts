import model from './slotModel';

import { handlerPath } from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'slot/:adminId',
                request: {
                    schemas: {
                        'application/json': model,
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
                        'application/json': model,
                    },
                },
            },
        },
    ],
};