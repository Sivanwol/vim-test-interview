import { Body, Get, JsonController, Post, QueryParams } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';

import { Appointment } from '../mockDta/Appointment';
import { TestService } from '../services/TestService';
import { CreateAppoitementRequest } from './requests/CreateAppoitementRequest';
import { GetAppointmentQuery } from './requests/query/GetAppoitmentQuery';

@JsonController('/test')
@OpenAPI({})
export class TestController {

    constructor(
        private testService: TestService
    ) { }

    @Get('/Appointments')
    public index(@QueryParams() query: GetAppointmentQuery): Promise<Appointment[]> {
        return this.testService.queryAppointments(query.specialties.split(','), query.threshold, query.availability);
    }

    @Post('/appointment')
    public async  create(@Body() body: CreateAppoitementRequest): Promise<string> {
        return 'ok';
    }
}
