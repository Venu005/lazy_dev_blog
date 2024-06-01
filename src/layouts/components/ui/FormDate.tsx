import { format } from "date-fns";

export const DateFormat = () => {
  const date = new Date();
  const formattedDate = format(date, "yyyy-MM-dd'T'HH:mm:ss'Z'");

  return <div>{formattedDate}</div>;
};
