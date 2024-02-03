import { UsersDTO } from './users-dto.model';
import { UsersEntity } from './+state/users.models';

type UsersDTOAdapter = {
  DTOtoEntity(dto: UsersDTO): UsersEntity;
  entityToDTO(dto: UsersEntity): UsersDTO;
};

export const usersDtoAdapter: UsersDTOAdapter = {
  DTOtoEntity(dto) {
    const { geo, ...otherAddressFields } = dto.address;
    return {
      ...dto,
      address: {
        ...otherAddressFields,
      },
    };
  },

  entityToDTO(entity) {
    return {
      ...entity,
      address: {
        ...entity.address,
        geo: { lat: '', lng: '' },
      },
    };
  },
};
