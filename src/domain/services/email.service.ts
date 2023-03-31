import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { ConfigService } from '@nestjs/config';
 
@Injectable()
export default class EmailService {
  private nodemailerTransport: Mail;
 
  constructor(
    private readonly configService: ConfigService
  ) {
    var smtpConfig = {
        host: 'smtp.mail.com',
        auth: {
            user: '',
            pass: ''
        }
    };
    this.nodemailerTransport = createTransport(smtpConfig);
    
  }
 
  sendMail(options: Mail.Options) {
    console.log(this.nodemailerTransport)
    return this.nodemailerTransport.sendMail(options);
  }
}