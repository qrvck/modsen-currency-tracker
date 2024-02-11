function isRelevantData(updateTimestamp: number) {
  const dataRelevanceInMilliseconds = 21600000;
  return Date.now() - updateTimestamp < dataRelevanceInMilliseconds;
}

function getUpdateTime(updateTimestamp: number) {
  const updateTime = new Date(updateTimestamp);
  const minutes = updateTime.getMinutes() > 9 ? updateTime.getMinutes() : `0${updateTime.getMinutes()}`;
  return `${updateTime.getHours()}:${minutes}`;
}

function getInitialUpdateTimeStatusState(timestamp: number) {
  return isRelevantData(timestamp) ? 'updated' : 'updating';
}

export { getInitialUpdateTimeStatusState, getUpdateTime, isRelevantData };
