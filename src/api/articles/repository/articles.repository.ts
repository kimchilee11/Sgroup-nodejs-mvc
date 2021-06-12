import ArticleModel from '../../../model/articles'

class Repository {
    async findAll() {
        return await ArticleModel.find(x => x);
    }
    async create() {
        return await ArticleModel.create({
            title: "heloo heloo",
            slug: "kim chi le",
            content: "hiiiiii"
        });
    }
}

export const ArticleRepository = new Repository();
