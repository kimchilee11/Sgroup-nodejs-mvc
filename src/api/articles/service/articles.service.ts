import slugify from "slugify";
import ArticleModel from "../../../model/articles";
import { IArticleDto } from "../dto/article.dto";
import { ArticleRepository } from "../repository/articles.repository";

class Service {
    async createOne (data : IArticleDto) {
        const titleExist : string = await ArticleRepository.findOneByTitle(data.title);
        data.slug = slugify(data.title);
        
        console.log(data);
        if(!titleExist) {
            await ArticleModel.create(data);
            return 'ok';
        }
        return {
            message: "cannot create article",
        };
    }
    async getOne (slug : string){
        const data : IArticleDto = await ArticleRepository.findOneBySlug(slug);
        return data;
    }
    async getOneByTitle (title : string){
        const data : IArticleDto = await ArticleRepository.findOneByTitle(title);
        return data;
    }
    async removeOne(slug : string){
        const data : IArticleDto = await ArticleRepository.removeOne(slug);
        return data;
    }
    async updateOne(article : IArticleDto){
        article.slug = slugify(article.title);
        await ArticleRepository.updateOne(article);
        return article;
    }
}
export const ServiceArticle = new Service();
