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
    default:
      'An open-source middleware & services for social sites based on MetaID. Devs can deploy a decentralized web3 social app in 20 mins via config file mods. MetaSo network is DAO-initiated & -operated. ',
  })
  introduction: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
