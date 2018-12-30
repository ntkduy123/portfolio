package com.portfolio.repository.jpa;


import com.portfolio.domain.Post;
import com.portfolio.domain.PostCategory;
import com.portfolio.domain.PostStatus;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepository extends CrudRepository<Post, Long>, QueryDslPredicateExecutor<Post>
{
    List<Post> findByCategory(PostCategory category);

    List<Post> findByStatus(PostStatus status);
}
