export const durationConverter = (duration) => {
    const hours = Math.floor(Number(duration) / 60);
    const minutes = Number(duration) % 60;

    return `${hours !== 0 ? `${hours}h` : ''} ${minutes !== 0 ? `${minutes}m` : ''}`;
};;