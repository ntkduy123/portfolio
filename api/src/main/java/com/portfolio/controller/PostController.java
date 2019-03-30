package com.portfolio.controller;

import com.portfolio.domain.Post;
import com.portfolio.domain.PostCategory;
import com.portfolio.domain.PostImage;
import com.portfolio.domain.PostStatus;
import com.portfolio.dto.ResponseMessage;
import com.portfolio.service.*;
import com.portfolio.util.FileUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.io.File;

@Controller
@ResponseBody
@RequestMapping("/api/post")
public class PostController {

    @Resource
    private PostService postService;

    @Resource
    private MapValidationErrorService mapValidationErrorService;

    @Resource
    private AmazonS3Service amazonS3Service;

    @Resource
    private PostImageService postImageService;

    @Resource
    private PostCategoryService postCategoryService;

    @Resource
    private PostStatusService postStatusService;

    @GetMapping("")
    public Iterable<Post> getAllPosts() {
        return postService.findAllPosts();
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable("id") Long id) {
        return postService.findPostById(id);
    }

    @PostMapping("")
    public ResponseEntity<?> createPost(@Valid @RequestBody Post post, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap!=null) return errorMap;

        Post newPost = postService.saveOrUpdatePost(post);
        System.out.println(newPost.getPostCategory().getId());
        for (PostImage postImage : post.getPostImages()) {
            if (postImage.getId() == null) {
                postImage.setPost(newPost);
                PostImage test = postImageService.saveOrUpdatePostImage(postImage);
            }
        }

        return new ResponseEntity<>(newPost, HttpStatus.CREATED);
    }

    @PostMapping("/image")
    public ResponseEntity<?> createPostImage(@RequestParam("image") MultipartFile multipartFile) {
        File file;
        String name;

        try {
            name = postImageService.generatePostImageName(multipartFile.getOriginalFilename());
            file = FileUtil.convertMultiPartToFile(multipartFile, name);
        } catch (Exception e) {
            return new ResponseEntity<>(new ResponseMessage("Error uploading images"), HttpStatus.BAD_REQUEST);
        }

        String url = amazonS3Service.upload(file);
        PostImage postImage = new PostImage();
        postImage.setName(name);
        postImage.setUrl(url);

        return new ResponseEntity<>(postImage, HttpStatus.CREATED);
    }

    @DeleteMapping("/image/{id}")
    public ResponseEntity<?> deletePostImage(@PathVariable("id") Long id) {
        postImageService.deletePostImageById(id);

        return new ResponseEntity<>(new ResponseMessage(String.format("Post Image ID %s was deleted", id)), HttpStatus.OK);
    }

    @GetMapping(value = "/status")
    public Iterable<PostStatus> getPostStatus() {
        return postStatusService.findAllPostStatus();
    }

    @GetMapping(value = "/category")
    public Iterable<PostCategory> getPostCategory() {
        return postCategoryService.findAllPostCategory();
    }
}
