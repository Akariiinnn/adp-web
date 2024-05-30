'use client';

import React from "react";
import {Container} from "@/app/(components)/Container";
import {Center} from "@gluestack-ui/themed";

export default function Home() {
    return (
        <main style={{padding: "30px"}}>
            <Center>
                <Container />
            </Center>
        </main>
    );
}
