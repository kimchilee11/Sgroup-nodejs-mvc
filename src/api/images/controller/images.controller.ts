import { ImageService } from "../service/images.service";
import { Request, Response } from 'express';

class Controller {
    createOne = async (req : Request, res : Response ) => {
        try {
            const path = await ImageService.createOne(req.file);
            return res.status(200).json({
                src: path.secure_url
            })
        } catch (err) {
            console.log(err.message);
            return res.status(400).json(err);
        }
    }
}

export const ImageController = new Controller();
