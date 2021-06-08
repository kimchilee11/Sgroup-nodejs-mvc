import { Router } from 'express'
import { ControllerAuth } from './controller/index'

const router = Router();

router.post('/login' ,ControllerAuth.login)
// router.post('/register', ControllerAuth.register)

export const AuthRouter = router