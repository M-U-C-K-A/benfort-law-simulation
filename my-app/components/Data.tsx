"use client"
import * as React from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const invoices = [
    {
        totalAmount: "$28.75",
        paymentMethod: "Starbucks",
    },
    {
        totalAmount: "$49.99",
        paymentMethod: "PayPal",
    },
    {
        totalAmount: "$117.45",
        paymentMethod: "Leclerc",
    },
    {
        totalAmount: "$24.50",
        paymentMethod: "McDonald's",
    },
    {
        totalAmount: "$198.25",
        paymentMethod: "Apple",
    },
    {
        totalAmount: "$43.75",
        paymentMethod: "McDonald's",
    },
    {
        totalAmount: "$78.60",
        paymentMethod: "Leclerc",
    },
    {
        totalAmount: "$14.95",
        paymentMethod: "Bakery",
    },
    {
        totalAmount: "$89.30",
        paymentMethod: "Amazon",
    },
    {
        totalAmount: "$65.20",
        paymentMethod: "Gas Station",
    },
    {
        totalAmount: "$32.45",
        paymentMethod: "Movie Theater",
    },
    {
        totalAmount: "$55.80",
        paymentMethod: "Uber",
    },
    {
        totalAmount: "$38.20",
        paymentMethod: "Clothing Store",
    },
    {
        totalAmount: "$75.15",
        paymentMethod: "Grocery Store",
    },
    {
        totalAmount: "$19.90",
        paymentMethod: "Pharmacy",
    },
];


export function Data() {
    return (
        <>
            <ScrollArea className="h-96 w-[490px] rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Marque</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                            <TableRow key={index}>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </ScrollArea>
            <TableCaption className="w-[490px]">A list of your recent invoices.</TableCaption>
        </>
    )
}
