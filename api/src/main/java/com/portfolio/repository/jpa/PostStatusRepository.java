package com.portfolio.repository.jpa;

import com.portfolio.domain.PostStatus;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostStatusRepository extends CrudRepository<PostStatus, Long>
{
}
