import {atom} from 'recoil';

export const todosAtom = atom({
  key: "app/todosAtom",
  default: [
    {
      id:4,
      content:"독서"
    },
    {
      id:3,
      content:"명상"
    },
    {
      id:2,
      content:"운동"
    },
    {
      id:1,
      content:"요리"
    },
  ],
})