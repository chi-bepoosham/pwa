import { MyClothesType } from '@/types/MyClothesResponse.type';
import { Meta, StoryObj } from '@storybook/react';
import ClosetList from './ClosetList';

const sampleItems: MyClothesType[] = [
  {
    id: 1,
    image: 'images/item1.jpg',
    match_percentage: 85,
    clothes_type: 1,
    process_status: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
    user_id: 101,
    title: 'Blue Casual Shirt',
    deleted_at: null,
    error_clothes: null,
    sets: [
      {
        id: 11,
        user_id: 101,
        title: 'Casual Friday',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        pivot: {
          user_clothe_id: 1,
          user_set_id: 11,
        },
        clothes: [],
      },
    ],
  },
  {
    id: 2,
    image: 'images/item3.jpg',
    match_percentage: 90,
    clothes_type: 2,
    process_status: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
    user_id: 101,
    title: 'Black Slim Pants',
    deleted_at: null,
    error_clothes: null,
    sets: [
      {
        id: 12,
        user_id: 101,
        title: 'Office Outfit',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        pivot: {
          user_clothe_id: 2,
          user_set_id: 12,
        },
        clothes: [],
      },
    ],
  },
  {
    id: 3,
    image: 'images/item3.jpg',
    match_percentage: 75,
    clothes_type: 3,
    process_status: 2,
    created_at: Date.now(),
    updated_at: Date.now(),
    user_id: 101,
    title: 'Leather Jacket',
    deleted_at: null,
    error_clothes: null,
    sets: [
      {
        id: 13,
        user_id: 101,
        title: 'Night Out',
        created_at: Date.now(),
        updated_at: Date.now(),
        deleted_at: null,
        pivot: {
          user_clothe_id: 3,
          user_set_id: 13,
        },
        clothes: [],
      },
    ],
  },
];

const meta: Meta<typeof ClosetList> = {
  title: 'Components/ClosetList',
  component: ClosetList,
};

export default meta;

type Story = StoryObj<typeof ClosetList>;

export const Default: Story = {
  args: {
    items: sampleItems,
    total: sampleItems.length,
    perPage: 10,
    page: 1,
    onPageChange: (page) => console.log('Page changed:', page),
    onDelete: (id) => console.log('Deleted item:', id),
  },
};

export const Empty: Story = {
  args: {
    items: [],
    total: 0,
    perPage: 10,
    page: 1,
    onPageChange: (page) => console.log('Page changed:', page),
    onDelete: (id) => console.log('Deleted item:', id),
  },
};

export const ManyItems: Story = {
  args: {
    items: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      image: `images/item${i + 1}.jpg`,
      match_percentage: Math.floor(Math.random() * 100),
      clothes_type: ((i % 3) + 1) as 1 | 2 | 3,
      process_status: 1,
      created_at: Date.now(),
      updated_at: Date.now(),
      user_id: 101,
      title: `Item ${i + 1}`,
      deleted_at: null,
      error_clothes: null,
      sets: [],
    })),
    total: 15,
    perPage: 5,
    page: 1,
    onPageChange: (page) => console.log('Page changed:', page),
    onDelete: (id) => console.log('Deleted item:', id),
  },
};
