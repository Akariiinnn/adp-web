'use client';
import React from "react";
import {Container} from "@/app/(components)/Container";
import UserSettings from "@/app/(components)/UserSettings";

export default function Home() {
    return (
        <main>
            <Container />
            <UserSettings />
        </main>
    );
}
