import TourSheetCard from "./Cards/TourSheetCard";

const TourSheetContainer = () => {
  return (
    <div className="flex flex-col gap-4 w-4/5">
      <TourSheetCard />
      <TourSheetCard />
      <TourSheetCard />
    </div>
  );
};

export default TourSheetContainer;
