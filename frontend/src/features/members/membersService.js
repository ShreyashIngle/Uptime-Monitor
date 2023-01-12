import { axiosPrivate } from "@/api/axios";


const getAllMembers = async (teamId) => {
  const response = await axiosPrivate.get(`/member/${teamId}`);
  return response.data;
};

const inviteMember = async (memberDetails) => {
  const response = await axiosPrivate.post("/member", memberDetails);
  return response.data;
};

const removeMember = async (memberDetails) => {
  const response = await axiosPrivate.post("/member/delete", memberDetails);
  return response.data;
};

const memberService = {
  getAllMembers,
  inviteMember,
  removeMember
};

export default memberService;
