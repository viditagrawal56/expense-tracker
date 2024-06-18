"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

const createTourSheetSchema = z
  .object({
    tourName: z
      .string()
      .min(5, { message: "Tour name must be at least 5 characters long." })
      .max(40, { message: "Tour name cannot exceed 40 characters." }),
    startDate: z.date({ required_error: "Start date is required" }),
    endDate: z.date({ required_error: "End date is required" }),
  })
  .refine((data) => data.endDate > data.startDate, {
    message: "End date must be after start date",
    path: ["endDate"],
  });

const CreateTourSheet = () => {
  const createTourSheetForm = useForm<z.infer<typeof createTourSheetSchema>>({
    resolver: zodResolver(createTourSheetSchema),
    defaultValues: {
      tourName: "",
      startDate: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof createTourSheetSchema>) {
    console.log("Form data:", values);
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="p-12">
        <Form {...createTourSheetForm}>
          <form
            onSubmit={createTourSheetForm.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={createTourSheetForm.control}
              name="tourName"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Tour Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Tour Name" {...field} />
                  </FormControl>
                  <FormDescription>Enter the name of the Tour.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={createTourSheetForm.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>Pick an Start date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    This is the Start Date of the Tour
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={createTourSheetForm.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>Pick a End date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date("1900-01-01")}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    This is the End Date of the Tour
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default CreateTourSheet;
