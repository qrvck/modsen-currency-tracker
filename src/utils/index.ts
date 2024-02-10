function isRelevantData(updateTimestamp: number) {
  const dataRelevanceInMilliseconds = 21600000;
  return Date.now() - updateTimestamp < dataRelevanceInMilliseconds;
}

function getUpdateTime(updateTimestamp: number) {
  const updateTime = new Date(updateTimestamp);
  return `${updateTime.getHours()}:${updateTime.getMinutes()}`;
}

function getInitialUpdateTimeStatusState(timestamp: number) {
  return isRelevantData(timestamp) ? 'updated' : 'updating';
}

export { getInitialUpdateTimeStatusState, getUpdateTime, isRelevantData };
