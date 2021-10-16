FROM node:16-bullseye
WORKDIR /Morse
COPY . .
RUN npm install -g npm@7.24.2
RUN npm i node
RUN apt update
RUN apt install net-tools -y
RUN apt install openssh-server -y
CMD ["node", "index.js"]

RUN useradd -rm -d /home/randy -s /bin/bash randy
RUN echo 'randy:randy' | chpasswd

RUN apt-get -qq update \
    && apt-get -qq --no-install-recommends install vim-tiny\
    && apt-get -qq --no-install-recommends install sudo\
    && apt-get -qq --no-install-recommends install python3-pip\
    && apt-get -qq clean    \
    && rm -rf /var/lib/apt/lists/*

RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed 's@session\srequired\spam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd
ENTRYPOINT service ssh restart && bash
