import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from 'src/dto';

@Injectable()
export class UserManageService {
  constructor(@Inject('USERS_MANAGE') private TCPClient: ClientProxy) {}
  createUser(createUser: CreateUserDto) {
    const pattern = { cmd: 'create_user' };
    console.log('Firing createUser()');
    return this.TCPClient.send(pattern, createUser);
  }

  findAll() {
    const pattern = { cmd: 'getAll_users' };
    console.log('Firing findAll()');
    return this.TCPClient.send(pattern, '');
  }

  findOne(id: number) {
    const pattern = { cmd: 'getOne_user' };
    console.log('Firing findOne()');
    return this.TCPClient.send(pattern, id);
  }

  update(id: number, updateUser: CreateUserDto) {
    const pattern = { cmd: 'update_user' };
    console.log('Firing update()');
    const payload = {
      id,
      updateUser,
    };
    return this.TCPClient.send(pattern, payload);
  }

  remove(id: number) {
    const pattern = { cmd: 'delete_user' };
    return this.TCPClient.send(pattern, id);
  }
}
