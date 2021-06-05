import SessionSchema from '../../../model/session';
import { Service } from '../service'

class Controller {
    /**
     * @type {Service}
     */
    service;
    constructor(service) {
        this.service = service
    }
    login = async (req,res) => {
        try {
            let info = await this.service.login(req.body);
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

    register = async (req, res) => {
        try {
            var state = await this.service.register(req.body);
            res.send(state);
        } catch (error) {
            console.log(error);
        }
    }
}

export const ControllerAuth = new Controller(Service);
