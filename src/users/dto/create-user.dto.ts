import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Имя', default: 'Иван Иванов' })
  name: string;

  @ApiProperty({ description: 'Возраст', default: '14' })
  age: number;

  @ApiProperty({
    default:
      'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png',
  })
  imagesUrl: string;
}
