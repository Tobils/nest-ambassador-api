import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { JwtPayload } from './jwt/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  private readonly logger: Logger = new Logger(AuthService.name);

  async register(signUpDto: SignUpDto) {
    this.logger.debug(signUpDto);
    const user: User = await this.userService.create(signUpDto);
    delete user['password'];
    delete user['salt'];
    return {
      user,
      token: this.generateToken({ uuid: user.uuid }),
    };
  }

  async signIn(signInDto: SignInDto) {
    this.logger.debug(signInDto);
    const user: User = await this.userService.validateUser(signInDto);
    delete user['password'];
    delete user['salt'];
    return {
      user,
      token: this.generateToken({ uuid: user.uuid }),
    };
  }

  private generateToken(jwtPayload: JwtPayload): string {
    return this.jwtService.sign(jwtPayload);
  }
}
