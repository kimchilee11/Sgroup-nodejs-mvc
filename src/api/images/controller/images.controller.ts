import { ServiceArticle } from "../../articles/service/articles.service";
import { ImageService } from "../service/images.service";
import { NextFunction, Request, Response } from 'express'

class Controller {
    createOne = async (req : Request, res : Response , next : NextFunction) => {
        // console.log(req.body);
        
        try {
            const error = ImageService.createOne(req);
            if ((await error).message ) {
                return res.status(400).json({
                    message : (await error).message,
                });
            }
            // return res.status(200).json({
            //     message: error,
            // });
            next();
        } catch (err) {
            console.log(err.message);
            return res.status(400).json(err);
        }
    }
}

export const ImageController = new Controller();
