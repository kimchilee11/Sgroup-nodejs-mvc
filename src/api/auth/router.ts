import { Router } from 'express'
import { ControllerAuth } from './controller/index'

const router = Router();

router.post('/login' ,ControllerAuth.login)
router.post('/logout', ControllerAuth.logout)

export const AuthRouter = router