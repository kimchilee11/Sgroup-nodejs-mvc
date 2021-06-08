import { model, Schema } from 'mongoose'

const SessionSchema = model('session', new Schema({
    _id: String,
    lock: Boolean,
}, {timestamps: true}).index({createdAt: 1},{expireAfterSeconds: 6000}));

export default SessionSchema;
