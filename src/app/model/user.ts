export class User {
    userId: number;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    password: string = '';
    phone: number;
    speciality: string = '';
    gender: string = '';
    bloodGroup: string = '';
    age: number;
    city: string = '';
    userType: number = -1;
    address: string = '';
    storeName: string = '';
    latitude: number = 0;
    longitude: number = 0;
    deleted: boolean = false;
    blocked: boolean = false;
}

export class GeoAddress {
    public GeoAddress(lat, lng) {
        this.latitude = lat;
        this.longitude = lng;
    }

    latitude: number = 0;
    longitude: number = 0;
}


export class LoginModel {
    email: string = '';
    password: string = '';
}