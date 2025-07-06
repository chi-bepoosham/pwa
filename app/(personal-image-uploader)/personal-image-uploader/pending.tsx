'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Progress, Spinner } from '@heroui/react';

interface PendingBodyTypeProps {
    userInfo: any;
}

const PendingBodyType: React.FC<PendingBodyTypeProps> = (props) => {

    const { userInfo } = props


    return (
        <Modal
            backdrop='blur'
            isDismissable={false}
            hideCloseButton={true}
            isKeyboardDismissDisabled={true}
            placement='bottom'
            isOpen={true}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <div className='font-bold text-base'>در حال پردازش</div>
                        </ModalHeader>
                        <ModalBody>
                            <Progress isIndeterminate aria-label="Loading..." size="md" />
                            <div className='text-sm text-center text-gray-500'>در حال پردازش تصویر هستیم. لطفا صبر کنید</div>
                        </ModalBody>
                        <ModalFooter/>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}


export default PendingBodyType