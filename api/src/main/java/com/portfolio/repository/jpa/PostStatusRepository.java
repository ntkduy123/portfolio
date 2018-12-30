package com.portfolio.repository.jpa;

import com.portfolio.domain.PostStatus;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

public interface PostStatusRepository extends CrudRepository<PostStatus, Long>, QueryDslPredicateExecutor<PostStatus>
{
}
