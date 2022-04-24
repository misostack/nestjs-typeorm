import { ExecutionContext } from '@nestjs/common';
import { AuthService } from '../user/services/auth.service';

export const SHARED_SERVICES = [AuthService];

export interface AuthServiceInterface {
  isLogged(context: ExecutionContext): Promise<boolean>;
}
