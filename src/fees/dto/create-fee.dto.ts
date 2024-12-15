export class CreateFeeDto {
  readonly chain: string;
  readonly service_fee_address: string;
  readonly follow_service_fee_amount: number;
  readonly post_service_fee_amount: number;
  readonly comment_service_fee_amount: number;
  readonly like_service_fee_amount: number;
  readonly createTime: Date;
  readonly updateTime: Date;
}
