import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TourSheetCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tour Sheet 1</CardTitle>
        <CardDescription>10/2/2024 - 15/2/2024</CardDescription>
      </CardHeader>
      <CardContent>
        <p>10000rs</p>
      </CardContent>
    </Card>
  );
};

export default TourSheetCard;
