import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  facialId: string;

  @Prop()
  gender: string;

  @Prop()
  age: string;

  @Prop()
  timestamp: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
