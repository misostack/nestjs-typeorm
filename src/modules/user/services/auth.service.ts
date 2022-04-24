import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthServiceInterface } from 'src/modules/shared/services';

@Injectable()
export class AuthService implements AuthServiceInterface {
  async isLogged(context: ExecutionContext): Promise<boolean> {
    return false;
  }
}
