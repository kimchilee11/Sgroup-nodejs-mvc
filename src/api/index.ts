import { Router } from 'express'
import { ArticleRouter } from './articles/router'
import { AuthRouter } from './auth/router'
import { Image } from './images/router'

const router = Router()

router.use('/', AuthRouter)
router.use('/articles', ArticleRouter)
router.use('/images', Image);

export default router