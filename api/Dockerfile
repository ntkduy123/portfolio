FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/portfolio-0.0.1-SNAPSHOT.jar portfolio-0.0.1-SNAPSHOT.jar
CMD ["java", "-Dspring.profiles.active=production", "-jar", "portfolio-0.0.1-SNAPSHOT.jar"]