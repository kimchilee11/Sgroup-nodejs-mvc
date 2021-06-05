import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../../env'
import { RegisterDto } from "../dto/index";
import LoginModel from '../../../model/login';
import bcrypt from 'bcryptjs';
import { AuthRepository } from '../repository/index'

class ServiceAuth {
    async login ({ email, password}) {
        let token;
        let data = await AuthRepository.findOne(email);
        if(data) {
            let x= await bcrypt.compare(password, data.password);
            if(x) {
                token= jwt.sign({
                    id : data._id
                }, JWT_SECRET)
                return {
                    status: 200,
                    _id: data._id
                };
            }
            else {
                return {
                    status: 401,
                    message: "Psw saiiiiii"
                };
            }
        }
        else {
            return {
                status: 401,
                message: "Email unvalidate"
            }
        }
    }

    async register (data) {
        const dto = new RegisterDto(data);
        const salt = await bcrypt.genSalt(10);
        dto.password = await bcrypt.hash(dto.password, salt);
        const userIsExist = AuthRepository.findOne(data.email);
        if(userIsExist) await LoginModel.insertMany([dto]);
        return 'ok';
    }
}

export const Service = new ServiceAuth();
