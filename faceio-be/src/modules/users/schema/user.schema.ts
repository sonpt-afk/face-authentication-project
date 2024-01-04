import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
@Schema()
export class User extends Document {
  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop({ default: "user" })
  position: string;

  @Prop()
  token: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  async saveWithHashedPassword(): Promise<this> {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    return this.save();
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
