import { MinorInput } from './MinorInput';


export default {
  title: 'MinorInput',
  component: MinorInput,
};

export const Default = {
  args: {
    options: [
      { label: 'تهران', value: 'tehran' },
      { label: 'اصفهان', value: 'isfahan' },
      { label: 'شیراز', value: 'shiraz' },
      { label: 'مشهد', value: 'mashhad' },
    ],

    type: "fullName",
    placeholder: "",
    label: ""
  },
parameters: {
  nextjs: {
    appDirectory: true,
  }
}
,
}
;