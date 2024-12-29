export class CreateUserDto {
  readonly role: string;
  readonly btcAddress: string;
  readonly mvcAddress: string;
  readonly publicKey: string;
  readonly domainName?: string;
  readonly createTime: Date;
  readonly updateTime: Date;
}
