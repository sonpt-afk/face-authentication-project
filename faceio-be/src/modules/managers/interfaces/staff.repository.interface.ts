import { Staff } from './../schema/staff.schema';
import { BaseInterfaceRepository } from 'src/base/mongo/base.interface.repository';

export type StaffRepositoryInterface = BaseInterfaceRepository<Staff>;
