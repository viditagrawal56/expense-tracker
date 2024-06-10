import TourSheetCard from "./Cards/TourSheetCard";

const TourSheetCards = [
  {
    title: "TourSheet 1",
    description: "10/2/2024 - 15/2/2024",
    content: "10000rs",
  },
  {
    title: "TourSheet 2",
    description: "10/3/2024 - 15/3/2024",
    content: "5000rs",
  },
  {
    title: "TourSheet 3",
    description: "10/4/2024 - 15/4/2024",
    content: "15000rs",
  },
];

const TourSheetContainer = () => {
  return (
    <div className="flex flex-col gap-4 w-4/5">
      {TourSheetCards.map((sheet, index) => (
        <TourSheetCard
          key={index}
          title={sheet.title}
          description={sheet.description}
          content={sheet.content}
        />
      ))}
    </div>
  );
};

export default TourSheetContainer;
