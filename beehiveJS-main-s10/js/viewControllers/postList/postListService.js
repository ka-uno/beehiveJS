import { Comment } from "../../models/comment.js";
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
        for (const id in responseData) { //console.log(responseData[id]);
            var comments = [];
            var postData = responseData[id];
            for (const commentId in postData.comments) {
                const commentData = postData.comments[commentId];
                //console.log(commentData);
                var comment = new Comment(commentId, commentData.body, commentData.title, commentData.user);
                ///console.log(comment);
                comments.push(comment);
            }

            var post = new Post(id, postData.body, comments, postData.title);
            data.push(post);
            //console.log(post);

            // const element = array[index];

        }
        this.viewController.showContent(data);
    }
}