'use client';
import React, {createContext, useEffect} from "react";
import {Container} from "@/app/(components)/Container";

import {Center} from "@gluestack-ui/themed";
import Cookies from "universal-cookie";

export default function Home() {
    return (
        <AuthenticationProvider>
            <main style={{padding: "30px"}}>
                <Center>
                    <Container/>
                </Center>
            </main>
        </AuthenticationProvider>
    );
}
const AuthenticationContext = createContext({});

function AuthenticationProvider({children}: { children: any }) {
    const cookies = new Cookies().getAll();

    useEffect(function(){
        console.log(cookies);
    }, []);

    return (
        <AuthenticationContext.Provider value={{}}>
            {children}
        </AuthenticationContext.Provider>
    )
}