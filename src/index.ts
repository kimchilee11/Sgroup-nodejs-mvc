import express from 'express'
import api  from './api/index'
import { PORT, COOKIE_SECRET } from './env'
import { connection } from './model'
import {join} from 'path';
import cookieParser from 'cookie-parser';
import { authRequired, authNotRequire } from './api/auth/middleware/auth.middleware'
import { ArticleRepository } from './api/articles/repository/articles.repository';

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

// app.get('/articles/new', (req, res , next)=>{
//     return res.render('pages/newArticle.pug');
// })

app.use('/', api )


app.get('/login', authNotRequire, (req, res) => {
    return res.render('pages/login.pug');
});
app.get('/register',  (req, res) => res.render('pages/register.pug'))

app.get('/',  authRequired , async (req, res) => {
    const articles = await ArticleRepository.findAll();
    res.render('pages/articles.pug', {
        articles
    });
});

app.get('/error',  (req, res) => res.render('pages/error.pug'))

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});