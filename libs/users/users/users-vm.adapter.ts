import { UsersEntity } from "libs/users/users/data-access/src";
import { UsersVM } from "./users-vm";

type UsersVMAdapter = {
  entityToVM(entity: UsersEntity): UsersVM

};

export const usersVMAdapter: UsersVMAdapter = {
  entityToVM({ id, name, username, email }) {
    return { id, name, username, email };
  }
};

