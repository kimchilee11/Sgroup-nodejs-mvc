import { Router } from 'express';
import multer from 'multer';
import { ImageController } from './controller/images.controller';

const router = Router();
const storage = {
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, "./public/images");
      },
      filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}.jpeg`);
      },
    }),
    limits: {
      fileSize: 5 * 1024 * 1024,
    },
    // fileFilter(req, file, callback) {
    //   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    //     return callback(null, true);
    // }
        // return callback({ message: "Unsupported file format" }, false);
    // },
  };

const upload = multer(storage);

router.post('/', upload.single('file'), ImageController.createOne);

export const image = router;