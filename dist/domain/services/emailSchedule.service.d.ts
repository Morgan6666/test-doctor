import { SchedulerRegistry } from '@nestjs/schedule';
import EmailService from './email.service';
import EmailScheduleDto from 'presentation/view-models/mail/emailSchedule';
export default class EmailSchedulingService {
    private readonly emailService;
    private readonly schedulerRegistry;
    constructor(emailService: EmailService, schedulerRegistry: SchedulerRegistry);
    scheduleEmail(emailSchedule: EmailScheduleDto): void;
}
