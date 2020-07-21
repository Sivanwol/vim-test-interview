import { IsNotEmpty, MinLength } from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';

export class CreateAppoitementRequest {

    @JSONSchema({
        description: 'Name of the doctor',
    })
    @MinLength(15)
    @IsNotEmpty()
    public name: string;
    @JSONSchema({
        description: 'specialties of the doctor',
    })
    @MinLength(15)
    @IsNotEmpty()
    public specialtie: string;

}
