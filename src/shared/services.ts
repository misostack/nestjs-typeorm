import { ExecutionContext, Provider } from '@nestjs/common';
import { AuthService } from '../user/services/auth.service';

export enum ServiceInjectionKey {
  AuthService = 'AUTH_SERVICE',
}

export const SHARED_SERVICES: Array<Provider> = [
  {
    provide: ServiceInjectionKey.AuthService,
    useClass: AuthService,
  },
];

export interface AuthServiceInterface {
  isLogged(context: ExecutionContext): Promise<boolean>;
}
