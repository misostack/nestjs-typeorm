import { HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from './guards';

@ApiResponse({
  description: 'Bad Request Error',
  status: HttpStatus.BAD_REQUEST,
})
@ApiResponse({
  description: 'Unprocessable Entity Error',
  status: HttpStatus.UNPROCESSABLE_ENTITY,
})
@ApiResponse({
  description: 'Internal Server Error',
  status: HttpStatus.INTERNAL_SERVER_ERROR,
})
@ApiResponse({
  description: 'Unauthorized Error',
  status: HttpStatus.UNAUTHORIZED,
})
@ApiResponse({
  description: 'Forbidden Error',
  status: HttpStatus.FORBIDDEN,
})
export class PublicController {}

@UseGuards(AuthGuard)
@ApiBearerAuth()
export class PrivateController extends PublicController {}
