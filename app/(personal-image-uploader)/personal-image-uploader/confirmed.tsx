'use client';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react';
import { CheckCircle } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

interface ConfirmedBodyTypeProps {
    // TODO: add type for userInfo
    
    userInfo: unknown;
}

const ConfirmedBodyType: React.FC<ConfirmedBodyTypeProps> = () => {

    // const { userInfo } = props


    const router = useRouter()
    const goToMainPage = () => {
        router.push('/home')
    }


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
                            <div className='font-bold text-base'>تصویر شما با موفقیت ثبت شد</div>
                        </ModalHeader>
                        <ModalBody>
                            <div className='flex flex-col items-center gap-2'>
                                <CheckCircle className='text-green-500' fontSize='large'/>
                            </div>
                            <div className='text-lg font-bold text-center text-green-500'>تصویر شما با موفقیت ثبت شد</div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onPress={goToMainPage}>
                                بزن بریم
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}


export default ConfirmedBodyType