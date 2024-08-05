import moment from 'moment';

export const elapsedTime = (initialTime) => {
    return moment(initialTime).fromNow();
};

export const formatTime = (initialTime) => {
    return moment(initialTime).format('DD.MM.yyyy')
}