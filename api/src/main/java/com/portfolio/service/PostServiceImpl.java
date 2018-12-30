package com.portfolio.service;

import com.google.common.collect.Lists;
import com.portfolio.constant.PostStatusList;
import com.portfolio.domain.Post;
import com.portfolio.domain.PostStatus;
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
public class PostServiceImpl implements PostService {

    @Resource
    private PostRepository postRepository;

    @Resource
    private PostStatusRepository postStatusRepository;

    @Resource
    private PostCategoryRepository postCategoryRepository;

    @Resource
    private ApplicationEventPublisher eventPublisher;

    @Override
    public Post addPost(Post post) {
        if (Objects.isNull(post.getStatus())) {
            post.setStatus(postStatusRepository.findOne(PostStatusList.PENDING));
        }

        return postRepository.save(post);
    }

    @Override
    public List<Post> getPostByStatus(Long statusId) {
        PostStatus status = postStatusRepository.findOne(statusId);
        return Lists.newArrayList(postRepository.findByStatus(status));
    }

    @Override
    public Post updatePostStatus(Long postId, Long statusId) {
        Post post = postRepository.findOne(postId);
        post.setStatus(postStatusRepository.findOne(statusId));
        return postRepository.save(post);
    }

    @Override
    public Post removePost(Long postId) {
        return this.updatePostStatus(postId, PostStatusList.INACTIVE);
    }

    @Override
    public void triggerEvent(Intent event) {
        eventPublisher.publishEvent(event);
    }
}
