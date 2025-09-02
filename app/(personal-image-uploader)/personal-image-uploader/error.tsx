'use client';

import {
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react';
import { useState } from 'react';

interface ErrorBodyTypeProps {
  // TODO: add type for userInfo
  userInfo: unknown;
}

const ErrorBodyType: React.FC<ErrorBodyTypeProps> = (props) => {
  const { userInfo } = props;

  // const router = useRouter();

  if (!userInfo || !(userInfo as any).error_body_image) {
    return null;
  }

  const error = JSON.parse((userInfo as any).error_body_image);

  let code,
    message,
    detail = '';

  switch (error.code) {
    case 'IMAGE_DOWNLOAD_FAILED':
      code = 'خطای بارگیری تصویر';
      message = 'تصویر آپلود شده بارگیری نشد';
      break;
    case 'HUMAN_VALIDATION_ERROR':
      code = 'عدم تشخیص انسان';
      message =
        'متاسفانه تصویر ارسالی قابل شناسایی نیست لطفا مشکلات زیر را در تصویر حل کرده و مجددا تلاش کنید';
      detail = error.human_validation_errors.join('|');
      break;
    default:
      code = error.code;
      message = error.message;
      break;
  }

  const [isOpen, setIsOpen] = useState(true);
  const onOpenChange = () => {
    setIsOpen((v) => !v);
  };

  return (
    <Modal
      backdrop="blur"
      isDismissable={true}
      hideCloseButton={false}
      isKeyboardDismissDisabled={false}
      placement="bottom"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div className="font-bold text-base">در حال بارگذاری</div>
            </ModalHeader>
            <ModalBody>
              <Alert
                title="خطایی رخ داد!"
                description={
                  <div className="flex flex-col gap-1 mt-4">
                    <div className="flex gap-1">
                      <span>کد خطا:</span>
                      <span>{code}</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="text-justify">{message}</span>
                    </div>
                    {detail && (
                      <ul className="flex flex-col gap-1">
                        {detail.split('|').map((v, idx) => {
                          return (
                            <li key={idx} className='before:content-["-"] before:me-2'>
                              {v}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                }
                classNames={{
                  title: 'font-bold text-base',
                }}
                color="danger"
                variant="faded"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={onClose}>
                ارسال مجدد
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ErrorBodyType;
