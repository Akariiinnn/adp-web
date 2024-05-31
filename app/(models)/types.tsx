export interface UserSignup {
    username: string,
    email: string,
    password: string,
    confirm_password: string,
}

export interface UserLogin {
    email: string,
    password: string
}

export interface User {
     ID : string,
     fullname :  string,
     email :  string,
     password :  string,
     revenus :  string
}

export interface Category {
    ID: number;
    name: string;
    budget: string;
    user_id: number;
}

export interface Spending {
    ID: number,
    name: string,
    category_id: number,
    value: string,
    reccuring: string,
    user_id: number,
    createdat: string
}