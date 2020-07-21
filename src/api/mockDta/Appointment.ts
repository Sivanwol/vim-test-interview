export interface Appointment {
    name: string;
    score: number;
    specialties: string[];
    availableDates: Dates[];
}
interface Dates {
    from: number;
    to: number;
}
