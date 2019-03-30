package com.portfolio.service;

import com.portfolio.constant.PostStatusList;
import com.portfolio.domain.Post;
import com.portfolio.domain.PostImage;
import com.portfolio.domain.PostStatus;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.jpa.PostImageRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.UUID;

@Service
public class PostImageService {

    @Resource
    private PostService postService;

    @Resource
    private PostImageRepository postImageRepository;

    public PostImage saveOrUpdatePostImage(PostImage postImage) {
        return postImageRepository.save(postImage);
    }

    public void deletePostImageById(Long id) {
        PostImage postImage = postImageRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Post Image ID %s does not exist", id)));

        postImageRepository.delete(postImage);
    }

    public PostImage findPostImageById(Long id) {
        return postImageRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Post Image ID %s does not exist", id)));
    }

    public String generatePostImageName(String originalName) {
        return String.format("%s_%s", UUID.randomUUID(), originalName);
    }

}
