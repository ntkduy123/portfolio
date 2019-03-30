package com.portfolio.repository.jpa;


import com.portfolio.domain.Post;
import com.portfolio.domain.PostCategory;
import com.portfolio.domain.PostStatus;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends CrudRepository<Post, Long>
{
}
