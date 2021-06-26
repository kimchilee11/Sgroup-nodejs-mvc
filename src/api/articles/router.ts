import { Router } from 'express'
import { ControllerArticle } from './controller/articles.controller';

const router = Router();

router.post('/new', ControllerArticle.createOne) ;

export const ArticleRouter = router;