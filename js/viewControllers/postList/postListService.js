import { Post } from "../../models/post.js";
import { Service } from "../service.js";

export class PostListService extends Service {
    constructor(viewController, params) {
        super(viewController);
        this.download(params);
    }
    downloadCompleted(e) {
        var data = []
        var request = e.target;
        var responseData = JSON.parse(request.response);
        for (const commentId in responseData) {
            var postData = responseData[id];
            const element = array[index];

        }
    }
}