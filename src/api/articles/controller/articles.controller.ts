import { Request, Response } from 'express'
import { ServiceArticle } from '../service/articles.service';

class Controller {
    createOne = async (req: Request , res: Response ) => {
        const x = await ServiceArticle.createOne(req.body);
        if(x == "ok") {
            return res.redirect("/");
        }
        return res.status(200).json({
            message: x.message,
        }) 
    }
    getOne = async (req: Request , res: Response ) => {
        const slug = req.params.slug;
        console.log(slug);
        const article = await ServiceArticle.getOne(slug);
        console.log(article);
        
        return res.render('pages/detail.pug', {
            article
        });
    }
    removeOne = async (req: Request , res: Response ) => {
        console.log(req.params.slug);
        const article = await ServiceArticle.removeOne(req.params.slug);
        
        if(article) return res.status(200).json({
            message: "success",
        }) 
        return res.status(400).json({
            message: "cannot delete !!!!"
        })
    }
    getUpdateOne = async (req: Request , res: Response ) => {
        const article = await ServiceArticle.getOne(req.params.slug);
        console.log(article);
        
        return res.render('pages/updateArticle.pug', {
            article
        }) 
    }
    updateOne = async (req: Request , res: Response ) => {
        const article = await ServiceArticle.updateOne(req.body);
        console.log(article);
        return res.redirect(`/articles/${article.slug}`); 
    }
}

export const ControllerArticle = new Controller();