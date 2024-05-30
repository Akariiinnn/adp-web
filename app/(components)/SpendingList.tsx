import React from "react";
import spendings from "@/fakedata/spendings.json";
<<<<<<< HEAD
import {Card, Heading, Text, VStack} from "@gluestack-ui/themed";
import categories from '@/fakedata/categories.json';
=======
import {HStack, VStack} from "@gluestack-ui/themed";
import {ScrollView} from "@gluestack-ui/config/build/theme";
>>>>>>> a8990688c96d3c3e9a9524a999e9da5ab4b0b57f

export function SpendingsList() {

    return (
        <div style={{ height: "400px", overflow: 'scroll'}}>
            <VStack>
<<<<<<< HEAD
                {userSpendings.map((spending) => (
                    <Card size={"md"} variant={"elevated"} m={"$3"}>
                        <Heading mb={"$1"}>{spending.name}</Heading>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <Text size={"sm"} color={"red"}>{spending.value}€</Text>
                            <div style={{
                                backgroundColor: categoryColors[spending.category_id - 1],
                                borderRadius: "30px",
                                paddingLeft: "5px",
                                paddingRight: "5px"
                            }}>
                                <Text color="night" size={"md"}>
                                    {findItemById(spending.category_id).name}
                                </Text>
                            </div>
=======
                {spendings.map((spending) => (
                    <div className={"spendingItem"}>
                        <div key={spending.ID} className={"textContainer"}>
                            <h2 className={"spendingText"}>{spending.name}</h2>
                            <p className={"spendingValue"}>{spending.value}</p>
>>>>>>> a8990688c96d3c3e9a9524a999e9da5ab4b0b57f
                        </div>
                    </div>
                ))}
            </VStack>
        </div>
    );
}