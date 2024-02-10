function isLast6HoursData(updateTimestamp: number) {
  const millisecondsIn6Hours = 3600000;
  return Date.now() - updateTimestamp < millisecondsIn6Hours;
}

function getUpdateTime(updateTimestamp: number) {
  const updateTime = new Date(updateTimestamp);
  return `${updateTime.getHours()}:${updateTime.getMinutes()}`;
}

function getInitialUpdateTimeStatusState(timestamp: number) {
  return isLast6HoursData(timestamp) ? 'updated' : 'updating';
}

export { getInitialUpdateTimeStatusState, getUpdateTime, isLast6HoursData };
