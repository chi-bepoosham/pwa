'use client';

import { Alert, Modal, ModalBody, ModalContent } from '@heroui/react';

interface props {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

function ClotheStatusErrorModal({ message, isOpen, onClose }: props) {
  return (
    <Modal
      backdrop="blur"
      isDismissable={true}
      isKeyboardDismissDisabled={false}
      placement="center"
      isOpen={isOpen}
      onClose={onClose}
      className="bg-danger-100 border border-danger-600 "
    >
      <ModalContent>
        {() => (
          <>
            <ModalBody className="mt-4">
              <Alert
                title="خطایی رخ داد!"
                description={
                  <div className="flex flex-col gap-1 mt-4">
                    <div className="flex gap-1">
                      <span className="text-justify">{message}</span>
                    </div>
                  </div>
                }
                classNames={{
                  title: 'font-bold text-base',
                  base: 'bg-transparent border-0',
                }}
                color="danger"
                variant="faded"
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ClotheStatusErrorModal;
