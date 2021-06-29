import bcrypt from 'bcryptjs';
import { AuthRepository } from '../repository/auth.repository'
import SessionSchema from '../../../model/session'
import { RegisterDto } from '../dto/register.dto';
import LoginModel from '../../../model/login';
import { register, ILoginDto } from '../dto/register.dto';

class ServiceAuth {
    async login (req : ILoginDto) {
        const { email  , password } = req;
        const data = await AuthRepository.findOne(email);
        if(data) {
            const temp = await bcrypt.compare(password, data.password);
            if(temp) {
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

    async logout(idUser : string) {
        await SessionSchema.findByIdAndDelete({
            _id : idUser,
        });
        return ;
    }

    async register (data : register ) {
        const dto = new RegisterDto(data);
        const salt = await bcrypt.genSalt(10);
        const str : string = data.password;
        dto.password = await bcrypt.hash(str , salt);
        const userIsExist = await AuthRepository.findOne(data.email);
        if(!userIsExist) {
            await LoginModel.create(dto);
            return 'ok';
        }
        return "error";
    }
}

export const Service = new ServiceAuth();
