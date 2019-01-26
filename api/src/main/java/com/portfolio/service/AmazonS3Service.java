package com.portfolio.service;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class AmazonS3Service extends AmazonService {

    @Value("${aws.s3.endpoint}")
    private String s3Endpoint;

    private String IMAGE_PATH = "images/";

    @Override
    public void setup() {
        AWSCredentials awsCredentials = new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY);
    }

    public String upload(File file) {
        AWSCredentials awsCredentials = new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY);

        AmazonS3 amazonS3 = AmazonS3ClientBuilder
                .standard()
                .withRegion(Regions.AP_SOUTHEAST_1)
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();

        String fileName = file.getName();
        amazonS3.putObject(new PutObjectRequest(
                BUCKET_NAME, fileName, file).withCannedAcl(CannedAccessControlList.PublicRead));
        file.delete();
        return amazonS3.getUrl(BUCKET_NAME, fileName).toString();
    }
}
