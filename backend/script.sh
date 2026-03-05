#!/bin/bash
apt-get update -y
apt-get install docker.io git -y

systemctl enable docker
systemctl start docker

cd /home/ubuntu

git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git

cd YOUR_REPO/backend

docker build -t docker-app .

docker run -d -p 5000:5000 \
-e RDS_HOST=your-rds-endpoint.rds.amazonaws.com \
-e RDS_USER=admin \
-e RDS_PASSWORD=admin123 \
-e RDS_DB=mydb \
docker-app