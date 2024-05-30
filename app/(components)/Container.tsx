<<<<<<< HEAD
import {Box, Center, HStack, VStack} from "@gluestack-ui/themed";
import {Pie} from "@/app/(components)/Pie";
import React from "react";
import SpendingList from "@/app/(components)/SpendingList";
import Keys from "@/app/(components)/Keys";
import Menu from "@/app/(components)/Menu";

export function Container() {
    return (
        <Box flex={1} bg="var(--background-start-rgb)">
            <Center>
                <h1 color={"var(--foreground-rgb)"}>Arrête d'être pauvre </h1>
            </Center>
            <HStack>
                <VStack>
                    <Pie />
                    <Keys />
                    <Menu />
                </VStack>
                <SpendingList/>
=======
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
>>>>>>> a8990688c96d3c3e9a9524a999e9da5ab4b0b57f
            </HStack>
        </Box>
    );
}