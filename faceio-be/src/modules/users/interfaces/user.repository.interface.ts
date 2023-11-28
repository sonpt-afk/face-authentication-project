import { BaseInterfaceRepository } from 'src/base/mongo/base.interface.repository';
import { User } from '../schema/user.schema';

export type UserRepositoryInterface = BaseInterfaceRepository<User>;
