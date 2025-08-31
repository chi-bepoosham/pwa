export interface BodyTypeType {
  id: number;
  title: string;
  gender: 1 | 2;
  predict_value: string;
}
export interface CelebrityType {
  id: number;
  title: string;
  body_type_id: number;
  image: string;
}

interface ClothType {
  id: number;
  body_type_id: number;
  image: string;
}
export interface BodyTypeResponseType {
  object: {
    body_type: BodyTypeType & {
      celebrities: CelebrityType[];
      clothes: ClothType[];
    };
  };
}
