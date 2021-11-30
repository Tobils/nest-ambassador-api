import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private readonly logger: Logger = new Logger(AuthController.name);

  @Post('/signin')
  signin(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('/signup')
  signup(@Body() signUpdto: SignUpDto) {
    return this.authService.register(signUpdto);
  }
}
