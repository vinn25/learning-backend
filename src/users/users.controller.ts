import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import mongoose from 'mongoose';

@Controller('newusers')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers()
    }

    // ParseIntPipe, used for transforming data
    @Get(':id')
    async getUser(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Favourite Not Found', 404);

        const findUser = await this.userService.getUser(id);
        if (!findUser) throw new HttpException('Favourite Not Found', 404);
        return findUser;
    }

    // ValidationPipe, is used for validating the datas that are coming in
    // by using the validations from class-validator in dto files
    @Post()
    createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.userService.createUser(createUserDto)
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Favourite Not Found', 404);

        const update = this.userService.updateUser(id, updateUserDto);
        return update;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const delFav = await this.userService.deleteUser(id);
        return delFav;
    }
}
