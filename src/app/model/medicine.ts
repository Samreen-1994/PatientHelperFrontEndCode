export class MedicineRequest {
    requestId: number = 0;
    patientId: number;
    medicalStoreId: number;
    requestText: string;
    requestResponse: string;
    requestImage: string;
    deleted: boolean = false;
}


export class MedicineRequestResponse {
    name: string;
    city: string;
    phone: number;
    email: string;
    requestText: string;
    requestImage: string;
    requestResponse: string;
    requestId: number;
    fieldDisabled = true;
}