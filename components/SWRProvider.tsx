"use client"

import React, {ReactNode} from "react";
import {SWRConfig, SWRConfiguration} from "swr";
import {axiosCoreWithAuth} from "@/lib/axios";


export type SWRProviderProps = {
    children: ReactNode;
}


const SWRProvider = (props: SWRProviderProps) => {
    const {children} = props

    const configuration:  SWRConfiguration = {
        fetcher: async (url) => {
            const start = performance.now();
            const response = await axiosCoreWithAuth().get(url)
            const end = performance.now();
            return { ...response, duration: ((end - start) / 1000) };
        },
    }
    return (
        <SWRConfig value={configuration}>
            {children}
        </SWRConfig>
    )
}


export default SWRProvider
