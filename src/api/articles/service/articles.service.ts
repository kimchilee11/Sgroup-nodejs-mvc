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
}
export const ServiceArticle = new Service();
