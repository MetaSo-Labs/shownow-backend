import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Fee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: '',
  })
  chain: string;

  @Column({
    default: '',
  })
  service_fee_address: string;

  @Column({ default: 0 })
  follow_service_fee_amount: number;

  @Column({ default: 0 })
  post_service_fee_amount: number;

  @Column({ default: 0 })
  comment_service_fee_amount: number;

  @Column({ default: 0 })
  like_service_fee_amount: number;

  @Column({ default: 0 })
  donate_service_fee_amount: number;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
