import ArticleModel from '../../../model/articles'

class Repository {
    async findAll() {
        return await ArticleModel.find(x => x);
    }
    async findOneByTitle( title : String ) {
        let data =await ArticleModel.findOne({
            title : title,
        })
        return data; 
    }
    // async createOne(data) {
    //     return await ArticleModel.
    // }
}

export const ArticleRepository = new Repository();
