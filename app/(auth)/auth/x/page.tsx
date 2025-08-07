"use client";
import { CometStarVector } from '@/stories/Vectors';
import ProfileInfo from './profile-info';


export default function Home() {
    return(
        <div className='flex flex-col justify-between w-full h-screen gap-10 overflow-x-hidden scrollbar-hide'>
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
            <h3 className="text-secondary-300">مـرحـلۀ دوم</h3>
            </div>
            <ProfileInfo/>
        </div>
    )
}