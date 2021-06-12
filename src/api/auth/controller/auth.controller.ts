import SessionSchema from '../../../model/session';
import { Service } from '../service/auth.validator'
import { Request, Response } from 'express'
import fetch from 'node-fetch'
import { userInfo } from 'os';
import { RegisterDto } from '../dto/register.dto';
import LoginModel from '../../../model/login';

class Controller {
    /**
     * @type {Service}
     */
    login = async (req : Request ,res : Response) => {
        try {
            let info = await Service.login(req.body);
            switch (info.status) {
                case 200:
                    const IsExistSession =await SessionSchema.findOne({
                        _id : info._id
                    })
                    if(!IsExistSession){
                            res.cookie('user', info._id, {
                                httpOnly: true,
                                signed: true,
                                maxAge: 30 * 1000
                            });
                        await SessionSchema.create({
                            _id: info._id,
                            lock: true
                        });
                        return res.redirect('/');
                    }
                    else {
                        console.log('Have some user using this account');
                        return res.status(401).render('pages/error', {
                            error: "Cannot login"
                        });
                    }
                case 401:
                    console.log("Please check your email && password");
                    return res.redirect('/error');
            }
        }
        catch (error) {
            console.log(error);
            return res.redirect('/error', );
        }
    }

    logout = async ( req: Request, res: Response) => {
        const {user} = req.signedCookies;
        if(user){
            await fetch('http://127.0.0.1:3000/logout', {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(async () => {
                await Service.logout(user);
                res.clearCookie('user', { path: '/' });
                return res.status(200).redirect('/');
            })
            .catch((err) => {
                return err;
            });
        }
        else res.redirect('/');
    }

    register = async (req : Request, res : Response) => {
        try {
            let state = await Service.register(req.body);
            return res.redirect('/');
        } catch (error) {
            console.log(error);
        }
        return res.redirect('/login');
    }
}

export const ControllerAuth = new Controller();
