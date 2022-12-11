# mhacks-aws-s3-multer-pug


# 🚀 The official MHacks frontend and backend 🚀

https://github.com/coding-to-music/mhacks-aws-s3-multer-pug

https://mhacks-aws-s3-multer-pug.vercel.app


From / By https://github.com/mhacks/mhacks-web

https://mhacks.org/

## Environment variables:

module.exports = {
    start_server: parseBool(process.env.START_SERVER, true),
    app_name: process.env.APP_NAME || 'MHacks',
    start_date: new Date(process.env.START_DATE || '1-1-20'),
    end_date: new Date(process.env.END_DATE || '1-1-20'),
    is_live_page_enabled: parseBool(process.env.IS_LIVE_PAGE_ENABLED, false),
    is_application_open: parseBool(process.env.IS_APPLICATION_OPEN, true),
    env: process.env.NODE_ENV || 'development',
    development: process.env.NODE_ENV !== 'production',
    production: process.env.NODE_ENV === 'production',
    service: process.env.SERVICE || 'web',
    host: process.env.HOST || 'https://mhacks.org',
    shortener_host: process.env.SHORTENER_HOST || 'https://mha.cx',
    secret: process.env.SECRET || 'mhacks',
    mongo_hostname: process.env.MONGO_HOSTNAME || 'mhacks_db',
    backend_db: process.env.BACKEND_DB || 'mhacks_11_backend',
    sessions_db: process.env.SESSIONS_DB || 'mhacks_11_sessions',
    api_work: parseBool(process.env.APIWORK, false),
    api_spaces: process.env.APISPACES || 4,
    server_port: process.env.PORT || 3000,
    max_tokens: process.env.MAX_TOKENS || 10,
    token_expiration: process.env.TOKEN_EXPIRATION || 28, // days
    mailchimp_token: process.env.MAILCHIMP_TOKEN || '',
    mailchimp_listid: process.env.MAILCHIMP_LISTID || '382fb6e35d',
    mandrill_token: process.env.MANDRILL_TOKEN || '',
    email_from: process.env.EMAIL_FROM || 'hackathon@umich.edu',
    email_from_name: process.env.EMAIL_FROM_NAME || 'MHacks',
    confirmation_email_template:
        process.env.CONFIRMATION_EMAIL_TEMPLATE || 'confirmation_instructions',
    confirmation_email_subject:
        process.env.CONFIRMATION_EMAIL_SUBJECT ||
        'Confirm Your Email for MHacks',
    password_reset_email_template:
        process.env.PASSWORD_RESET_EMAIL_TEMPLATE || 'change_password',
    password_reset_email_subject:
        process.env.PASSWORD_RESEST_EMAIL_SUBJECT ||
        'Reset Your MHacks Password',
    deployment_secret: process.env.DEPLOYMENT_SECRET || 'some_secret',
    deployment_users: (
        process.env.DEPLOYMENT_USERS ||
        'antoniomika,konnor,roball,mwilson,sbein,shashank_murching,hoffcar,rjmarzec'
    ).split(','),
    deploy: {
        staging: {
            host: process.env.STAGING_HOST || 'staging0.aws.mhacks.org',
            user: process.env.STAGING_USER || 'core',
            privateKey: process.env.STAGING_PRIVATEKEY || ''
        },
        production: {
            host: process.env.PRODUCTION_HOST || 'prod0.aws.mhacks.org',
            user: process.env.PRODUCTION_USER || 'core',
            privateKey: process.env.PRODUCTION_PRIVATEKEY || ''
        }
    },
    slack_token: process.env.SLACK_TOKEN || '',
    slackbot_token: process.env.SLACKBOT_TOKEN || '',
    slack_notifications_channel:
        process.env.SLACK_NOTIFICATIONS_CHANNEL || '#notifications',
    slack_mentorship_channel:
        process.env.SLACK_MENTORSHIP_CHANNEL || '#mentorship',
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME || 'mhacks-11',
    newrelic_enabled: parseBool(process.env.NEWRELIC_ENABLED, false),
    newrelic_license_key: process.env.NEWRELIC_LICENSE_KEY || '',
    newrelic_app_name: process.env.NEWRELIC_APP_NAME || 'mhacks-web',
    form_types: {
        TEXT: 0,
        LINK: 1,
        DATE: 2,
        SELECT: 3,
        NUMBER: 4,
        ESSAY: 5,
        BOOLEAN: 6,
        SECTIONHEADER: 7,
        BUFFER: 8,
        ARRAY: 9,
        SUBMIT: 10,
        FILE: 11,
        DATETIME: 12
    },
    color_dark: process.env.COLOR_DARK || '#0A192E',
    color_light: process.env.COLOR_LIGHT || '#ffffff',
    push_notifications: {
        enabled: parseBool(process.env.PUSH_NOTIS_ENABLED, false),
        apns: {
            key: process.env.APNS_KEY || '',
            key_id: process.env.APNS_KEY_ID || '',
            team_id: process.env.APNS_TEAM_ID || '',
            topic: process.env.APNS_TOPIC || 'com.MPowered.MHacks',
            production:
                process.APNS_PRODUCTION ||
                (process.env.HOST
                    ? process.env.HOST.indexOf('staging') === -1
                    : process.env.NODE_ENV === 'production')
        },
        gcm: {
            id: process.env.GCM_ID || ''
        }
    },
    passbook: {
        enabled: parseBool(process.env.PASSBOOK_ENABLED, false),
        secret: process.env.PASSBOOK_SECRET || '',
        directory: process.env.PASSBOOK_DIRECTORY || '/usr/src/app/keys',
        description: process.env.PASSBOOK_DESCRIPTION || 'MHacks Ticket',
        logo_url:
            process.env.PASSBOOK_LOGO_URL ||
            '/usr/src/app/static/m12/media.jpg',
        logo_title_url:
            process.env.PASSBOOK_LOGO_TITLE_URL ||
            '/usr/src/app/static/m12/media.jpg',
        team_id: process.env.PASSBOOK_TEAM_ID || '478C74MJ7T',
        organization_name: process.env.PASSBOOK_ORGANIZATION_NAME || 'MHacks',
        label_color: process.env.PASSBOOK_LABEL_TEXT || 'rgba(0, 0, 0, 0.6)',
        store_identifier: process.env.PASSBOOK_STORE_ID || 955659359,
        beacon:
            process.env.PASSBOOK_BEACON ||
            '5759985C-B037-43B4-939D-D6286CE9C941',
        beacon_text:
            process.env.PASSBOOK_BEACON_DESCRIPTION || 'You are near a scanner',
        locations: JSON.parse(
            process.env.PASSBOOK_LOCATION ||
                '[{"lat":42.2693618,"lng":-83.7446532,"text":"MHacks"},{"lat":42.2693618,"lng":-83.7446532,"text":"MHacks"},{"lat":42.2693618,"lng":-83.7446532,"text":"MHacks"}]'
        ),
        date: process.env.PASSBOOK_DATE || 'October 12-14',
        pass_type: process.env.PASSBOOK_PASS_TYPE || 'pass.com.MHacks.UserPass'
    },
    admin_name: process.env.ADMIN_NAME || 'Administrator',
    admin_email: process.env.ADMIN_EMAIL || 'hackathon@umich.edu',
    admin_password: process.env.ADMIN_PASSWORD || 'hunter2',
    site_association: (
        process.env.SITE_ASSOCIATION || '478C74MJ7T.com.MPowered.MHacks'
    ).split(','),
    game_max_quests: process.env.GAME_MAX_QUESTS || 3
};
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
## ncu Node Upgrade Version Packages

```
ncu
```

Output

```
Using yarn
Checking /mnt/volume_nyc1_01/mhacks-aws-s3-multer-pug/package.json
[====================] 99/99 100%

 @babel/core                                      ^7.5.5  →    ^7.20.5
 @babel/plugin-proposal-object-rest-spread        ^7.5.5  →    ^7.20.2
 @babel/preset-env                                ^7.5.5  →    ^7.20.2
 @babel/preset-react                              ^7.0.0  →    ^7.18.6
 @newrelic/native-metrics                         ^4.1.0  →     ^9.0.0
 archiver                                         ^3.0.3  →     ^5.3.1
 autoprefixer                                     ^9.6.1  →   ^10.4.13
 aws-sdk                                        ^2.503.0  →  ^2.1272.0
 babel-loader                                     ^8.0.6  →     ^9.1.0
 bcrypt                                           ^3.0.6  →     ^5.1.0
 body-parser                                     ^1.19.0  →    ^1.20.1
 clean-webpack-plugin                             ^3.0.0  →     ^4.0.0
 connect-history-api-fallback                     ^1.6.0  →     ^2.0.0
 connect-mongo                                    ^3.0.0  →     ^4.6.0
 connected-react-router                           ^6.5.2  →     ^6.9.3
 copy-webpack-plugin                              ^5.0.4  →    ^11.0.0
 css-loader                                       ^3.1.0  →     ^6.7.2
 escape-string-regexp                             ^2.0.0  →     ^5.0.0
 eslint                                           ^6.1.0  →    ^8.29.0
 eslint-plugin-react                             ^7.14.3  →   ^7.31.11
 express                                         ^4.17.1  →    ^4.18.2
 express-session                                 ^1.16.2  →    ^1.17.3
 fetch-intercept                                  ^2.3.1  →     ^2.4.0
 file-loader                                      ^4.1.0  →     ^6.2.0
 fuse.js                                          ^3.4.5  →     ^6.6.2
 history                                          ^4.7.2  →     ^5.3.0
 html-webpack-plugin                              ^3.2.0  →     ^5.5.0
 immutable                                  ^4.0.0-rc.12  →     ^4.1.0
 isomorphic-fetch                                 ^2.2.1  →     ^3.0.0
 json2csv                                         ^4.5.2  →     ^5.0.7
 lodash                                         ^4.17.19  →   ^4.17.21
 mailchimp-api-v3                                ^1.13.1  →    ^1.15.0
 mailgun.js                                       ^3.5.9  →     ^8.0.6
 mime                                             ^2.4.4  →     ^3.0.0
 mini-css-extract-plugin                          ^0.8.0  →     ^2.7.2
 mkdirp                                           ^0.5.1  →     ^1.0.4
 moment                                          ^2.24.0  →    ^2.29.4
 mongoose                                         ^5.7.5  →     ^6.8.0
 morgan                                           ^1.9.1  →    ^1.10.0
 multer-s3                                        ^2.9.0  →     ^3.0.1
 newrelic                                        ^5.10.0  →     ^9.7.2
 node-pushnotifications                          ^1.1.12  →     ^2.0.3
 node-ssh                                         ^6.0.0  →    ^13.0.0
 postcss-loader                                   ^3.0.0  →     ^7.0.2
 prettier                                        ^1.18.2  →     ^2.8.1
 prop-types                                      ^15.7.2  →    ^15.8.1
 pug                                              ^2.0.4  →     ^3.0.2
 qrcode                                           ^1.4.1  →     ^1.5.1
 react                                           ^16.8.6  →    ^18.2.0
 react-big-calendar                              ^0.22.0  →     ^1.5.2
 react-burger-menu                               ^2.6.10  →     ^3.0.8
 react-dom                                       ^16.8.6  →    ^18.2.0
 react-helmet                                     ^5.2.1  →     ^6.1.0
 react-hot-loader                               ^4.12.10  →    ^4.13.1
 react-intl                                       ^2.9.0  →     ^6.2.5
 react-list                                      ^0.8.11  →    ^0.8.17
 react-measure                                    ^2.3.0  →     ^2.5.2
 react-notification                               ^6.8.4  →     ^6.8.5
 react-redux                                      ^7.1.0  →     ^8.0.5
 react-router                                     ^5.0.1  →     ^6.4.5
 react-router-dom                                 ^5.0.1  →     ^6.4.5
 react-select                                      1.2.1  →      5.7.0
 react-table                                     ^6.10.0  →     ^7.8.0
 redux                                            ^4.0.4  →     ^4.2.0
 redux-persist                                   ^5.10.0  →     ^6.0.0
 redux-persist-transform-filter                  ^0.0.18  →    ^0.0.22
 redux-thunk                                      ^2.3.0  →     ^2.4.2
 sharp                                           ^0.23.0  →    ^0.31.2
 style-loader                                    ^0.23.1  →     ^3.3.1
 styled-components                                ^4.3.2  →     ^5.3.6
 swagger-ui-express                               ^4.0.7  →     ^4.6.0
 url-loader                                       ^2.1.0  →     ^4.1.1
 validator                                       ^11.1.0  →    ^13.7.0
 webpack                                         ^4.38.0  →    ^5.75.0
 webpack-cli                                      ^3.3.6  →     ^5.0.1
 webpack-dev-middleware                           ^3.7.0  →     ^6.0.1
 webpack-dev-server                               ^3.7.2  →    ^4.11.1
 webpack-hot-middleware                          ^2.25.0  →    ^2.25.3

Run ncu -u to upgrade package.json
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

