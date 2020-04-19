export class User {
    userId: number;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    password: string = '';
    phone: number = 0;
    speciality: string = '';
    gender: string = '';
    bloodGroup: string = '';
    age: number = 0;
    city: string = '';
    userType: number = -1;
    address: string = '';
    storeName: string = '';
    latitude: number = 0;
    longitude: number = 0;
    deleted: boolean = false;
}

export class GeoAddress {
    latitude: number = 0;
    longitude: number = 0;
}


export class LoginModel {
    email: string = '';
    password: string = '';
}