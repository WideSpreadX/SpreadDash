const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    skill_level: {
        type: Number,
        required: true
    },
    lessons: [String],
    completion_cert: Boolean,
    cert_name: String,
    teacher: String,
    teacher_aide: [String]

});

const Classes = mongoose.model("Classes", ClassSchema);

module.exports = Classes;