package com.portfolio.repository.jpa;

import com.portfolio.domain.PostCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostCategoryRepository extends CrudRepository<PostCategory, Long>
{
}
