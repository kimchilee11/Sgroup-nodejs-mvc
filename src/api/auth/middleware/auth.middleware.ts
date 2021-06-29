import { NextFunction, Request, Response } from 'express'

function authRequired (req : Request, res : Response, next : NextFunction): void {
    const {user} = req.signedCookies;
    if(!user) return res.redirect('/login');
    return next();
}

function authNotRequire (req : Request, res : Response, next : NextFunction): void {
    const { user } = req.signedCookies;
    if(user) {
        return res.redirect('/');
    }
    else return next();
}

export  {
    authRequired,
    authNotRequire
}
