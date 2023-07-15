FROM ubuntu
RUN apt update && apt install ubuntu -y && install openjdk-11-dev 
ADD https://dlcdn.apache.org/maven/maven-3/3.9.3/binaries/apache-maven-3.9.3-bin.tar.gz
