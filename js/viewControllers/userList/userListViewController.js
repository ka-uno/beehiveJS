import { ViewController } from "../viewController.js";
import { UserListService } from "./userListService.js";

export class UserListViewController extends ViewController {
    constructor(parent) {
        super(parent);
        this.service = new UserListService(this);
        this.mainContainer.classList.add('userListViewController');
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
        this.contentContainer.classList.remove('contentContainer_loading');
        this.contentContainer.innerHTML = '';

        data.forEach((user) => {

            //crea los p o div
            var userContainer = document.createElement('div');

            // rellena los p
            userContainer.innerHTML = user.name;
            userContainer.className = 'userListViewController_userContainer';
            // mete el username dentro del contentContainer
            this.contentContainer.appendChild(userContainer);
            //console.log(data)
        });
    }
}