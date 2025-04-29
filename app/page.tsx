"use client";
import { Logo } from '@/stories/Logo';
import { Banner } from '@/stories/Banner';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /home after 2 seconds
    const timeout = setTimeout(() => {
      router.push('/home');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center w-full bg-primary h-screen gap-6">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Logo
          withLogoType={true}
        />
      </motion.div>
      <Banner
        withStar={true}
        textColor="text-white/50"
        starColor="text-white"
      />
    </div>
  );
}
