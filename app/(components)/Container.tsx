import {Box, HStack, VStack} from "@gluestack-ui/themed";
import {Pie} from "@/app/(components)/Pie";
import React from "react";
import SpendingList from "@/app/(components)/SpendingList";
import Keys from "@/app/(components)/Keys";

export function Container() {
    return (
        <Box flex={1} bg="var(--background-start-rgb)">
            <h1 color={"var(--foreground-rgb)"}>Arrête d'être pauvre </h1>
            <HStack>
                <VStack>
                    <Pie />
                    <Keys />
                </VStack>
                <SpendingList/>
            </HStack>
        </Box>
    );
}