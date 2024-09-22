import CalendarBooking from "./components/CalendarBooking";
import { fetchICSData } from "./utils/getDates";
export default async function Home() {
  const CALENDARID = process.env.GOOGLE_CALENDAR_ID_PUBLIC;
  const data = await fetchICSData(CALENDARID as string);

  return (
    <div className=" bg-gradient-to-t from-red-700 to-red-400  min-h-screen">
      <div className=" flex-col gap-10 container mx-auto min-h-screen  flex justify-center items-center w-full  ">
        <h1 className="  text-4xl max-w-lg text-center  font-bold text-balance">
          Retrieving Calendar dates from <span>Google Calendar</span>
        </h1>
        <CalendarBooking data={data || []} />
        <footer className=" fixed w-full bottom-0 p-5 bg-gray-900 text-center text-white">
          <p>By Jasson Caceres</p>
          <p>{new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
