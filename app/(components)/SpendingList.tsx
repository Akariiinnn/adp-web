import React from "react";
import spendings from "@/fakedata/spendings.json";
import {Card, Heading, Text, VStack} from "@gluestack-ui/themed";
import categories from '@/fakedata/categories.json';

interface Category {
    ID: number;
    name: string;
    budget: string;
    user_id: number;
}

const categoryColors = [
    "#FCFFA6",
    "#C1FFD7",
    "#B5DEFF",
    "#CAB8FF",
    "#79B4B7",
    "#9D9D9D",
    "#C1AC95",
];

const thisUser = 1;

const userSpendings = spendings.filter((spending) => spending.user_id === thisUser);

const categoriesItems: Category[] = categories;

function findItemById(id: number): Category {
    return categoriesItems.find((item) => item.ID === id) as Category;
}

function SpendingList() {

    return (
        <div style={{height: "80vh", overflow: 'scroll'}} className={"w-full h-42 no-scrollbar"}>
            <VStack>
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
                        </div>
                    </Card>
                ))}
            </VStack>
        </div>
    );
}

export default SpendingList;
