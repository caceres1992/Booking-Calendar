import CalendarBooking from "./components/CalendarBooking";
import { fetchICSData } from "./utils/getDates";
export default async function Home() {
  const CALENDARID = process.env.GOOGLE_CALENDAR_ID_PUBLIC;
  const data = await fetchICSData(CALENDARID as string);

  return (
    <div className=" bg-gradient-to-t from-dark to-emerald-600  min-h-screen">
      <div className=" flex-col gap-10 container mx-auto min-h-screen  flex justify-center items-center w-full  ">
        <h1 className="  text-4xl max-w-lg text-center  font-bold text-balance">
          Retrieving Calendar dates from <span>Google Calendar</span>
        </h1>
        <CalendarBooking data={data || []} />
        <footer className=" text-center text-white">
              this is a footer with colors and more to the practice
        </footer>
      </div>
    </div>
  );
}
