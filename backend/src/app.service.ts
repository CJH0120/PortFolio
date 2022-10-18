import { Get, Inject, Injectable } from '@nestjs/common';
import { get } from 'http';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {}
