export const durationConverter = (duration) => {
    let hours = Math.floor(Number(duration) / 60);
    const minutes = Number(duration) % 60;
    let days = 0;

    if (hours >= 24) {
        days = Math.floor(Number(hours) / 24);
        hours = Number(hours) % 24;
    }



    return `${days !== 0 ? `${days}d` : ''} ${hours !== 0 ? `${hours}h` : ''} ${minutes !== 0 ? `${minutes}m` : ''}`;
};;