import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  Button,
  useDisclosure,
} from '@heroui/react';
import { MinorButton } from '@/stories/MinorButton';
import {
  CameraIcon,
  GalleryIcon,
  RecycleIcon,
  FilesIcon,
} from '@/stories/Icons';

export interface ModalProps {

}


export const Modal = (props: ModalProps) => {
  const {} = props;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button className="capitalize" onPress={() => handleOpen()}>
          Open
        </Button>
      </div>
      <Drawer
        className="p-8"
        hideCloseButton
        placement="bottom"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          <>
            <DrawerBody
              className="flex flex-row gap-20 justify-center items-center"
            >
              <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-3 justify-center items-center">
                  <MinorButton
                    variant="solid"
                    color="primary"
                    size="sm"
                    icon={
                      <i className="text-white">
                        <CameraIcon size={24} />
                      </i>
                    }
                  />
                  دوربــین
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                  <MinorButton
                    variant="solid"
                    color="primary"
                    size="sm"
                    icon={
                      <i className="text-white">
                        <GalleryIcon size={24} />
                      </i>
                    }
                  />
                  گــــالــری
                </div>
              </div>

              <div className="flex flex-col gap-3 justify-center items-center">
                <MinorButton
                  variant="bordered"
                  color="secondary"
                  size="sm"
                  icon={
                    <i className="text-secondary">
                      <RecycleIcon size={24} />
                    </i>
                  }
                />
                حذف عکس
              </div>

            </DrawerBody>
          </>
        </DrawerContent>
      </Drawer>
    </>
  );
};