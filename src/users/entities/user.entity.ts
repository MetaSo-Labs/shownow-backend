import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'admin' })
  role: string;

  @Column({ default: '' })
  btcAddress: string;

  @Column({ default: '' })
  mvcAddress: string;

  @Column({ default: '' })
  publicKey: string;

  @Column({ default: '' })
  domainName: string;

  @Column({ default: '' })
  host: string;

  @Column({
    default: false,
  })
  distribution: boolean;

  @Column({
    default: false,
  })
  assist: boolean;

  @Column({
    default: 'The site administrator has not provided an introduction yet. ',
  })
  introduction: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
