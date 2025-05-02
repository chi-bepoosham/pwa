import React from 'react';

export interface FinalPriceProps {
   price?:{

   } 
}


export const FinalPrice = (props: FinalPriceProps) => {
    const {price  } = props;
   
    
    if (!price) {
        return (
            <div className="w-full flex justify-center items-center p-4">
                <p className="text-secondary text-xl">سبد خرید شما خالی است</p>
            </div>
        )
    }

    return (
        <div>
            <h1>AddressItem</h1>
        </div>
    )
}   