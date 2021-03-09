import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";
import {
  IsBase64,
  IsDateString,
  IsEmail,
  IsFQDN,
  IsNotEmpty,
  IsString,
} from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column({ length: 60 })
  @IsBase64()
  @IsNotEmpty()
  password: string;

  @Column()
  @IsString()
  nickname: string;

  @Column()
  @IsString()
  firstName: string;

  @Column()
  @IsString()
  lastName: string;

  @Column()
  @IsFQDN()
  avatar: string;

  @CreateDateColumn()
  @IsDateString()
  created_at: string;
}
