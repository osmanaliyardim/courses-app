export default function formatCreationDate(totalMinutes) {
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;
	let result = '';

	if (hours < 10) {
		result = '0' + hours + ':' + minutes + ' hours';
	}
	if (minutes < 10) {
		result = hours + ':0' + minutes + ' hours';
	}
	if (hours === 1) {
		result = hours + ':' + minutes + ' hour';
	}

	return result;
}
