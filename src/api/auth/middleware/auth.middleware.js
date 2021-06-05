import SessionSchema from '../../../model/session';

function authRequired (req, res, next) {
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

function authNotRequire (req, res, next) {
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
