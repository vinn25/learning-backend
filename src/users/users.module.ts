import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NewUser, UserSchema } from './schema/user.schema';
import { FavouriteSchema, favourite } from 'src/favourites/schema/favourites.schema';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                { name: NewUser.name, schema: UserSchema },
                { name: favourite.name, schema: FavouriteSchema }
            ]
        )
    ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule { }
