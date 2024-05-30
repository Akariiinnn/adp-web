import React from 'react'
import {VStack} from "@gluestack-ui/themed";
import categories from '@/fakedata/categories.json'
import spendings from '@/fakedata/spendings.json'
import users from '@/fakedata/users.json'
import {toFixedNumber} from "@react-stately/utils";

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
const user = users.find(user => user.ID === thisUser);
const userBudget = user ? parseFloat(user.revenus) : 0;
const userSpendings = spendings.filter((spending) => spending.user_id === thisUser);
const spendingPerCategory = categories.map(category => {
    const totalSpending = userSpendings
        .filter(spending => spending.category_id === category.ID)
        .reduce((sum, spending) => sum + parseFloat(spending.value), 0);
    return {...category, totalSpending};
})

export default function Keys() {
    return (
        <VStack>
            {spendingPerCategory.map((category) => {
                const percentage = userBudget ? (category.totalSpending / userBudget * 100).toFixed(2) : 0;
                return (
                    <div key={category.ID} style={{display: "inline-flex", alignItems: "center", marginBottom: "10px"}}>
                        <div style={{
                            backgroundColor: categoryColors[category.ID - 1],
                            width: 20,
                            height: 20,
                            marginRight: 10,
                            borderRadius: "50%"
                        }}></div>
                        <span style={{marginRight: 30}}>{category.name}</span>
                        <span>{percentage}% ({toFixedNumber(category.totalSpending, 2)}€)</span>
                    </div>
                );
            })}
        </VStack>
    );
}