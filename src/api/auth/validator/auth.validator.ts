import { Request , Response, NextFunction } from "express";
import { ILoginDto } from "../dto/register.dto";

function validate ( email: string , pwd : string) {
    let  err  = "err: ";
    const e = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    return new Promise((resolve) => {
        if (!email || e == false) {
            err += ("Email is not formatted correctly\n");
        }
        if(!pwd) {
            err += ("Your password was incorrect ");
        }
        return resolve(err);
    });
}

export async function  validateLogin ( req : Request, res : Response, next : NextFunction ): Promise<void> {
    const data : ILoginDto = req.body;
        await validate(data.email , data.password)
        .then((err): void=> {
            if(err!=("err: ")) {
                console.log(err);
                return res.redirect('/error');
            }
            else return next();
        })
    
}