import { Injectable, Logger } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  private readonly logger: Logger = new Logger(AuthService.name);

  async register(signUpDto: SignUpDto) {
    this.userService.create(signUpDto);
  }
}
