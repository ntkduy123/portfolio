package com.portfolio.service;

import com.portfolio.domain.Post;
import com.portfolio.listener.Intent;

import java.util.List;

public interface PostService {

    Post addPost(Post post);

    List<Post> getPostByStatus(Long statusId);

    Post updatePostStatus(Long postId, Long statusId);

    Post removePost(Long postId);

    void triggerEvent(Intent event);
}
