import { MinorButton } from './MinorButton';


export default {
  title: 'MinorButton',
  component: MinorButton,
};

export const Default = {
  args: {
    buttonTitle: '',
    variant: 'solid',
    radius: "md",
    isLoading: false,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};