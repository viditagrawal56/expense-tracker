import CreateButton from "@/components/Buttons/CreateButton";
import NavBar from "@/components/NavBar";
import TourSheetContainer from "@/components/TourSheetContainer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col gap-10 items-center w-full h-full justify-between py-14">
        <TourSheetContainer />
        <CreateButton />
      </div>
    </>
  );
}
