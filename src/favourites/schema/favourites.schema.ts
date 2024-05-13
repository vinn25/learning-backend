import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { Movie } from "src/movies/schema/movie.schema";

export type FavouriteDocument = favourite & Document;

@Schema()
export class favourite {
    @Prop()
    name: string;

    @Prop()
    factor: string;

    @Prop()
    membership: 'FREE' | 'VIP';

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' })
    movie: Movie;
}

export const FavouriteSchema = SchemaFactory.createForClass(favourite);