package com.portfolio.controller;

import com.google.common.collect.Lists;
import com.portfolio.EventList;
import com.portfolio.constant.PostStatusList;
import com.portfolio.domain.Post;
import com.portfolio.domain.PostCategory;
import com.portfolio.domain.PostStatus;
import com.portfolio.listener.Intent;
import com.portfolio.repository.jpa.PostCategoryRepository;
import com.portfolio.repository.jpa.PostRepository;
import com.portfolio.repository.jpa.PostStatusRepository;
import com.portfolio.service.PostService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Objects;

@Controller
@ResponseBody
@RequestMapping("/api/post")
public class PostController extends BaseController {

    @Resource
    private PostRepository postRepository;

    @Resource
    private PostStatusRepository postStatusRepository;

    @Resource
    private PostCategoryRepository postCategoryRepository;

    @Resource
    private PostService postService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List getPost() {
        List<Post> postList = Lists.newArrayList(postRepository.findAll());
        return postList;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Post getPostById(@PathVariable("id") Long id) {
        return postRepository.findOne(id);
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity addPost(@RequestBody Post post) {
        if (Objects.isNull(post.getCategory())) {
            PostCategory category = postCategoryRepository.findOne(post.getId());
            post.setCategory(category);
        }

        postService.addPost(post);
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "", method = RequestMethod.DELETE)
    public ResponseEntity removePost(@RequestBody Long id) {
        postService.removePost(id);
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/active", method = RequestMethod.POST)
    public ResponseEntity activePost(@RequestBody Post post) {
        post.setStatus(postStatusRepository.findOne(PostStatusList.ACTIVE));
        postService.triggerEvent(new Intent(
                EventList.UPDATE_POST_STATUS,
                post
        ));
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/status" , method = RequestMethod.GET)
    public List getPostStatus() {
        List<PostStatus> postStatusList = Lists.newArrayList(postStatusRepository.findAll());
        return postStatusList;
    }

    @RequestMapping(value = "/category" , method = RequestMethod.GET)
    public List getPostCategory() {
        List<PostCategory> postCategoryList = Lists.newArrayList(postCategoryRepository.findAll());
        return postCategoryList;
    }

    @RequestMapping(value = "/status", method = RequestMethod.POST)
    public ResponseEntity addPostStatus(@RequestBody PostStatus postStatus) {
        postStatusRepository.save(postStatus);
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/category", method = RequestMethod.POST)
    public ResponseEntity addPostCategory(@RequestBody PostCategory postCategory) {
        postCategoryRepository.save(postCategory);
        return ResponseEntity.ok().build();
    }
}
