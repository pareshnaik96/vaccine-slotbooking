export default {
    type: "object",
    properties: {
        userId: { type: 'ObjectId' },
        doseType: { type: 'string' },
        slotDate: { type: 'string' },
        slotTime: { type: 'string' },
        status: { type: 'string' },
        cancellable: { type: 'boolean' }
    },
    required: ['userId', 'doseType', 'slotDate', 'slotTime', 'status', 'cancellable']
} as const;