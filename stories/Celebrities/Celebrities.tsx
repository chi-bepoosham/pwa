import React from "react";
import {Avatar, Tooltip} from "@heroui/react";


interface Customer {
    fullName: string;
    avatar: string;
    id: number;
}


export interface CelebrityProps {
    description: string;
    number: number;
    customers: Customer[];
}


export const Celebrities = (props: CelebrityProps) => {
    const {number, description, customers = []} = props;
    return (
        <div className="grid grid-cols-2 gap-3 justify-between bg-primary-50 border-2 border-primary  rounded-2xl p-5">
            <div className="col-span-1 flex flex-row-reverse pe-4">
                {customers.map((customer) => (
                    <Tooltip
                        key={customer.id}
                        color="secondary"
                        placement="top"
                        showArrow={false}
                    >
                        <div className="w-10 border">
                            <Avatar
                                src={customer.avatar}
                                size="lg"
                            />
                        </div>
                    </Tooltip>
                ))}
            </div>
            <div className="col-span-1 flex flex-col justify-center text-secondary">
                <span className="text-xl font-semibold text-nowrap">
                    {number}
                    +
                </span>
                <span className="text-nowrap">
                    {description}
                </span>
            </div>
        </div>
    )
}