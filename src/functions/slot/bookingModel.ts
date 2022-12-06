export default {
    type: "object",
    properties: {
        userId: { type: 'string' },
        doseType: { type: 'string' },
        slotDate: { type: 'string' },
        slotTime: { type: 'string' },
        status: { type: 'string' },
        cancellable: { type: 'boolean' }
    },

} as const;