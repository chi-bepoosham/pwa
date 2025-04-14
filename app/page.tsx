import {Logo} from "@/stories/Logo";
import {Banner} from "@/stories/Banner";
import {MinorButton} from '@/stories/MinorButton';

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen gap-6">
            {/*<Logo*/}
            {/*    withLogoType={true}*/}
            {/*/>*/}
            {/*<Banner*/}
            {/*    withStar={true}*/}
            {/*    textColor="text-white/50"*/}
            {/*    starColor="text-white"*/}
            {/*/>*/}

          <MinorButton
            className="w-full bg-secondary text-white"
            buttonTitle="ورود"
            variant="ghost"
          />



        </div>

    );
}
