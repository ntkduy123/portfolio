package com.portfolio.listener;

import com.portfolio.domain.Post;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class PostStatusListener {

//    @Resource
//    private PostService postService;
//
//    @Async
//    @EventListener
//    public void onEventTriggered(Intent intent) {
//        Post post = (Post) intent.getContext();
//        postService.updatePostStatus(post.getId(), post.getStatus().getId());
//    }
}
