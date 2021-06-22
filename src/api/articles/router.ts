import { Router } from 'express'
import { ImageController } from '../images/controller/images.controller';
import { ControllerArticle } from './controller/articles.controller';
import { ArticleRepository } from './repository/articles.repository';

const router = Router();

router.get('/:slug', async (req, res, next) =>  {
    res.render('pages/detail.pug')
});

router.post('/new', ControllerArticle.createOne );
// router.post('/new', ImageController.createOne ,ControllerArticle.createOne );

export const ArticleRouter = router;