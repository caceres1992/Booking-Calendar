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
  try {
    const response = await fetch(
      "https://calendar.google.com/calendar/ical/ac17926e4dd5f39bd8013dd650c58ce2dec683962020d031e4fbae751b2c73c9%40group.calendar.google.com/private-e83477a1232c8d6c27bfbef746865fec/basic.ics"
    ); 
 
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
