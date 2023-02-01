const mongoose = require('mongoose');
const { Schema } = mongoose;

const SSLCheckSchema = new Schema({
    monitor: {
        type: Schema.Types.ObjectId,
        ref: "Monitor",
        required: true
    },
    issuer: {
        type: String,
    },
    validFrom: {
        type: String,
    },
    validTo: {
        type: String,
    },
    protocol: {
        type: String,
    },
    notifyExpiration: {
        type: String
    }

})

const SSLCheck = mongoose.model("SSLCheck", SSLCheckSchema);

module.exports = SSLCheck;