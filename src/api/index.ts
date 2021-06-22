import { Router } from 'express'
import { ArticleRouter } from './articles/router'
import { AuthRouter } from './auth/router'
import { image } from './images/router'

const router = Router()

router.use('/', AuthRouter)
router.use('/articles', ArticleRouter)
// router.use('/articles/new', image);

export default router