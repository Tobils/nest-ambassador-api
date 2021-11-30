import { Injectable, Logger } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  private readonly logger: Logger = new Logger(AuthService.name);

  async register(signUpDto: SignUpDto) {
    this.logger.debug(signUpDto);
    this.userService.create(signUpDto);
  }

  async signIn(signInDto: SignInDto) {
    this.logger.debug(signInDto);
    return signInDto;
  }
}
