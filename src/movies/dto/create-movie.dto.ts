import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    year: string;

    @IsString()
    @IsNotEmpty()
    genre: string;

    @IsEnum(['G', 'PG', 'PG-13', 'R', 'N-17'],
        { message: 'Not Standard Movie Rating' }
    )
    rated: 'G' | 'PG' | 'PG-13' | 'R' | 'N-17'
}   