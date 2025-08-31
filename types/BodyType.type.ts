import { CelebrityType } from './CelebrityType.type';
import { ClothType } from './ClothType.type';

export interface BodyTypeType {
  id: number;
  title: string;
  gender: 1 | 2;
  predict_value: string;
  created_at: number | null;
  updated_at: number | null;
}

export interface BodyTypeResponseType {
  object: {
    body_type: BodyTypeType & {
      celebrities: CelebrityType[];
      clothes: ClothType[];
    };
  };
}
