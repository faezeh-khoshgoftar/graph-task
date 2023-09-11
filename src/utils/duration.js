export const duration = (dateDST, dateSRC) => {
  if ((dateDST, dateSRC)) {
    const timestampDST = new Date(dateDST);
    const timestampSRC = new Date(dateSRC);
    const hoursDST = timestampDST.getHours();
    const hoursSRC = timestampSRC.getHours();
    const minutesDST = timestampDST.getMinutes();
    const minutesSRC = timestampSRC.getMinutes();
    let hours = hoursDST - hoursSRC;
    let minutes = minutesDST - minutesSRC;
    let formatTime = `${hours} h ${minutes} min`;

    return formatTime;
  }
};
