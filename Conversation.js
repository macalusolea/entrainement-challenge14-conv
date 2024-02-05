import User from "./User.js";

class Conversation {

    constructor() {
        this.users = [];
        this.messages = [];
    }

    addUsers(users) {
        users.forEach((user) => {
            if (user instanceof User && !this.users.includes(user)) {
                this.users.push(user);
            } else {
                throw new Error("Impossible d'ajouter cet utilisateur");
            }
        });
        return this;
    }

}



export default Conversation;