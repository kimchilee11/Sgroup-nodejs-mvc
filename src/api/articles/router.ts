import { Router } from 'express'
import { ArticleRepository } from './repository/articles.repository';

const router = Router();

router.get('/:slug', async (req, res, next) =>  {
    const { slug } = req.params;
    console.log( slug);
    res.render('pages/detail.pug')
});
router.post('/edit', (req, res)=> res.send("huhu"));

export const ArticleRouter = router;