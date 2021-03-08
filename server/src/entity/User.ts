import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  Unique,
} from "typeorm";
import { IsEmail, IsNotEmpty } from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
