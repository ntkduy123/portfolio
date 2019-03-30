package com.portfolio.service;

import com.portfolio.constant.PostStatusList;
import com.portfolio.domain.Post;
import com.portfolio.domain.PostCategory;
import com.portfolio.domain.PostImage;
import com.portfolio.domain.PostStatus;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.listener.Intent;
import com.portfolio.repository.jpa.PostCategoryRepository;
import com.portfolio.repository.jpa.PostRepository;
import com.portfolio.repository.jpa.PostStatusRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Objects;

@Service
public class PostService {

    @Resource
    private PostRepository postRepository;

    @Resource
    private PostStatusRepository postStatusRepository;

    @Resource
    private PostCategoryRepository postCategoryRepository;

    @Resource
    private ApplicationEventPublisher eventPublisher;

    public Post saveOrUpdatePost(Post post) {
        Long postCategoryId = post.getPostCategory().getId();
        PostCategory postCategory = postCategoryRepository
                .findById(postCategoryId)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Post Category ID %s does not exist", postCategoryId)));
        post.setPostCategory(postCategory);

        Long postStatusId = PostStatusList.PENDING;
        PostStatus postStatus = postStatusRepository
                .findById(postStatusId)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Post Status ID %s does not exist", postStatusId)));
        post.setPostStatus(postStatus);

        return postRepository.save(post);
    }

    public Iterable<Post> findAllPosts() {
        return postRepository.findAll();
    }

    public Post findPostById(Long id) {
        return postRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        String.format("Post ID %s does not exist", id))
                );
    }

//    @Override
//    public Post addPost(Post post) {
//        if (Objects.isNull(post.getStatus())) {
//            post.setStatus(postStatusRepository.findById(PostStatusList.PENDING));
//        }
//
//        return postRepository.save(post);
//    }
//
//    @Override
//    public Iterable<Post> getPostByStatus(Long statusId) {
//        PostStatus status = postStatusRepository.findById(statusId);
//        return status;
//    }
//
//    @Override
//    public Post updatePostStatus(Long postId, Long statusId) {
//        Post post = postRepository.findById(postId);
//        post.setStatus(postStatusRepository.findById(statusId));
//        return postRepository.save(post);
//    }
//
//    @Override
//    public Post removePost(Long postId) {
//        return this.updatePostStatus(postId, PostStatusList.INACTIVE);
//    }
//
//    @Override
//    public void triggerEvent(Intent event) {
//        eventPublisher.publishEvent(event);
//    }
}
