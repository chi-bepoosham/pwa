"use client";

import * as React from "react";
import {HeroUIProvider} from "@heroui/react";
import {Suspense} from "react";
// import {SessionProvider} from "next-auth/react";
import SWRProvider from "@/components/SWRProvider";
import {ToastProvider} from "@heroui/toast";


export interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({children}: ProvidersProps) {

    return (
        <HeroUIProvider
            className="relative min-h-screen max-h-screen overflow-x-hidden scroll-smoth flex flex-col">
            {/* <SessionProvider> */}
                <Suspense>
                    <SWRProvider>
                        <ToastProvider
                            toastProps={{
                                color: "primary",
                                variant: "solid",
                                timeout: 3000,
                            }}
                            placement="bottom-center"
                        />
                        {children}
                    </SWRProvider>
                </Suspense>
            {/* </SessionProvider> */}
        </HeroUIProvider>
    );
}
