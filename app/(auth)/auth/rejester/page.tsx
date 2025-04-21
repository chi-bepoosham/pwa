"use client"
import React, { useState } from 'react';
import { CometStarVector } from '@/stories/Vectors';
import ProfileInfo from './profile-info';
import PersonalImage from './personal-image';

export default function Page() {
  const [pageNumber , setPageNumber] = useState<number>(1)
  return (
    <div className="flex flex-col justify-between w-full h-full gap-12 bg-white overflow-hidden">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center p-4">
          <div className="flex flex-row justify-center items-center gap-4">
            <i className="rotate-180">
              <CometStarVector />
            </i>
            <h2 className="text-secondary font-semibold">ثــــبت‌نــــام</h2>
            <i>
              <CometStarVector />
            </i>
          </div>
          <h3 className="text-secondary-300">مـرحـلۀ {pageNumber === 0 ? "اول" : "دوم"}</h3>
        </div>
      </div>
      {pageNumber === 0 ? <ProfileInfo /> :  <PersonalImage />}

    </div>
  );
}
