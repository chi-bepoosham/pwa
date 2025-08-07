"use client";

import { AccountName } from "@/stories/AccountName";
import { Uploader } from "@/stories/Uploader";




interface ProfileInfoProps {
    matchPercent?: number;
}





const ProfileInfo: React.FC<ProfileInfoProps> = () => {
    return(
        <div className="flex flex-col w-full justify-center gap-20 overflow-x-hidden scrollbar-hide py-16">
            <div className="flex flex-col justify-center gap-5">
                <Uploader
                size="x-large"
                />
                <div className="flex flex-col justify-center gap-2">
                    <AccountName/>
                    
                </div>
            </div>
            
        </div>
    )
}






export default ProfileInfo;
