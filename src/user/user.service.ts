import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  private readonly logger: Logger = new Logger(UserService.name);

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { uuid } = await this.userRepository.save(createUserDto);
      return await this.findOne(uuid);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  async findAll() {
    return `This action returns all user`;
  }

  async findOne(uuid: string): Promise<User> {
    this.logger.debug(`This action returns a #${uuid} user`);
    try {
      return this.userRepository.findOne(uuid);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  async update(uuid: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${uuid} user`;
  }

  async remove(uuid: string) {
    return `This action removes a #${uuid} user`;
  }
}
