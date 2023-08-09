import moment from "moment";

export const formatDate = (dateString: string) => {
  const formattedDate = moment(dateString).format("MMM D, YYYY");

  console.log(formattedDate);

  return formattedDate;
};
