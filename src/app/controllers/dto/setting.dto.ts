import { IsString, IsNotEmpty } from 'class-validator';

import { T_AccountType } from '@/shared/types';

export class CreateAccountBodyDTO {
	@IsString()
	@IsNotEmpty()
	type!: T_AccountType;

	@IsString()
	@IsNotEmpty()
	username!: string;

	@IsString()
	@IsNotEmpty()
	token!: string;
}
