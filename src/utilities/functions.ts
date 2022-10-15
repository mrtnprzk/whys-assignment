export const getFormatedDate = (date: string) => {
  const fullDate = new Date(date);

  const year = fullDate.getFullYear();
  const month = fullDate.toLocaleDateString("en-US", { month: "short" });
  const day = fullDate.getDate();
  const hour = fullDate.getHours();
  const minute = fullDate.getMinutes();

  const formatedDate = `${day}-${month}-${year} at ${hour}:${
    minute === 0 ? "00" : minute
  }`;
  return formatedDate;
};
