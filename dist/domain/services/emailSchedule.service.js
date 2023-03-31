"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const cron_1 = require("cron");
const email_service_1 = __importDefault(require("./email.service"));
const emailSchedule_1 = __importDefault(require("../../presentation/view-models/mail/emailSchedule"));
let EmailSchedulingService = (() => {
    let EmailSchedulingService = class EmailSchedulingService {
        constructor(emailService, schedulerRegistry) {
            this.emailService = emailService;
            this.schedulerRegistry = schedulerRegistry;
        }
        scheduleEmail(emailSchedule) {
            const date = new Date(emailSchedule.date);
            const job = new cron_1.CronJob(date, () => {
                this.emailService.sendMail({
                    to: emailSchedule.recipient,
                    subject: emailSchedule.subject,
                    text: emailSchedule.content
                });
            });
            this.schedulerRegistry.addCronJob(`${Date.now()}-${emailSchedule.subject}`, job);
            job.start();
        }
    };
    EmailSchedulingService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [email_service_1.default,
            schedule_1.SchedulerRegistry])
    ], EmailSchedulingService);
    return EmailSchedulingService;
})();
exports.default = EmailSchedulingService;
//# sourceMappingURL=emailSchedule.service.js.map