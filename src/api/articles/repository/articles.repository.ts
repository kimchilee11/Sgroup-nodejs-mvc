import ArticleModel from '../../../model/articles'

class Repository {
    async findAll() {
        return await ArticleModel.find(x => x);
    }
    async findOneByTitle( title : string ) {
        const data =await ArticleModel.findOne({
            title : title,
        })
        return data; 
    }
}

export const ArticleRepository = new Repository();
