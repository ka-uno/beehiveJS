import { UserListService } from "../userList/userListService.js";
import { ViewController } from "../viewController.js";


export class PostListViewController extends ViewController {
    constructor(parent) {
        super(parent);

        this.service = new UserListService(this);
        this.mainContainer.classList.add('userListViewController');
    }



}