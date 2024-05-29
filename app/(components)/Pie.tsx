import {Box} from "@gluestack-ui/themed";
import {VictoryLabel, VictoryPie} from "victory";
import React, {useEffect} from "react";
import categories from "@/fakedata/categories.json"

const pieData = categories.map((category) => {
    return {
        y: category.budget
    }
})

export const Pie = () => {
    const [foregroundColor, setForegroundColor] = React.useState("var(--foreground-rgb)");

    useEffect(() => {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--foreground-rgb');
        setForegroundColor(`rgb(${color}`);
    }, []);

    return (
            <svg viewBox="0 0 400 400" style={{ height: "40%"}}>
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
                    style={{ fontSize: 20, fill: foregroundColor }}
                    x={200} y={200}
                    text="Restant 2000€"
                />
            </svg>
    );
};