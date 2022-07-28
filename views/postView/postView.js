import { View } from "../view.js";

export class PostView extends View {
    constructor(parent, post, appManager) {
        super(parent);
        this.post = post;
        this.appManager = appManager;
        this.mainContainer.classList.add('postView_maincontainer');
    }
}