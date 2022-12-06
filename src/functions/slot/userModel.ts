export default {
  type: "object",
  properties: {
    role: { type: 'string' },
    name: { type: 'string' },
    phoneNumber: { type: 'string' },
    age: { type: 'number' },
    pincode: { type: 'number' },
    aadharNo: { type: 'string' },
    password: { type: 'string' }
  },

} as const;
