import CalendarBooking from "./components/CalendarBooking";
import { fetchICSData } from "./utils/getDates";
const CALENDARID = process.env.GOOGLE_CALENDAR_ID_PUBLIC;
export default async function Home() {
  const data = await fetchICSData(CALENDARID!);

  return (
    <div className=" bg-gradient-to-t from-orange-700 to-rose-600  min-h-screen">
      <div className=" flex-col gap-10 container mx-auto min-h-screen  flex justify-center items-center w-full  ">
        <h1 className="  text-4xl max-w-lg text-center  font-bold text-balance">
          Retrieving Calendar dates from <span>Google Calendar</span>
        </h1>
        <CalendarBooking data={data} />
      </div>
    </div>
  );
}
