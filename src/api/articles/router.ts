import { Router } from 'express'
import { ControllerArticle } from './controller/articles.controller';

const router = Router();

router.post('/new', ControllerArticle.createOne) ;

router.get('/new', (req, res )=>{
    return res.render('pages/newArticle.pug');
})

export const ArticleRouter = router;