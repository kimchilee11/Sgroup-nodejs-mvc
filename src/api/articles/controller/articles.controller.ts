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
}

export const ControllerArticle = new Controller();