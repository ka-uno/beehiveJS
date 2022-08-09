import { View } from "../view.js";

export class CommentView extends View {
    constructor(parent, comment, appManager) {
        super(parent);
        this.comment = comment;
        this.appManager = appManager;
        this.mainContainer.classList.add('commentView_mainContainer');

        var title = document.createElement('p');
        title.className = 'commentView_title';
        title.innerHTML = this.comment.title;
        this.mainContainer.appendChild(title);

        var body = document.createElement('p');
        body.className = 'commentView_body';
        body.innerHTML = this.comment.body;
        this.mainContainer.appendChild(body);

        var username = document.createElement('p');
        username.className = 'commentView_username';
        username.innerHTML = this.comment.userId;
        this.mainContainer.appendChild(username);
    }
}