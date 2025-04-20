import { Logo } from '@/stories/Logo';
import { Banner } from '@/stories/Banner';


export default function Home() {
<<<<<<< HEAD
    return (
        <div className="flex flex-col justify-center items-center w-full  bg-primary h-screen gap-6">
            <Logo
                withLogoType={true}
            />
            <Banner
                withStar={true}
                textColor="text-white/50"
                starColor="text-white"
            />
        </div>
=======
>>>>>>> bug_fixed


  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-6">
      <Logo
        withLogoType={true}
      />
      <Banner
        withStar={true}
        textColor="text-white/50"
        starColor="text-white"
      />
    </div>

  );
};
