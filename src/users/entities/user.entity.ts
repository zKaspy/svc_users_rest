import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty({ required: false })
  id: number;

  @ApiProperty({ description: 'Имя' })
  name: string;

  @ApiProperty({ description: 'Возраст' })
  age: number;

  @ApiProperty({ type: 'string', format: 'binary' })
  imagesUrl: string;
}
