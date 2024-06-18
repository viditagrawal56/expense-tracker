"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { useRouter } from "next/navigation";

const CreateButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/create");
  };
  return (
    <Button onClick={handleClick}>
      Create a TourSheet
      <Plus className="ml-2 h-5 w-5" />
    </Button>
  );
};

export default CreateButton;
