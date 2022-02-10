import mongoose  from "mongoose";

const Post = new mongoose.Schema(
    {
        topic: { type: 'string', required: true },
        description: { type: 'string', required: true },
        category: { type: 'string', required: true },
    }
)

export default mongoose.model('ProductItems', Post)