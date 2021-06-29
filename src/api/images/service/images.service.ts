import cloudinary from 'cloudinary'
import '../../../config/cloudinary';

class Service {
    createOne = async (file?: Express.Multer.File) => {
        if (file == null) {
            throw new Error('Null file')
        }
        return await cloudinary.v2.uploader.upload(file.path);
    }
}

export const ImageService = new Service();
