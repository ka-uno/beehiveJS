import { PostListViewController } from "../viewControllers/postList/postListViewController.js";
import { UserListViewController } from "../viewControllers/userList/userListViewController.js";

export class AppManager {
    constructor() {
        this.userSelected = null;
        var parent = document.getElementById('appContainer');
        this.usersListViewController = new UserListViewController(parent, this);
        this.postListViewController = null;
    }

    showUserPosts(user) {
        this.userSelected = user;
        this.postListViewController = new PostListViewController();
    }

    showUserTodos(user) {
        this.userSelected = user;
    }

}