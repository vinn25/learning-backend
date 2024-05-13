import { Type } from "class-transformer";
import { IsEmail, IsString, IsNotEmpty, ValidateNested } from "class-validator";
import { CreateFavouriteDto } from "src/favourites/dto/create-favourite.dto";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @ValidateNested()
    @Type(() => CreateFavouriteDto)
    favourite: CreateFavouriteDto
}