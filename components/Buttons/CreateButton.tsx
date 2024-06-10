import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
const CreateButton = () => {
  return (
    <Button>
      Create a TourSheet
      <Plus className="ml-2 h-5 w-5" />
    </Button>
  );
};

export default CreateButton;
