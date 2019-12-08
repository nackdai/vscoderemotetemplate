FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install -y curl wget build-essential

RUN wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key | apt-key add - \
    && apt-get update \
    && apt-get install -y clang-8 lldb-8 lld-8

ARG arch=x86_64-unknown-linux-gnu
ARG rustup_version=1.20.2
ARG rust_version=1.39.0

RUN echo "sha=\$1 \n\
echo \"\$sha *rustup-init\" | sha256sum -c -" > sha.sh \
    && chmod +x sha.sh

RUN wget https://static.rust-lang.org/rustup/archive/${rustup_version}/${arch}/rustup-init.sha256
RUN wget https://static.rust-lang.org/rustup/archive/${rustup_version}/${arch}/rustup-init
RUN xargs --arg-file=rustup-init.sha256 ./sha.sh \
    && chmod +x rustup-init \
    && ./rustup-init -y --no-modify-path --default-toolchain ${rust_version} \
    && rm rustup-init rustup-init.sha256 sha.sh

ENV PATH=/root/.cargo/bin:$PATH
