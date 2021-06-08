import express from 'express'
import api  from './api/index'
import { PORT, COOKIE_SECRET } from './env'
import { connection } from './model'
import {join} from 'path';
import cookieParser from 'cookie-parser';
import { authRequired, authNotRequire } from './api/auth/middleware/auth.middleware'
import { ControllerAuth } from './api/auth/controller/index'

const app = express()

const ROOT_DIR = process.cwd();
const PUBLIC_PATH = join(ROOT_DIR, 'public');

app.set('view engine', 'pug');
app.set('views', join(ROOT_DIR, 'views'));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieParser(COOKIE_SECRET))

app.use(express.static(PUBLIC_PATH, {
    etag: true,
    cacheControl: true,
    maxAge: 8000
}));

connection();
app.use('/', api )

app.get('/login', authNotRequire, (req, res) => {
    return res.render('pages/login.pug');
});

// app.post('/log', ()=> console.log('hehe'))
app.get('/',  authRequired , (req, res) => res.render('pages/detail.pug'))
app.get('/error',  (req, res) => res.render('pages/error.pug'))
app.get('/register',  (req, res) => res.render('pages/register.pug'))

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});
