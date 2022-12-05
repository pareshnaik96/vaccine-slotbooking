export default {
    type: "object",
    properties: {
        date: { type: 'string' },
        time: { type: 'string' },
        bookedSlot: { type: 'number' },
        availableSlot: { type: 'number' }
    },
    required: ['date', 'time']
} as const;