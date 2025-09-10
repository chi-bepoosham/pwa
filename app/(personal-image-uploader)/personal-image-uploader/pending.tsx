'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Progress } from '@heroui/react';

// interface PendingBodyTypeProps {
//   userInfo: UserType;
// }

function PendingBodyType() {
  return (
    <Modal
      backdrop="blur"
      isDismissable={false}
      hideCloseButton={true}
      isKeyboardDismissDisabled={true}
      placement="bottom"
      isOpen={true}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div className="font-bold text-base">در حال پردازش</div>
            </ModalHeader>
            <ModalBody>
              <Progress isIndeterminate aria-label="Loading..." size="md" />
              <div className="text-sm text-center text-gray-500">
                در حال پردازش تصویر هستیم. لطفا صبر کنید
              </div>
            </ModalBody>
            <ModalFooter />
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default PendingBodyType;
