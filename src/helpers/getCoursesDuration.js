const getCoursesDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  let durationResult = '00:00 hour';

  if (duration === undefined) return durationResult;

  if (hours < 10) {
    durationResult = '0' + hours + ':' + minutes + ' hours';
  }
  if (minutes < 10) {
    durationResult = hours + ':0' + minutes + ' hours';
  }
  if (hours === 1) {
    durationResult = hours + ':' + minutes + ' hour';
  }

  return durationResult;
};

export default getCoursesDuration;
