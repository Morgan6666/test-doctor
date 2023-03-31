import { ConfigService } from '@nestjs/config';
import { HealthCheckService, DNSHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';
export declare class HealthController {
    private health;
    private dns;
    private db;
    private configService;
    constructor(health: HealthCheckService, dns: DNSHealthIndicator, db: TypeOrmHealthIndicator, configService: ConfigService);
    healthCheck(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
