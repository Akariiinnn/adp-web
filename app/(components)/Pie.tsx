import {Box} from "@gluestack-ui/themed";
import {VictoryLabel, VictoryPie} from "victory";
import React, {useEffect} from "react";
import categories from "@/fakedata/categories.json"
import users from "@/fakedata/users.json"
import spendings from "@/fakedata/spendings.json"

const thisUser = 0;

//pieData is the total of all the spendings of the user in each category, map on the spendings to get the total of each category
const pieData = categories.map((category) => {
    const totalSpending = spendings
        .filter(spending => spending.category_id === category.ID)
        .reduce((sum, spending) => sum + parseFloat(spending.value), 0);
    return {y: totalSpending};
});

const remaining = +users[thisUser].revenus - pieData.reduce((sum, category) => sum + category.y, 0);

pieData.push({y: remaining});

export const Pie = () => {
    const [foregroundColor, setForegroundColor] = React.useState("var(--foreground-rgb)");

    useEffect(() => {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--foreground-rgb');
        setForegroundColor(`rgb(${color}`);
    }, []);

    return (
            <svg viewBox="0 0 400 400" width={"400"} height={"400"}>
                <VictoryPie
                    standalone={false}
                    innerRadius={100}
                    data={pieData}
                    colorScale={[
                        "#FCFFA6",
                        "#C1FFD7",
                        "#B5DEFF",
                        "#CAB8FF",
                        "#79B4B7",
                        "#9D9D9D",
                        "#C1AC95",
                    ]}
                    labels={() => null}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{fontSize: 20, fill: foregroundColor}}
                    x={200} y={200}
                    text={"Restant " + remaining + "€"}
                />
            </svg>
    );
};