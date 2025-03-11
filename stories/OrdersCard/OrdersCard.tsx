import React from "react";
import {Card, CardHeader, CardBody, Divider, Progress} from "@heroui/react";
import clsx from "clsx";


type statusType = "delivered" | "canceled" | "continued";


export interface OrdersCardProps {
    date: string;
    productAmount: string;
    shop: string;
    status: statusType;
    progressPercent: number;
    situation: string;
    price: number;
}


export const OrdersCard = (props: OrdersCardProps) => {
    const {
        date,
        productAmount,
        shop,
        status,
        progressPercent,
        situation,
        price
    } = props;
    return (
        <Card
            shadow="none"
            className={clsx("max-w-[550px]",
                status === "delivered" ? "border-3 border-secondary rounded-[18px] bg-white" : "",
                status === "canceled" ? "bg-secondary-50" : "",
                status === "continued" ? "border-3 border-primary rounded-b-lg rounded-t-2xl" : "",
            )}
        >
            <CardHeader
                className="flex flex-row justify-between gap-3"
            >

                <div className="flex flex-row justify-between w-full">
                    <p className="text-secondary">{date}</p>
                    <span className="flex flex-row gap-2">
                        <p className="text-primary font-semibold">
                        {price}
                        </p>
                        <p className="text-secondary font-bold">
                          تومان
                        </p>

                    </span>
                </div>
            </CardHeader>
            <Divider
                className="text-secondary-100"
            />
            <CardBody
                className="flex flex-row justify-between w-full"
            >
                <div className="flex flex-col gap-3 text-nowrap text-right">
                    <p>
                        {productAmount}
                    </p>
                    <p>
                        {shop}
                    </p>

                </div>
                <div className="flex flex-col gap-3">
                    <span className="flex flex-row">
                        <p
                            className={clsx(
                                status === "continued" ? "text-secondary" : "text-secondary-300"
                            )}>
                           وضعیت:
                        </p>
                        <p className={clsx(
                            status === "continued" ? "text-primary" : "text-secondary"
                        )}>
                        {situation}
                    </p>
                    </span>
                </div>
            </CardBody>
            {status === "continued" && (
                <Divider
                    className="text-secondary-100"
                />
            )}

            {status === "continued" && (
                <div className="flex flex-row justify-between p-4">
                    <div
                        className="flex flex-col items-center gap-4"
                        dir="rtl"
                    >
                        <Progress
                            // isIndeterminate={true}
                            aria-label="Loading..."
                            className="max-w-md"
                            value={progressPercent}
                        />
                        <span>
                            فروشگاه (جین‌وست - چرم مشهد)
                        </span>
                    </div>
                    <div
                        className="flex items-center bg-primary-50 text-primary px-3.5 py-2 w-fit rounded-2xl"
                    >
                        {progressPercent}%
                    </div>

                </div>
            )}
        </Card>
    )
}