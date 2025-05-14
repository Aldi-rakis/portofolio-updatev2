import React from 'react'
import {
    AnimatedCard,
    CardVisual,
    CardBody,
    CardTitle,
    CardDescription,
} from "./ui/animated.card";
import { Visual2 } from "../component/visual-2";

const Card = () => {
    return (
        <div>
            <AnimatedCard>
                <CardVisual>
                    <Visual2 mainColor="#ff6900" secondaryColor="#f54900" />
                </CardVisual>
                <CardBody>
                    <CardTitle>Just find the right caption</CardTitle>
                    <CardDescription>This card will tell everything you want</CardDescription>
                </CardBody>
            </AnimatedCard>
        </div>
    )
}

export default Card