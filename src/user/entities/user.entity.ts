import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    default: true,
  })
  is_ambassador: boolean;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @DeleteDateColumn({
    type: 'timestamp',
  })
  deleted_at: Date;
}
