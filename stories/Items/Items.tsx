import React from "react";
import {Item} from "@/stories/Item";

export interface ItemsProps {

}


export const Items = (props: ItemsProps) => {
    const {} = props;
    return (
        <div
            className="flex flex-col items-center justify-center p-4"
        >
            <Item
                image="/img.png"
                title="پلیور آستین بلند دوخت درشت"
                material="چرم مشهد"
                count={2}
                price={1650000}
                size="XL"
                colorCode="green"
                colorName="green"
            />
            <Item
                image="/img.png"
                title="پلیور آستین بلند دوخت درشت"
                material="چرم مشهد"
                count={1}
                price={11650000}
                size="XL"
                colorCode="red"
                colorName="red"
            />

        </div>
    )
}




