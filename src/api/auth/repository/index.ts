import LoginModel from '../../../model/login'

class Repository {
    async findOne( email : String ) {
        let data =await LoginModel.findOne({
            email : email,
        })
        return data;
    }
    async findOneById( id : String ) {
        let data =await LoginModel.findOne({
            _id : id,
        })
        return data; 
    }
    async findAll() {
        return await LoginModel.find(x => x);
    }
}

export const AuthRepository = new Repository();