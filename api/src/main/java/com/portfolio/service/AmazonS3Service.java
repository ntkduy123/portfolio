package com.portfolio.service;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.util.FileUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

@Service
public class AmazonS3Service extends AmazonService {

    @Value("${aws.s3.endpoint}")
    private String s3Endpoint;

    private String IMAGE_PATH = "images/";

    private AmazonS3 amazonS3;

    @Override
    public void setup() {
        AWSCredentials awsCredentials = new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY);
        amazonS3 = AmazonS3ClientBuilder
                .standard()
                .withRegion(Regions.AP_SOUTHEAST_1)
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();
    }

    public String upload(File file) {
        setup();

        amazonS3.putObject(new PutObjectRequest(BUCKET_NAME, file.getName(), file).withCannedAcl(CannedAccessControlList.PublicRead));
        file.delete();
        return amazonS3.getUrl(BUCKET_NAME, file.getName()).toString();
    }

    public void delete(String fileName) {
        setup();

        amazonS3.deleteObject(new DeleteObjectRequest(
                BUCKET_NAME, fileName
        ));
    }
}
