"use client"
import * as React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "le paiement doit faire plus de 2 characteres",
    }),
    amount: z.string().refine((value) => /^\d+\.\d{2}$/.test(value), {
        message: "le montant doit avoir 2 décimales.",
      }),
})
const onSubmit = async (data) => {
    // Logique de soumission du formulaire
    console.log(data);
};
export function InputForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Ajouter une ligne</CardTitle>
                <CardDescription>Ajouter une ligne dans le calcul.</CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <CardContent>


                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Achat*</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Macdonald's" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Montant*</FormLabel>
                                    <FormControl>
                                        <Input placeholder="15.23" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormDescription>
                            *Les informations restent confidentielles.
                        </FormDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button type="submit">Deploy</Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    )
}
