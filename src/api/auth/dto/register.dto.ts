export interface register {
    email: String,
    password: string,
    address: String,
    phoneNumber: String
}

export interface ILoginDto {
    email: string,
    password: string,
}

export class RegisterDto {
    /**
     * @param {String}  
     */
     email 
    /**
     * @param {String}  
     */
     password 
    /**
     * @param {String}  
     */
     address 
    /**
     * @param {String}  
     */
     phoneNumber 

    constructor(register : register ) 
    {
        this.email = register.email;
        this.password = register.password;
        this.address = register.address;
        this.phoneNumber = register.phoneNumber;
    }
}
