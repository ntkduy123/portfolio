package com.portfolio.service;

public abstract class AmazonService {

    protected String ACCESS_KEY = System.getenv("AWS_ACCESS_KEY_ID");

    protected String SECRET_KEY = System.getenv("AWS_SECRET_ACCESS_KEY");

    protected String BUCKET_NAME = System.getenv("AWS_BUCKET_NAME");

    abstract public void setup();
}
