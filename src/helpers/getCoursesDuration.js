const getCoursesDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  let durationResult = '00:00 hour';

  const hoursTreshold = 10;
  const minutesThreshold = 10;
  const defaultThreshold = 1;

  if (duration === undefined) {
    return durationResult;
  }

  if (hours < hoursTreshold) {
    durationResult = '0' + hours + ':' + minutes + ' hours';
  }
  if (minutes < minutesThreshold) {
    durationResult = hours + ':0' + minutes + ' hours';
  }
  if (hours === defaultThreshold) {
    durationResult = hours + ':' + minutes + ' hour';
  }

  return durationResult;
};

export default getCoursesDuration;
