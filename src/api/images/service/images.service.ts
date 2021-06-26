import cloudinary from 'cloudinary'
import { Request } from 'express'
import '../../../config/cloudinary';

class Service {
    createOne = async (file?: Express.Multer.File) => {
        // let file :string = req.file.path;
        if (file == null) {
            throw new Error('Null file')
        }
        // await cloudinary.v2.uploader.upload(file.fieldname);
        return file;
    }
}

export const ImageService = new Service();
