"use strict";
import { UserListViewController } from "./viewControllers/userList/userListViewController.js";
import { PostListViewController } from "./viewControllers/postList/postListViewController.js";

window.onload = init;

function init() {
    console.log('App running!');
    var parent = document.getElementById('appContainer');
    var userListViewController = new UserListViewController(parent);
    var postListViewController = new PostListViewController(parent);

}