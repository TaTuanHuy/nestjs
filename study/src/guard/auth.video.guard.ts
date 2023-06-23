import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Param,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { jwtConstants } from './constants';
import { Request } from 'express';
