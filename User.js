import Message from "./Message.js";

class User {

    constructor(name) {
        this.name = name;
    }

    sendMessage(conversation, content, currentUser) {
        if (!conversation.users.includes(this)) {
            throw new Error(`${this.name} ne fait pas partie de la conversation`);
        } else {
            const message = new Message(this, content);
            conversation.messages.push(message);
            message.display(currentUser);
        }
        return this;
    }
}

export default User;