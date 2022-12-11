# mhacks-aws-s3-multer-pug


# 🚀 The official MHacks frontend and backend 🚀

https://github.com/coding-to-music/mhacks-aws-s3-multer-pug

https://mhacks-aws-s3-multer-pug.vercel.app


From / By https://github.com/mhacks/mhacks-web

https://mhacks.org/

## Environment variables:

```java
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/mhacks-aws-s3-multer-pug.git
git push -u origin main
```

# MHacks Web

## Getting up and running

At MHacks, we utilize Docker to containerize our application so that whether you are using linux, macOS, or Windows, you run exactly the same as everyone else. There are a lot of other advantages to docker too. All the dependencies are automatically installed for you, it is great for ease of deployment, it provides good isolation and security, and much more.

1. [Get Docker](https://docs.docker.com/engine/getstarted/step_one/#/step-1-get-docker)
2. [Get Docker Compose](https://docs.docker.com/compose/install/)
4. Clone this repo: `git clone https://github.com/mhacks/mhacks-web`
4. Change directory to the deploy repo: `cd mhacks-web/deploy/`
5. Start whatever environment you want
    - Development
        - `docker-compose -f development.yml up -d`
        - **NOTE: Your git repo will be linked to the development environment, so your local changes will be reflected with a container restart**
    - Production (You're gonna need some more env data)
        - `docker-compose -f production.yml up -d`
        - **NOTE: This takes care of setting up NGINX AND LetsEncrypt with the appropriate hosts (and autorenewal!).**
6. Access `http://localhost:3000` and start developing!

## Useful Commands

#### Seeing container output
This will start the necessary containers and hook you into their output. In addition to being able to see what is happening, you can stop the containers easily by just Ctrl-Cing out of them.

`DEBUG=* docker-compose -f development.yml up -d`

#### Working in backend
When working exclusively on backend, you don't want to wait for Webpack to reload the frontend on each save, especially when you haven't changed anything there.

`APIWORK=true docker-compose -f development.yml up -d`

