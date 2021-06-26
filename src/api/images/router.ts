import { Router } from 'express';
import multer from 'multer';
import { ImageController } from './controller/images.controller';

const router = Router();
const storage = {
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${process.cwd()}/src/upload`);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '.jpg');
    },
  })
}

const upload = multer(storage);

router.post('/', upload.single('file'), ImageController.createOne);

export const Image = router;