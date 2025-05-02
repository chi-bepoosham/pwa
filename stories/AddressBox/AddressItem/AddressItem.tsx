import React from 'react';


export interface AddressItemProps {
    address?: {
    }
}


export const AddressItem = (props: AddressItemProps) => {
    const { address } = props;

    if (!address) {
        return (
            <div className="w-full flex justify-center items-center p-4">
                <p className="text-secondary text-xl">آدرسی برای نمایش وجود ندارد</p>
            </div>
        )
    }

    return (
        <div>
            <h1>AddressItem</h1>
        </div>
    )
}