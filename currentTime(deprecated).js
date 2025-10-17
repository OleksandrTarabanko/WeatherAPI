// const months = {
//   Jan: "01",
//   Feb: "02",
//   Mar: "03",
//   Apr: "04",
//   May: "05",
//   Jun: "06",
//   Jul: "07",
//   Aug: "08",
//   Sep: "09",
//   Oct: "10",
//   Nov: "11",
//   Dec: "12",
// };

// function getRightArgs(monthName, argumentsArr) {
//   const rightMonth = months[monthName];
//   argumentsArr[0] = rightMonth;
//   return argumentsArr;
// }

// function getCurrentDateTimeFormat(arr) {
//   const [month, day, year, time] = arr;
//   return `${year}-${month}-${day}T${time}`;
// }

// function initializeCurrentTime() {
//   const currentTimeData = new Date().toString();
//   const currentTimeString = currentTimeData.slice(4, 21);

//   const minutesToRound = currentTimeData.slice(19, 21);
//   let roundedMinutes = String(Math.round(minutesToRound / 15) * 15);
//   if (roundedMinutes === "0" || roundedMinutes === "60") {
//     roundedMinutes = "00";
//   }

//   const currentTimeArgsArr = (
//     currentTimeString.slice(0, 15) + roundedMinutes
//   ).split(" ");

//   console.log(minutesToRound);
//   console.log(roundedMinutes);

//   getRightArgs(currentTimeArgsArr[0], currentTimeArgsArr);
//   return getCurrentDateTimeFormat(currentTimeArgsArr);
// }

// export { initializeCurrentTime };
