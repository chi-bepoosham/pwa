import { HintSlider } from './HintSlider';


export default {
  title: 'HintSlider',
  component: HintSlider,
};

export const Default = {
  args: {
    withStar: true,
    textColor: 'white',
    starColor: 'white',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};