// @ts-ignoregit
import icsToJson from "ics-to-json";
import { format, parseISO } from "date-fns";
import moment from "moment";

type Calendar = {
  startDate: string;
  endDate: string;
  summary: string;
};

type CalendarParse = {
  from: string;
  to: string;
};

export const fetchICSData = async (calendarId:string) => {
  const response = await fetch(calendarId); 

  try {
    const icsData = await response.text();
    const data: Calendar[] = icsToJson(icsData);
    const dataParse:CalendarParse[] = data.map((dateItem) => ({
      from: moment(dateItem.startDate).toString(),
      to: moment(dateItem.endDate).toString(),
    }));
    return dataParse;
  } catch (error) {
    console.error("Error fetching or parsing .ics file:", error);
    return null;
  }
};
