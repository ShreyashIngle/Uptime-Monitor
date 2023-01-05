const mongoose = require('mongoose');


const InvitationSchema = mongoose.Schema({
    sender: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    receiver: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    teamId: {
        type: mongoose.Types.ObjectId,
        ref: "Team",
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['accepted', 'rejected', 'pending']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Invitation', InvitationSchema);
