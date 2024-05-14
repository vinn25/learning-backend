import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateMovieDto } from "src/movies/dto/create-movie.dto";
import { UserRole } from "../enum/roles.enum";

export class CreateFavouriteDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    factor: string;

    // ['FREE', 'VIP']
    @IsEnum([UserRole.Free, UserRole.VIP], {
        message: 'Membership Required'
    })
    membership: UserRole.Free | UserRole.VIP;

    @ValidateNested()
    @Type(() => CreateMovieDto)
    movie: CreateMovieDto;
}