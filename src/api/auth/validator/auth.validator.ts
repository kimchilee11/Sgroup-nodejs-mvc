import { Request , Response, NextFunction } from "express";
import { ILoginDto } from "../dto/register.dto";

function validate ( email: string , pwd : string) {
    let  err : string = "err: ";
    const e = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    return new Promise((resolve, rejects) => {
        if (!email || e == false) {
            err += ("Email is not formatted correctly\n");
        }
        if(!pwd) {
            err += ("Your password was incorrect ");
        }
        return resolve(err);
    });
}

export async function  validateLogin ( req : Request, res : Response, next : NextFunction ) {
    const data : ILoginDto = req.body;
        await validate(data.email , data.password)
        .then((err :any )=> {
            if(err!=("err: ")) {
                console.log(err);
                return res.redirect('/error');
            }
            else return next();
        })
    
}