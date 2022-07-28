import { View } from "../view.js";


export class UserView extends View {
    constructor(parent, user) {
        super(parent);
        this.user = user;
        this.mainContainer.classList.add("userView_mainContainer");
        this.mainContainer.innerHTML = user.name;

        var col1 = document.createElement('div');
        var col2 = document.createElement('div');
        var col3 = document.createElement('div');

        col1.className = 'userView_col1';
    }
}