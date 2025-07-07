export interface MyClothesType {
  id: number;
  image: string;
  match_percentage: number | null;
  clothes_type: 1 | 2 | 3 | null;
  process_status: number;
  created_at: number;
  updated_at: number;
  user_id: number;
  title: string;
  deleted_at: number | null;
  error_clothes: string | null;
  sets: MyClothesType[];
};

export interface MyClothesResponseType {
  object: {
    data: MyClothesType[];
    current_page: number;
    per_page: number;
    total: number;
  }
}




