import React from 'react';
import { Avatar, Tooltip } from '@heroui/react';


interface Celebrities {
  fullName: string;
  avatar: string;
  id: number;
}


export interface CelebrityProps {
  description: string;
  number: number;
  celebrities: Celebrities[];
}


export const Celebrities = (props: CelebrityProps) => {
  const { number, description, celebrities = [] } = props;
  return (
    <div
      className="w-full max-w-screen-md grid grid-cols-2 gap-5 bg-[#68BAA6]/50 border-2 border-[#68BAA6] rounded-2xl p-4">
      <div className="col-span-1 flex flex-row-reverse pe-4">
        {celebrities.map((celebrities) => (
          <Tooltip
            key={celebrities.id}
            color="secondary"
            placement="top"
            showArrow={false}
            content={celebrities.fullName}
            delay={100}
            closeDelay={10}
          >
            <div className="w-10">
              <Avatar
                src={celebrities.avatar}
                size="lg"
              />
            </div>
          </Tooltip>
        ))}
      </div>
      <div className="col-span-1 flex flex-col justify-center text-secondary">
        <span className="text-xl font-semibold text-nowrap">
          {number}
          +
        </span>
        <span className="text-nowrap">
          {description}
        </span>
      </div>
    </div>
  );
};

// نحوه استفاده از کامپوننت Celebrities:

// import { Celebrities } from './path/to/Celebrities';

// function YourComponent() {
//   const celebritiesData = [
//     { fullName: "صالح", avatar: "/124.jpeg", id: 1 },
//     { fullName: "ایلیا", avatar: "https://i.pravatar.cc", id: 2 },
//     // ... دیگر سلبریتی‌ها
//   ];

//   return (
//     <Celebrities
//       description="سلبریتی دیگر"
//       number={4}
//       celebrities={celebritiesData}
//     />
//   );
// }

// export default YourComponent;