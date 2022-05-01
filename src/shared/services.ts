import { ExecutionContext, Provider } from '@nestjs/common';
import {
  ClassConstructor,
  instanceToInstance,
  instanceToPlain,
  plainToInstance,
} from 'class-transformer';
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

export abstract class BaseService {
  entityToModel<E, M>(entity: E, modelClass: ClassConstructor<M>): M {
    return plainToInstance(modelClass, instanceToPlain(entity), {
      strategy: 'excludeAll',
    });
  }
}
