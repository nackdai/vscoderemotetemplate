FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install -y python3.7  python3.7-dev python3.7-distutils curl build-essential
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
RUN python3.7 get-pip.py --user
ENV PATH ${PATH}:/root/.local/bin

RUN pip3.7 install pylint black flake8
