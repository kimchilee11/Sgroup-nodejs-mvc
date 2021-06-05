import LoginModel from '../../../model/login'

class Repository {
    async findOne( email) {
        let data =await LoginModel.findOne({
            email : email,
        })
        return data;
    }
    async findAll() {
        return await LoginModel.find(x => x);
    }
}

export const AuthRepository = new Repository();