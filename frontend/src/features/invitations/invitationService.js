import { axiosPrivate } from "../../api/axios";

const respondToNotification = async (payload) => {
    const response = await axiosPrivate.post('/invitation', payload);
    return response.data;
}

const getAllInvitations = async (userId) => {
    const response = await axiosPrivate.get(`/invitation/${userId}`);
    console.log('response',response);
    return response.data;
}

const invitationService = {
    respondToNotification,
    getAllInvitations
}

export default invitationService