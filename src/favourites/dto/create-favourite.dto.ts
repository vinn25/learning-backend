import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateFavouriteDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    fmovie: string;

    @IsNotEmpty()
    factor: string;

    @IsEnum(["FREE", "VIP"], {
        message: 'Membership Required'
    })
    membership: "FREE" | "VIP";
}