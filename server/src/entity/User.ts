import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import {
  IsEmail,
  IsFQDN,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  validateOrReject,
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

  @Column({ length: 20 })
  @MinLength(3)
  @MaxLength(20)
  @IsString()
  nickname: string;

  @Column()
  @IsString()
  firstName: string;

  @Column()
  @IsString()
  lastName: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsFQDN()
  avatar?: string;

  @CreateDateColumn()
  created_at: string;

  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }
}
