import { Router } from 'express'
import { ArticleRouter } from './articles/router'
import { AuthRouter } from './auth/router'

const router = Router()

router.use('/', AuthRouter)
router.use('/articles', ArticleRouter)

export default router