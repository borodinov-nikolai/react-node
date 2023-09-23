



module.exports = class UserDto {
    email;
    id;
    isActivate;

    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.isActivated = model.isActivated;
    }


}