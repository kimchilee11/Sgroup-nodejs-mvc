import { Router } from 'express'
import { ControllerAuth } from './controller/auth.controller'
import { validateLogin } from './validator/auth.validator';

const router = Router();

router.post('/login' , validateLogin ,ControllerAuth.login)
router.post('/logout', ControllerAuth.logout)
router.post('/register', ControllerAuth.register)

export const AuthRouter = router