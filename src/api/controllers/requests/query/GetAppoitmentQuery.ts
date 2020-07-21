import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetAppointmentQuery {
    @IsNotEmpty()
    public specialties: string;

    @IsNumber()
    public threshold: number;

    @IsNumber()
    public availability: number;
}
