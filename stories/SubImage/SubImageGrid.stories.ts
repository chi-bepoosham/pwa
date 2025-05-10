import type { Meta, StoryObj } from '@storybook/react';
import { SubImageGrid } from './SubImageGrid';

const meta: Meta<typeof SubImageGrid> = {
    title: 'Components/SubImageGrid',
    component: SubImageGrid,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof SubImageGrid>;

export const Default: Story = {
    args: {
        images: [
            { url: '/path/to/image1.jpg', percentNumber: 85 },
            { url: '/path/to/image2.jpg', percentNumber: 75 },
            { url: '/path/to/image3.jpg', percentNumber: 90 },
            { url: '/path/to/image4.jpg', percentNumber: 80 },
            { url: '/path/to/image5.jpg', percentNumber: 95 },
        ],
    },
};