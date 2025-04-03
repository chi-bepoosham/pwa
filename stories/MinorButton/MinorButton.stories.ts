import { MinorButton } from './MinorButton';


export default {
  title: 'MinorButton',
  component: MinorButton,
};

export const Default = {
  args: {
    buttonTitle: '',
    size: "sm",
    variant: 'solid',
    radius: "md",
    isLoading: false,
    color: 'success',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};