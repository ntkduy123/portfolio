package com.portfolio.repository.jpa;

import com.portfolio.domain.PostCategory;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

public interface PostCategoryRepository extends CrudRepository<PostCategory, Long>, QueryDslPredicateExecutor<PostCategory>
{
}
