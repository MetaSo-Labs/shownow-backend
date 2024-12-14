import { PartialType } from '@nestjs/mapped-types';
import { CreateShowConfDto } from './create-show-conf.dto';

export class UpdateShowConfDto extends PartialType(CreateShowConfDto) {}
