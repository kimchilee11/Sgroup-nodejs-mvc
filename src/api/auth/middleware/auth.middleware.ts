import SessionSchema from '../../../model/session';
import { NextFunction, Request, Response } from 'express'

function authRequired (req : Request, res : Response, next : NextFunction) {
        const {user} = req.signedCookies;
        if(!user) return res.redirect('/login');
        else {
            // console.log("Heyy Hey heyyyy");
            // console.log(user);
            // const IsExistSession =await SessionSchema.findOne({
            //     _id : user
            // })
            // if(IsExistSession){
            //     return res.status(400).render('pages/error', {
            //         error: "Cannot login"
            //     });
            // }
        }
        return next();
}

function authNotRequire (req : Request, res : Response, next : NextFunction) {
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
