import { DeepReadonly } from "@users/core/utils";

export type UsersDTO = DeepReadonly<{
  id: number;
  created_at?: number;
  name: string
  email: string
  username: string;
  city: string
}>
