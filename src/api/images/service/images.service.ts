import cloudinary from 'cloudinary'
import { Request } from 'express'
import '../../../config/cloudinary';

class Service {
    createOne = async (req : any) => {
        console.log(req.body);
        
        try {
            if (req.body.file == null) {
                return {
                   message: "NotFoundException",
                }
            }
            const uploadRes = await cloudinary.v2.uploader.upload(req.body.file);
            return uploadRes;
        } catch (err) {
            console.log(err);
            return {
                message: "error",
            }
        }
    }
}

export const ImageService = new Service();
