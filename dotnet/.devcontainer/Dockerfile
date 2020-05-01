FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install -y wget
RUN wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb \
    && dpkg -i packages-microsoft-prod.deb

RUN apt-get install -y apt-transport-https \
    && apt-get update \
    && apt-get install -y dotnet-sdk-3.0 dotnet-runtime-3.0

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
