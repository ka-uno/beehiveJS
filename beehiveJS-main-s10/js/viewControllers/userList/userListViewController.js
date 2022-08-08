import { UserView } from "../../views/userView/userView.js";
import { ViewController } from "../viewController.js";
import { UserListService } from "./userListService.js";

export class UserListViewController extends ViewController {
    constructor(parent, appManager) {
            super(parent, appManager);
            this.service = new UserListService(this);
            this.mainContainer.classList.add('userListViewController');
            this.navbarContainer.classList.add('userListViewController_navbarContainer')
            this.navbarContainer.innerHTML = 'USERS';
        }
        //con funcion flecha. Se invoca x cada elemento del arreglo
        // el arrow func guarda el contexto de donde se creo
        // showContent(data) {
        //     data.forEach(user => {
        //         console.log(data)
        //     });
        // }


    //LA MANERA TRADUCIONAL SERIA: 
    // showContent(data) {
    //     data.forEach(function(user) {
    //         console.log(user);
    //     });
    // }


    //otra forma pudo ser asi:
    // la funcion es ANONIMA xq no tiene nombre
    // showContent(data) {
    //     data.forEach(this.receiveUser.bind(this));
    // }
    // receiveUser(user) {
    //     console.log(user);
    // }

    showContent(data) {
        super.showContent(data);
        data.forEach((user) => {
            var userView = new UserView(this.contentContainer, user, this.appManager);
        });

    }
    showUserPosts(user) {

    }
}