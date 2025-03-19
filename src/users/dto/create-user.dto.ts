export class CreateUserDto {
  readonly role: string;
  readonly btcAddress: string;
  readonly mvcAddress: string;
  readonly publicKey: string;
  readonly domainName?: string;
  readonly introduction?: string;
  readonly host: string;
  readonly distribution: boolean;
  readonly createTime: Date;
  readonly updateTime: Date;
}
