import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstant } from './jwt-constant';
import { JwtPayload } from './jwt-payload.interface';
import { SignInDto } from '../dto/signin.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstant.secret,
    });
  }

  /**
   * validate payload
   * @param jwtPayload hasil verify jwt
   * @returns req.user
   */
  async validate(jwtPayload: JwtPayload) {
    const { uuid } = jwtPayload;
    return await this.userService.findOne(uuid);
  }
}
