import { CelebrityType } from '@/types/CelebrityType.type';
import { Meta, StoryObj } from '@storybook/react';
import { SwiperCarousel } from './SwiperCarousel';

const meta: Meta<typeof SwiperCarousel> = {
  title: 'Components/SwiperCarousel',
  component: SwiperCarousel,
};

export default meta;

type Story = StoryObj<typeof SwiperCarousel>;

const sampleCelebrities: CelebrityType[] = [
  { id: 1, title: 'صالح', image: '/124.jpeg', body_type_id: 1 },
  { id: 2, title: 'ایلیا', image: '/125.jpeg', body_type_id: 1 },
  { id: 3, title: 'سامان', image: '/126.jpeg', body_type_id: 2 },
  { id: 4, title: 'مهدی', image: '/127.jpeg', body_type_id: 3 },
  { id: 5, title: 'نرگس', image: '/128.jpeg', body_type_id: 2 },
];

export const Default: Story = {
  args: {
    celebrities: sampleCelebrities,
  },
};
