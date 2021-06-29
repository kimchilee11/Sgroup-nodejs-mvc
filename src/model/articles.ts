import { model, Schema } from 'mongoose';

const ArticleSchema = new Schema({
    title: String,
    content: String,
    slug: String,
    urlImg: String,
    file: String,
    createdAt: {
        type: Date
    }
});
// ArticleSchema.pre('save', updateHook(this: any) {
//     if (!this.createdAt) {
//         this.createdAt = Date.now();
//     }
//     this.updatedAt = Date.now();
// });

const ArticleModel = model('article', ArticleSchema);

export default ArticleModel;
