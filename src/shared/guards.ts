import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AuthService } from '../user/services/auth.service';
import { ServiceInjectionKey } from './services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(ServiceInjectionKey.AuthService)
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    return this.authService.isLogged(context);
  }
}
