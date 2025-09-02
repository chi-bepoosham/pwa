'use client';
import gif from '@/public/static/images/emojyGif.gif';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react';
import Image from 'next/image';

interface DeleteClothesModalProps {
  userName: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function DeleteClothesModal({ isOpen, onClose, onConfirm, userName }: DeleteClothesModalProps) {
  return (
    <Modal
      backdrop="blur"
      isDismissable={false}
      hideCloseButton={true}
      isKeyboardDismissDisabled={true}
      placement="center"
      className="border border-black relative overflow-visible rounded-3xl"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        {() => (
          <>
            <ModalBody className="p-2">
              {/* <div className="flex flex-col items-center gap-2 absolute"> */}
              <div className="absolute p-4 top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 z-10">
                <div className="relative mt-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-24 h-24 bg-white/20 backdrop-blur-lg border-2 border-white rounded-[2rem]"></div>
                  <Image
                    src={gif}
                    width={128}
                    height={128}
                    alt="emojy gif"
                    className="w-24 h-24 object-contain z-10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  />
                </div>
              </div>
              {/* </div> */}
              <div className="mt-16 text-lg font-semibold text-center flex justify-center flex-col items-center gap-2">
                <div>{userName} عزیز...</div>
                <div className="text-center">
                  مطمئنــــی میخــــوای تصویـــر لباســــــت حـــــذف بشــــه؟
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-between gap-4">
              <Button color="default" onPress={onConfirm} size="lg" className="w-full">
                آره بابا. حذف بشه
              </Button>
              <Button color="secondary" onPress={onClose} size="lg" className="w-full">
                نه! بیخیال
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default DeleteClothesModal;
