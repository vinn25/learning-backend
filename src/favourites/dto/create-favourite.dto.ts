import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateMovieDto } from "src/movies/dto/create-movie.dto";

export class CreateFavouriteDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    factor: string;

    @IsEnum(["FREE", "VIP"], {
        message: 'Membership Required'
    })
    membership: "FREE" | "VIP";

    @ValidateNested()
    @Type(() => CreateMovieDto)
    movie: CreateMovieDto;
}