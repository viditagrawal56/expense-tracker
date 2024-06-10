import CreateButton from "@/components/Buttons/CreateButton";
import TourSheetContainer from "@/components/TourSheetContainer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen justify-between py-14">
        <TourSheetContainer />
        <CreateButton />
      </div>
    </>
  );
}
