import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
    @Prop()
    title: string;

    @Prop()
    year: number;

    @Prop()
    genre: string;

    @Prop()
    rated: 'G' | 'PG' | 'PG-13' | 'R' | 'N-17'
}

export const MovieSchema = SchemaFactory.createForClass(Movie);