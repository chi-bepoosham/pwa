import React from "react";
import {Card, CardHeader, CardBody} from "@heroui/card";


export interface BodyTypeProps {
    title?: string;
}


export const BodyType = (props: BodyTypeProps) => {
    const {} = props
    return (
        <div className="w-full grid grid-cols-4">
            <div className="col-span-1">

            </div>
            <Card
                className="col-span-3">
                <CardHeader>

                </CardHeader>
                <CardBody>

                </CardBody>
            </Card>
        </div>
    )
}
