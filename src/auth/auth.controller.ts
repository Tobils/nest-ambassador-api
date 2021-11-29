import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private readonly logger: Logger = new Logger(AuthController.name);

  @Post('/signin')
  signin() {}

  @Post('/signup')
  signup(@Body() signUpdto: SignUpDto) {
    this.logger.debug(signUpdto);
    return this.authService.register(signUpdto);
  }
}
