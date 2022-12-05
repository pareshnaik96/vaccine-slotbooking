export default {
    type: "object",
    properties: {
        bookingId: { type: 'string' },
        userId: { type: 'string' },
        doseType: { type: 'string' },
        slotDate: { type: 'string' },
        slotTime: { type: 'string' },
        status: { type: 'string' },
        cancellable: { type: 'boolean' }
    },
    required: ['status']
} as const;