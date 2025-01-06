export class CreateAppointmentDto {
    doctorId: number;
    userId: number;
    date: string;
    time: string;
    patientName?: string;
}