import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

// PartialType, is used for not wanting to require all the data
export class UpdateUserDto extends PartialType(CreateUserDto) { }