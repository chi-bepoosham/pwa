'use client';

import { UserType } from '@/types/UserType.type';
import { Modal, ModalBody, ModalContent } from '@heroui/react';
import Image from 'next/image';
import { StarIcon } from '../Icons';
import { RectangleOnBodyImageVector } from '../Vectors';

interface BodyTypeImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  userInfo: UserType;
}

function BodyTypeImageModal({ userInfo, isOpen, onClose }: BodyTypeImageModalProps) {
  return (
    <Modal
      backdrop="blur"
      isDismissable={false}
      hideCloseButton={false}
      isKeyboardDismissDisabled={true}
      placement="center"
      size='sm'
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        {() => (
          <ModalBody>
            {userInfo && (
              <div className="text-lg font-semibold text-center flex justify-center flex-col items-center gap-2 py-12">
                <div className="border-2 border-primary-100 p-4 rounded-3xl bg-primary-50">
                  <div className="p-4 relative">
                    <div
                      className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-primary-50 via-primary to-primary-50 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                      style={{
                        WebkitMaskImage:
                          'repeating-linear-gradient(90deg, #000 0 12px, transparent 12px 24px)',
                        maskImage:
                          'repeating-linear-gradient(90deg, #000 0 12px, transparent 12px 24px)',
                      }}
                    ></div>
                    <div
                      className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-primary-50 via-primary to-primary-50 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                      style={{
                        WebkitMaskImage:
                          'repeating-linear-gradient(90deg, #000 0 12px, transparent 12px 24px)',
                        maskImage:
                          'repeating-linear-gradient(90deg, #000 0 12px, transparent 12px 24px)',
                      }}
                    ></div>
                    <div
                      className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary-50 via-primary to-primary-50"
                      style={{
                        WebkitMaskImage:
                          'repeating-linear-gradient(0deg, #000 0 12px, transparent 12px 24px)',
                        maskImage:
                          'repeating-linear-gradient(0deg, #000 0 12px, transparent 12px 24px)',
                      }}
                    ></div>
                    <div
                      className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary-50 via-primary to-primary-50"
                      style={{
                        WebkitMaskImage:
                          'repeating-linear-gradient(0deg, #000 0 12px, transparent 12px 24px)',
                        maskImage:
                          'repeating-linear-gradient(0deg, #000 0 12px, transparent 12px 24px)',
                      }}
                    ></div>

                    <div className="absolute border-t-2 border-r-2 w-10 h-10 border-black rounded-tr-3xl top-0 right-0 z-20"></div>
                    <div className="absolute border-t-2 border-l-2 w-10 h-10 border-black rounded-tl-3xl top-0 left-0 z-20"></div>
                    <div className="absolute border-b-2 border-r-2 w-10 h-10 border-black rounded-br-3xl bottom-0 right-0 z-20"></div>
                    <div className="absolute border-b-2 border-l-2 w-10 h-10 border-black rounded-bl-3xl bottom-0 left-0 z-20"></div>

                    <div className="text-center h-80 w-52 rounded-3xl overflow-hidden relative">
                      <Image
                        src={'https://core.chibepoosham.app/' + userInfo.body_image}
                        width={128}
                        height={128}
                        priority
                        alt="Body image"
                        unoptimized
                        quality={100}
                        className="w-full h-full object-cover z-10 "
                      />
                      <div className="absolute z-20 top-0 left-1/2 -translate-x-1/2 w-full p-4">
                        <RectangleOnBodyImageVector />
                      </div>
                      <div className="absolute bottom-0 right-0 w-full z-30 p-1.5">
                        <div className="flex flex-col gap-2 w-full bg-black/60 backdrop-blur-sm rounded-b-2xl rounded-t-3xl p-4 text-white text-xs">
                          <div className="flex items-center w-full justify-center gap-2">
                            <StarIcon size={12} />
                            <span>فــــرم بـــــدن شـــــما</span>
                            <StarIcon size={12} />
                          </div>
                          <div>
                            <span className="font-light">{userInfo.body_type?.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}

export default BodyTypeImageModal;
