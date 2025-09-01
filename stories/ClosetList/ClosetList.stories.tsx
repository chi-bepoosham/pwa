import { Meta, StoryObj } from '@storybook/react';
import ClosetList from './ClosetList';
import { MyClothesResponseType } from '@/types/MyClothesResponse.type';

const sampleItems: MyClothesResponseType['object']['data'] = [
  {
    id: 1,
    image: 'images/item1.jpg',
    match_percentage: 75,
  },
  {
    id: 2,
    image: 'images/item2.jpg',
    match_percentage: 60,
  },
  {
    id: 3,
    image: 'images/item3.jpg',
    match_percentage: 90,
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
    })),
    total: 15,
    perPage: 5,
    page: 1,
    onPageChange: (page) => console.log('Page changed:', page),
    onDelete: (id) => console.log('Deleted item:', id),
  },
};
