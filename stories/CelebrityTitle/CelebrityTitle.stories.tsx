import { Meta, StoryObj } from '@storybook/react';
import { CelebrityTitle } from './CelebrityTitle';

const meta: Meta<typeof CelebrityTitle> = {
  title: 'Components/CelebrityTitle',
  component: CelebrityTitle,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CelebrityTitle>;

export const Default: Story = {
  args: {
    title: 'Jennifer Lopez',
  },
};

export const LongName: Story = {
  args: {
    title: 'Christopher Alexander Johnson',
  },
};

export const Empty: Story = {
  args: {
    title: '',
  },
};
