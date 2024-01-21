"use client"
import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
export function Graph() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Graphique de vos données</CardTitle>
                <CardDescription>Analyse de la validité, loi de benfort.</CardDescription>
            </CardHeader>
            
            <CardContent>
            </CardContent>
        </Card>
    )
}
