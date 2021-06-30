import ArticleModel from '../../../model/articles'
import { IArticleDto } from '../dto/article.dto';

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
    async findOneBySlug( slug : string ) {
        const data =await ArticleModel.findOne({
            slug : slug,
        })
        return data; 
    }
    async removeOne( slug : string ) {
        const data =await ArticleModel.remove({
            slug : slug,
        })
        return data; 
    }
    async updateOne( article : IArticleDto ) {
        const data = await ArticleModel.updateOne({
            title: article.title,
            content: article.content,
            slug: article.slug,
        });
        return data; 
    }
}

export const ArticleRepository = new Repository();
