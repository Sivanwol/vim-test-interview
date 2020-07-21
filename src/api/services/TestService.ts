import { Service } from 'typedi';

import * as MockResponse from '../../../code-interview/providers/providers.json';

// import { Logger, LoggerInterface } from '../../decorators/Logger';

@Service()
export class TestService {
    // constructor(@Logger(__filename) private log: LoggerInterface) {}

    public async queryAppointments(
        specialties: string[],
        threshold: number,
        availability: number
    ): Promise<any> {
        return MockResponse.filter((item) => {
            const tSpecialties = item.specialties.join();
            let matched = false;
            // we check if we matched on specialties
            specialties.forEach((specialtie) => {
                matched = !!tSpecialties.indexOf(specialtie);
            });

            /// we check if the min score matched the threshold
            if (item.score <= threshold) {
                matched = true;
            }
            item.availableDates.forEach((availabilityObj) => {
                if (availabilityObj.from >= availability) {
                    matched = true;
                }
            });
            return matched ? item : null;
        }).filter((item) => !!item);
    }
}
