import { Router } from 'express'
import { ControllerArticle } from './controller/articles.controller';

const router = Router();

router.post('/new', ControllerArticle.createOne) ;

router.get('/:slug/update', ControllerArticle.getUpdateOne) ;

router.post('/:slug/delete', ControllerArticle.removeOne) ;

router.post('/:slug/update', ControllerArticle.updateOne) ;

router.get('/new', (req, res )=>{
    return res.render('pages/newArticle.pug');
})

router.get('/:slug', ControllerArticle.getOne );

export const ArticleRouter = router;