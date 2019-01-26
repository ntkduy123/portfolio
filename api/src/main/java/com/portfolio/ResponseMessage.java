package com.portfolio;

public class ResponseMessage {

    private String message;

    private Long postId;

    public ResponseMessage(String message, Long postId) {
        this.message = message;
        this.postId = postId;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
