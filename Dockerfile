FROM debian:latest

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y python3.7
RUN apt-get install -y python3-pip
RUN apt-get install -y git

COPY src/. /
COPY . /
WORKDIR /

RUN pip3 install -r requirements.txt

ENTRYPOINT ["python3"]
CMD ["SoundcloudController.py"]