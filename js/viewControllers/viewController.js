export class ViewController {
    constructor(parent) {
        this.parent = parent;
        this.service = null;

        this.mainContainer = document.createElement("div");
        this.navbarContainer = document.createElement("div");
        this.fade = document.createElement("div");
        this.contentContainer = document.createElement("div");
        this.parent.appendChild(this.mainContainer);

        this.mainContainer.appendChild(this.navbarContainer);
        this.mainContainer.appendChild(this.contentContainer);
        this.mainContainer.appendChild(this.fade);
        this.mainContainer.className = 'mainContainer';

        this.navbarContainer.className = 'navbarContainer';
        this.fade.className = 'viewController_fade';
        this.contentContainer.className = 'contentContainer';

        this.contentContainer.innerHTML = 'Loading...';
        this.contentContainer.classList.add('contentContainer_loading');
    }

    showContent(data) {

    }


    hide() {

    }

    show() {

    }
}