import React from "react";
import {Card, CardHeader, CardBody} from "@heroui/card";
import {Types} from "@/stories/BodyType/Types";


export interface BodyTypeProps {
    title?: string;
}


export const BodyType = (props: BodyTypeProps) => {
    const {} = props
    return (
        <div className="w-full grid grid-cols-4">
            <div className="col-span-1 bg-primary-50">
                <Types/>
            </div>
            <Card
                className="col-span-3">
                <CardHeader
                className="flex flex-row justify-center items-center gap-3 text-primary">


                </CardHeader>
                <CardBody>

                </CardBody>
            </Card>
        </div>
    )
}
