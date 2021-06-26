import { ImageService } from "../service/images.service";
import { NextFunction, Request, Response } from 'express'

class Controller {
    createOne = async (req : Request, res : Response , next : NextFunction) => {
        try {
            const path = await ImageService.createOne(req.file);
            return res.status(200).json({
                src: path
            })
        } catch (err) {
            console.log(err.message);
            return res.status(400).json(err);
        }
    }
}

export const ImageController = new Controller();
