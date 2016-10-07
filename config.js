var db = process.env.NODE_ENV === 'production' ?
    'mongodb://localhost/music':
exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL || db;
exports.PORT = process.env.PORT || 8080;
