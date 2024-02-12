import { UsersDTO } from "./users-dto.model";
import { UsersEntity } from "./+state/users.models";

type UsersDTOAdapter = {
  DTOtoEntity(dto: UsersDTO): UsersEntity;
  entityToDTO(dto: UsersEntity): UsersDTO;
};

export const usersDtoAdapter: UsersDTOAdapter = {
  DTOtoEntity(dto) {
    const { created_at, ...otherAddressFields } = dto;
    return {
      ...otherAddressFields
    };
  },

  entityToDTO(entity) {
    return {
      ...entity
    };
  }
};
