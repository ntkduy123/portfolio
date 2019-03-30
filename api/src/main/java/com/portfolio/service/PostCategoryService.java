package com.portfolio.service;

import com.portfolio.domain.PostCategory;
import com.portfolio.repository.jpa.PostCategoryRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class PostCategoryService {

    @Resource
    private PostCategoryRepository postCategoryRepository;

    public Iterable<PostCategory> findAllPostCategory() {
        return postCategoryRepository.findAll();
    }
}
