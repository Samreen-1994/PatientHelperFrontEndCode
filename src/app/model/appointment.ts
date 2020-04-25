export class Appointment {
    appointmentId: number;
    appointmentTitle: string;
    appointmentDescription: string;
    doctorId: number;
    patientId: number;
    appointmentSchedule: Date = new Date();
    deleted: boolean = false;
    appointmentApproved: boolean = false;
    appointmentCompleted: boolean = false;
}


export class PatientAppointmentResponse {
    doctorName: string;
    doctorId: number;
    patientId: number;
    appointmentTitle: string;
    appointmentSchedule: Date = new Date();
    appointmentDescription: string;
    appointmentCompleted: boolean;
    appointmentApproved: boolean;
    deleted: boolean;
    appointmentId: number;
}