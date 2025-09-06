import { BodyTypeType } from './BodyType.type';

export type UserType = {
  id: number;
  first_name: string;
  last_name: string;
  mobile: string;
  birthday: string | null;
  email: string | null;
  email_verified_at: string | null;
  avatar: string | null;
  body_image: string | null;
  body_type: BodyTypeType | null;
  body_type_id: number;
  gender: number;
  status: number;
  process_body_image_status: number;
  created_at: number | null;
  updated_at: number | null;
  deleted_at: number | null;
  error_body_image: string | null;
};
