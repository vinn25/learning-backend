import { Body, Injectable, NotFoundException, Param, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewUser } from './schema/user.schema';
import { favourite } from 'src/favourites/schema/favourites.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(NewUser.name) private userModel: Model<NewUser>,
        @InjectModel(favourite.name) private favouriteModel: Model<favourite>) { }

    // Get all the users
    getAllUsers() {
        return this.userModel.find().populate('favourite');
    }

    // Get a user specified by id
    getUser(id: string) {
        return this.userModel.findById(id).populate('favourite');
    }

    // Create a new user
    async createUser({ favourite, ...createUserDto }: CreateUserDto) {
        if (favourite) {
            const newFavourite = new this.favouriteModel(favourite);
            const createNewFavourite = await newFavourite.save();
            const newUser = new this.userModel({
                ...createUserDto,
                favourite: createNewFavourite._id,
            });
            return (await newUser.save()).populate('favourite');
        }

        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        const update = this.userModel.findByIdAndUpdate(id, updateUserDto);
        return update;
    }

    deleteUser(id: string) {
        const del = this.userModel.findByIdAndDelete(id);
        return del;
    }
}
