import React from "react";
import spendings from "@/fakedata/spendings.json";
import {HStack, VStack} from "@gluestack-ui/themed";
import {ScrollView} from "@gluestack-ui/config/build/theme";

export function SpendingsList() {

    return (
        <div style={{ height: "400px", overflow: 'scroll'}}>
            <VStack>
                {spendings.map((spending) => (
                    <div className={"spendingItem"}>
                        <div key={spending.ID} className={"textContainer"}>
                            <h2 className={"spendingText"}>{spending.name}</h2>
                            <p className={"spendingValue"}>{spending.value}</p>
                        </div>
                    </div>
                ))}
            </VStack>
        </div>
    );
}