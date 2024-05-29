import {Box, HStack} from "@gluestack-ui/themed";
import {Pie} from "@/app/(components)/Pie";
import React from "react";
import {SpendingsList} from "@/app/(components)/SpendingList";

export function Container() {
    return (
        <Box flex={1} bg="var(--background-start-rgb)" $web-h={'100vh'}>
            <h1 color={"var(--foreground-rgb)"}>Arrête d'être pauvre </h1>
            <HStack>
                <Pie/>
                <SpendingsList/>
            </HStack>
        </Box>
    );
}