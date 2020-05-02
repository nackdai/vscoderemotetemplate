FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install -y curl build-essential

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash \
    && apt-get install -y nodejs

RUN npm install -g typescript

# Clean up
RUN apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*

EXPOSE 80
