import { SacramentoLocal } from '@/lib/font';
import { EmailIcon, InstagramIcon, TelegramIcon } from '@/stories/Icons';
import { Button } from '@heroui/react';
import React from 'react';

export const Social = () => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-between w-full max-w-screen-sm">
      {/* Telegram */}
      <a
        href="https://t.me/ilyanozary"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-1"
      >
        <Button
          as="div"
          variant="bordered"
          className="w-full h-24 p-2 flex flex-col items-center justify-around border-1 border-primary rounded-3xl bg-primary-50 hover:bg-primary hover:text-white transition duration-300"
        >
          <i>
            <TelegramIcon size={28} />
          </i>
          <span className={`text-xl ${SacramentoLocal.className}`}>Telegram</span>
        </Button>
      </a>

      {/* Email */}
      <a href="mailto:chibepoosham.app@gmail.com" className="col-span-1">
        <Button
          as="div"
          variant="bordered"
          className="w-full h-24 p-2 flex flex-col items-center justify-around border-1 border-primary rounded-3xl bg-primary-50 hover:bg-primary hover:text-white transition duration-300"
        >
          <i>
            <EmailIcon size={28} />
          </i>
          <span className={`text-xl ${SacramentoLocal.className}`}>Email</span>
        </Button>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/chibepoosham.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-1"
      >
        <Button
          as="div"
          variant="bordered"
          className="w-full h-24 p-2 flex flex-col items-center justify-around border-1 border-primary rounded-3xl bg-primary-50 hover:bg-primary hover:text-white transition duration-300"
        >
          <i>
            <InstagramIcon size={28} />
          </i>
          <span className={`text-xl ${SacramentoLocal.className}`}>Instagram</span>
        </Button>
      </a>
    </div>
  );
};
