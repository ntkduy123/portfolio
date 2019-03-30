package com.portfolio.repository.jpa;


import com.portfolio.domain.PostImage;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostImageRepository extends CrudRepository<PostImage, Long>
{
}
