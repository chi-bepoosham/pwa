import React from "react";
import {Card, CardHeader, CardBody, Divider, Progress} from "@heroui/react";
import clsx from "clsx";
import {NumericFormat} from "react-number-format";
import {ArrowRightIcon} from "@/stories/Icons";


type statusType = "delivered" | "canceled" | "continued";


type Time = {
    hours: number;
    minutes: number;
}

export interface OrdersCardProps {
    date: string;
    productAmount: string;
    shop: string;
    status: statusType;
    progressPercent: number;
    situation: string;
    price: number;
    time: Time;
}


export const OrdersCard = (props: OrdersCardProps) => {
    const {
        date,
        productAmount,
        shop,
        status,
        progressPercent,
        situation,
        price,
        time = {hours: 12, minutes: 15}
    } = props;
    return (
        <Card
            shadow="none"
            className={clsx("w-[500px]",
                status === "delivered" ? "border-3 border-secondary rounded-[18px] bg-white" : "",
                status === "canceled" ? "bg-secondary-50" : "",
                status === "continued" ? "border-3 border-primary rounded-b-lg rounded-t-2xl" : "",
            )}
        >
            <CardHeader
                className="flex flex-row justify-between gap-3"
            >

                <div className="flex flex-row justify-between w-full">
                    <p className="text-secondary" dir="ltr">{date}</p>
                    <span className="flex flex-row gap-2">
                      <NumericFormat
                          value={price}
                          displayType="text"
                          type="text"
                          thousandSeparator=","
                          allowNegative={false}
                          className="text-primary font-semibold"
                          dir="ltr"
                      >
                      </NumericFormat>
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
                        <span className={clsx("flex flex-col gap-2",
                            status === "continued" ? "text-primary" : "text-secondary"
                        )}>
                            {situation}
                            {status === "continued" && (
                                <i className="bg-secondary-50 p-2 rounded-2xl">
                                    <ArrowRightIcon size={20}/>
                                </i>
                            )}



                    </span>
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
                            aria-label="Loading..."
                            className=""
                            value={progressPercent}
                        />
                        <span className="flex flex-row">
                        <p
                            className={clsx(
                                status === "continued" ? "text-secondary-300" : ""
                            )}>
                           تحویل:
                        </p>
                        <span className={clsx("flex flex-row gap-6",
                            status === "continued" ? "text-secondary" : "",
                        )}>
                            <p dir="ltr">
                               {date}
                            </p>

                            {time.hours}:{time.minutes.toString().padStart(2, "0")}
                        </span>
                    </span>
                    </div>
                    <div
                        className="flex items-center bg-primary-50 text-primary px-5 py-0.5 w-fit rounded-3xl"
                    >
                        {progressPercent}%
                    </div>

                </div>
            )}
        </Card>
    )
}