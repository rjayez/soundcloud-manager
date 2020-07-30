FROM debian:latest

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y python3.7
RUN apt-get install -y python3-pip
RUN apt-get install -y git
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt-get install -y nodejs

COPY src /src
COPY client /client
COPY . /

WORKDIR /

RUN pip3 install -r requirements.txt

WORKDIR /src

ENTRYPOINT python3
CMD ["SoundcloudController.py"]

WORKDIR /client
ENTRYPOINT npm
CMD ["start"]



