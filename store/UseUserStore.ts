import { create } from 'zustand';

interface UserInfo {
  phone_number: string;
  is_login: boolean;
  has_rejester: boolean;
  api_key: string;
}

interface StoreState {
  userInfo: UserInfo;
  setUserInfo: (name: keyof UserInfo, value: string | boolean) => void;
}

export const useUserStore = create<StoreState>((set) => ({
  userInfo: {
    phone_number: '',
    is_login: false,
    has_rejester: false,
    api_key: '',
  },
  setUserInfo: (name, value) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        [name]: value,
      },
    })),
}));
