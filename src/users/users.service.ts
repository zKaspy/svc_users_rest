import {
  Body,
  Injectable,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto.imagesUrl);
    return this.prisma.user.create({ data: createUserDto });
  }

  findOne(idx: number) {
    return this.prisma.user.findUnique({ where: { id: idx } });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(idx: number) {
    return this.prisma.user.delete({ where: { id: idx } });
  }

  addImage(id, file) {
    return this.prisma.user.update({
      where: { id },
      data: { imagesUrl: `http://localhost:3030/public/uploaded/${file}` },
    });
  }
}
