package com.portfolio.service;

import com.portfolio.domain.PostStatus;
import com.portfolio.repository.jpa.PostStatusRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class PostStatusService {

    @Resource
    private PostStatusRepository postStatusRepository;

    public Iterable<PostStatus> findAllPostStatus() {
        return postStatusRepository.findAll();
    }

}
