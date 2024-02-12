/**
 * Interface for the 'Users' data
 */
import { UsersDTO } from "../users-dto.model";

export type UsersEntity = Omit<UsersDTO, "created_at">
export type EditUserDTO = Omit<UsersDTO, "created_at">
export type CreateUserDTO = Omit<UsersDTO, "created_at">


