import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { Movie } from "src/movies/schema/movie.schema";
import { UserRole } from "../enum/roles.enum";

export type FavouriteDocument = favourite & Document;

@Schema()
export class favourite {
    @Prop()
    name: string;

    @Prop()
    factor: string;

    // [UserRole.Free, UserRole.VIP]
    // ['FREE', 'VIP']
    @Prop()
    membership: [UserRole.Free, UserRole.VIP];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' })
    movie: Movie;
}

export const FavouriteSchema = SchemaFactory.createForClass(favourite);