import { DeepReadonly } from "libs/core/utils/src";
import { UsersEntity } from "libs/users/users/data-access/src";

export type UsersVM = DeepReadonly<Pick<UsersEntity, "id" | "name" | "username" | "email">>