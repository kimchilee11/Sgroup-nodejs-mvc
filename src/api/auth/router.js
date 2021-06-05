import { Router } from 'express'
import { ControllerAuth } from './controller/index'
// import { AuthMiddleware } from './middleware/auth.middleware'

const router = Router();

router.post('/login' ,ControllerAuth.login)
router.post('/register', ControllerAuth.register)

export const AuthRouter = router