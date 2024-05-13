import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { favourite } from "src/favourites/schema/favourites.schema";

export type UserDocument = NewUser & Document;

@Schema()
export class NewUser {
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'favourite' })
    favourite: favourite;
}

export const UserSchema = SchemaFactory.createForClass(NewUser);