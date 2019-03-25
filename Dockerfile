#Passo 1 > $ docker build -t accont .
#Passo 2 > $ docker run -d -p 80:80 -p 3306:3306 accont
#Para deletar pegue o numero que o docker retornou apos o comando e
#Parar > $ docker stop numeroaqui
#Deletar > $ docker rm numeroaqui

FROM tutum/lamp
MAINTAINER PEDRO IVO
RUN rm -fr /app
COPY . /app/
WORKDIR /app/
EXPOSE 80 3306
CMD ["/run.sh"]
