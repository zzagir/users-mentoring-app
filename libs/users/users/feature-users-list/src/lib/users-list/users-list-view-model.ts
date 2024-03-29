import { UsersVM } from "../../../../users-vm";
import { DeepReadonly } from "@users/core/utils";
import { UsersStatus } from "@users/users/users/data-access";

export type UsersListVM = DeepReadonly<{
  users: UsersVM[],
  status: UsersStatus
}>
