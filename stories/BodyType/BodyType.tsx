import React from "react";
import {Card, CardHeader, CardBody} from "@heroui/card";
import {Types} from "@/stories/BodyType/Types";
import {Number} from "@/stories/Number";
import {Divider} from "@heroui/react";


export interface BodyTypeProps {
    title?: string;
    strength?: string;
    weaknessPoints?: string;
}


export const BodyType = (props: BodyTypeProps) => {
    const {title ,strength ,weaknessPoints} = props
    return (
        <div className="w-[600px] grid grid-cols-4 border-2 border-secondary pr-2 rounded-lg h-96">
            <div className="col-span-1 bg-primary-50 rounded-lg my-2">
                <Types/>
            </div>
            <Card
                shadow="none"
                radius="lg"
                className="col-span-3">
                <CardHeader
                    className="flex flex-row justify-start items-center gap-8 text-primary text-3xl font-bold">
                    <Number number={1}/>
                    {title}
                </CardHeader>
                <div className="mr-3">
                    <Divider/>
                </div>
                <CardBody
                    className="flex flex-col gap-10 text-right">
                    <div>
                        <h1>نقاط قوت</h1>
                        <p>
                            {strength}
                        </p>

                    </div>
                    <div>
                        <h1>نقاط ضعف</h1>
                        <p>
                            {weaknessPoints}
                        </p>
                    </div>

                </CardBody>
            </Card>
        </div>
    )
}
