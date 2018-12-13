FROM golang:latest AS builder


# Download and install the latest release of dep
ADD https://github.com/golang/dep/releases/download/v0.4.1/dep-linux-amd64 /usr/bin/dep
RUN chmod +x /usr/bin/dep

# Copy the code from the host and compile it
WORKDIR $GOPATH/src/github.com/me/dev
COPY ./api/Gopkg.toml ./api/Gopkg.lock ./
RUN dep ensure --vendor-only
COPY ./api ./
RUN go build ./webservice.go
CMD ["./webservice"]

# RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix nocgo -o /app .

# FROM alpine
# COPY --from=builder /app ./
# EXPOSE 8080
# CMD ["./app"]
