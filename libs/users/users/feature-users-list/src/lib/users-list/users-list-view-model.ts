import { UsersVM } from "../users-vm";
import { DeepReadonly } from "@users/core/utils";

export type UsersListVM = DeepReadonly<{
  users: UsersVM[]
}>
