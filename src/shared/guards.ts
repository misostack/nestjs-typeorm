import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../user/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    return this.authService.isLogged(context);
  }
}
