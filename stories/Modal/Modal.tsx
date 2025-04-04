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
import clsx from 'clsx';

export interface ModalProps {
  removable: boolean;
}


export const Modal = (props: ModalProps) => {
  const { removable } = props;

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
              className={clsx(
                'flex flex-row justify-center items-center',
                removable ? 'gap-20' : 'gap-4',
              )}
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
                  <span>
                    دوربــین
                  </span>

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
                  <span>
                    گــــالــری
                  </span>

                </div>
              </div>

              {
                removable ?
                  (
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
                      <span>
                        حذف عکس
                      </span>
                    </div>
                  )
                  :
                  (
                    <div className="flex flex-col gap-3 justify-center items-center">
                      <MinorButton
                        variant="solid"
                        color="primary"
                        size="sm"
                        icon={
                          <i className="text-white">
                            <FilesIcon size={24} />
                          </i>
                        }
                      />
                      <span>
                      فـــایل‌ها
                    </span>
                    </div>
                  )
              }
            </DrawerBody>
          </>
        </DrawerContent>
      </Drawer>
    </>
  );
};


