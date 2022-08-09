import { PostListViewController } from "../viewControllers/postList/postListViewController.js";
import { UserListViewController } from "../viewControllers/userList/userListViewController.js"; //appManager se encarga de la comunicacion de con los viewControllers
export class AppManager {
    constructor() {
        this.userSelected = null;
        this.appContainer = document.getElementById('appContainer');
        this.usersListViewController = new UserListViewController(appContainer, this);
        this.postListViewController = null;
        //console.log(gsap);
    }

    showUserPosts(user) {
        //console.log(user);
        this.userSelected = user;
        this.postListViewController = new PostListViewController(this.appContainer, this);
    }

    showUserTodos(user) {
        this.userSelected = user;
    }

    onBackBtn(viewControllerName) {
        console.log(viewControllerName)
        switch (viewControllerName) {
            case 'userListViewController':
                break;
            case 'postListViewController':
                this.postListViewController.moveOut();
                this.postListViewController = null;
                break;
            case 'todosListViewController':
                break;
            default:
                break;
        }
    }
}