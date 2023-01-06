import { axiosPrivate } from "../../api/axios";

const respondToNotification = async (payload) => {
    const response = await axiosPrivate.post('/invitation', payload);
    return response.data;
}

const invitationService = {
    respondToNotification
}

export default invitationService