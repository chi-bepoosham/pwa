import { UserType } from '@/types/UserType.type';
import { Meta, StoryObj } from '@storybook/react';
import ProfileForm from './ProfileInfoForm';

const meta: Meta<typeof ProfileForm> = {
  title: 'Pages/Profile/ProfileForm',
  component: ProfileForm,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProfileForm>;

const mockUser: UserType = {
  id: 1,
  first_name: 'تست',
  last_name: 'تست',
  email: 'test@example.com',
  mobile: '09123456789',
  gender: 1,
  body_image: null,
  created_at: null,
  updated_at: null,
  birthday: null,
  status: 1,
  process_body_image_status: 2,
  deleted_at: null,
  email_verified_at: null,
  avatar: null,
  error_body_image: null,
  body_type_id: 0,
  body_type: null,
};

export const Default: Story = {
  args: {
    userInfo: mockUser,
  },
};
