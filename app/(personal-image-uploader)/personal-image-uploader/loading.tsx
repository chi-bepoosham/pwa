'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from '@heroui/react';

interface LoadingBodyTypeProps {
    // TODO: add type for userInfo
    userInfo: unknown;
}

const LoadingBodyType: React.FC<LoadingBodyTypeProps> = () => {

    // const { userInfo } = props


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
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <div className='font-bold text-base'>در حال بارگذاری</div>
                        </ModalHeader>
                        <ModalBody>
                            <Spinner size="md" color="primary" />
                            <div className='text-sm text-center text-gray-500'>لطفا صبر کنید</div>
                        </ModalBody>
                        <ModalFooter/>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}


export default LoadingBodyType