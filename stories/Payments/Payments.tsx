import React from "react";
import {RadioGroup, Radio} from "@heroui/radio";


export interface PaymentsProps {
}


export const Payments = (props: PaymentsProps) => {
    const {} = props;
    return (
        <RadioGroup
            label="روش‌های پرداخت"
            className="flex flex-col items-start justify-center gap-7"
        >
            <div className="flex flex-col gap-10">
            <Radio
                color="primary"
                description="پرداخت آنلاین با تمامی کارت‌های اعتباری"
                value="buenos-aires"
                className="text-secondary-300"
            >
                پرداخت اینترنتی
            </Radio>
            <Radio
                color="primary"
                description="ویژه فروشگاه‌ها، شرکت‌ها و ..."
                value="sydney"
                className="text-secondary-300"
            >
                پرداخت با کارت اعتباری
            </Radio>

            </div>
                    </RadioGroup>
    )
}