import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";
import {
  IsBase64,
  IsDataURI,
  IsDateString,
  IsEmail,
  IsFQDN,
  IsNotEmpty,
  IsOptional,
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
  @IsNotEmpty()
  password: string;

  @Column({ nullable: true })
  @IsString()
  nickname: string;

  @Column({ nullable: true })
  @IsString()
  firstName: string;

  @Column({ nullable: true })
  @IsString()
  lastName: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsFQDN()
  avatar: string;

  @CreateDateColumn()
  created_at: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.nickname = "";
    this.firstName = "";
    this.lastName = "";
  }
}
