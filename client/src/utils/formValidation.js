import formKeys from "../constants/formKeys";

const emailRegEx = /^[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/gm;
const imageLinkRegEx = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;

export const formValidation = (data) => {

    if (data.rePass && (data.password !== data.rePass)) throw { message: 'Passwords Do Not Match' };

    Object.entries(data).forEach(([key, value]) => {
        switch (key) {
            case formKeys.Email: if (!value.match(emailRegEx)) throw { message: 'Invalid Email Entered' }; break;

            case formKeys.Username: if (!value.match(/^[\w\-\s]{3,50}$/gm)) throw { message: 'Username must be between 3 and 50 characters' }; break;

            case formKeys.Password: if (!value.match(/^.{6,120}$/gm)) throw { message: 'Password must be at least 6 characters' }; break;

            case formKeys.RePass: if (!value.match(/^.{6,120}$/gm)) throw { message: 'Password must be at least 6 characters' }; break;

            case formKeys.Title: if (!value.match(/^.{3,40}$/gm)) throw { message: 'Title must be between 3 and 40 characters' }; break;

            case formKeys.ImageUrl: if (!value.match(imageLinkRegEx)) throw { message: 'Invalid Image Link' }; break;

            case formKeys.Difficulty: if (!value) throw { message: 'Choose Trail Difficulty' }; break;

            case formKeys.Duration: if (value > 43800) throw { message: `Duration is More Than a Month! Are You Sure?` }; break;

            case formKeys.Description: if (!value.match(/^.{3,300}$/gm)) throw { message: 'Description must be between 3 and 300 characters' }; break;
        }
    });
};