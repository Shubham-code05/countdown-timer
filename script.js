const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let giveawayDate = new Date(2025, 2, 13, 23, 30, 0);
  let hours = giveawayDate.getHours();
  let ampm = "AM";
  if (hours >= 12) {
    ampm = "PM";
    hours -= 12;
  }
  let giveaway = document.querySelector(".giveaway");
  giveaway.innerHTML = `giveaway ends on ${
    day[giveawayDate.getDay()]
  }, ${giveawayDate.getDate().toString().padStart(2, "0")} ${
    month[giveawayDate.getMonth()]
  } ${giveawayDate.getFullYear()} ${hours
    .toString()
    .padStart(2, "0")}:${giveawayDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}${ampm}`;
  
  const updateDate = () => {
    let currDate = new Date();
  
    let diffTime = giveawayDate - currDate;
    console.log(diffTime);
  
    let giveAwayDays = Math.floor(diffTime / (24 * 60 * 60 * 1000));
    console.log(giveAwayDays);
    document.querySelector("#days").innerHTML = giveAwayDays;
  
    let giveawayHours = Math.floor(
      (diffTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    console.log(giveawayHours);
    document.querySelector("#hours").innerHTML = giveawayHours;
    let giveawayMinutes = Math.floor((diffTime % (60 * 60 * 1000)) / (60 * 1000));
    console.log(giveawayMinutes);
    document.querySelector("#mins").innerHTML = giveawayMinutes;
  
    let giveAwaySeconds = Math.floor((diffTime % (60 * 1000)) / 1000);
    console.log(giveAwaySeconds);
  
    document.querySelector("#seconds").innerHTML = giveAwaySeconds;
  };
  setInterval(updateDate, 1000);