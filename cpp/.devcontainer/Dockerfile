FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install -y build-essential gdb \
    && apt-get install -y clang-8 lldb-8 lld-8 wget

RUN wget https://github.com/Kitware/CMake/releases/download/v3.15.2/cmake-3.15.2-Linux-x86_64.sh \
    && sh ./cmake-3.15.2-Linux-x86_64.sh --skip-license \
    && rm ./cmake-3.15.2-Linux-x86_64.sh

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
