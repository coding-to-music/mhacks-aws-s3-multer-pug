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

function parseBool(value, default_value) {
    if (typeof value === 'undefined') {
        return default_value;
    } else {
        return value === 'true';
    }
}
