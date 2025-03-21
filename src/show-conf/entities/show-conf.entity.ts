import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ShowConf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: 'default',
  })
  alias: string;

  @Column({
    default: '',
  })
  name: string;

  @Column({
    default: '',
  })
  brandColor: string;

  @Column({
    default: true,
  })
  showRecommend: boolean;

  @Column({
    default: true,
  })
  showSliderMenu: boolean;

  @Column({
    default: 'light',
  })
  theme: string;

  @Column({
    default: '',
  })
  colorBgLayout: string;

  @Column({
    default: 1200,
  })
  contentSize: number;

  @Column({
    default: '#F6F9FC',
  })
  colorHeaderBg: string;

  @Column({
    default: '',
  })
  colorBorderSecondary: string;

  @Column({
    default: '#ffffff',
  })
  colorButton: string;

  @Column({
    default: '',
  })
  brandIntroMainTitle: string;

  @Column({
    default: '',
  })
  brandIntroSubTitle: string;

  @Column({
    default: '',
  })
  homeBackgroundImage: string;

  @Column({
    default: '',
  })
  gradientColor: string;

  @Column({
    default: '',
  })
  logo: string;

  @Column({
    default: '',
  })
  twitterUrl: string;
  @Column({
    default: '',
  })
  host: string;

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

  @Column({
    default: false,
  })
  apply: boolean;

  @Column({
    type: 'json',
    default: '["new","hot","following","recommend"]',
  })
  tabs: string[];

  @Column({
    default: true,
  })
  checkLogin: boolean;

  @UpdateDateColumn()
  updateTime: Date;
}
