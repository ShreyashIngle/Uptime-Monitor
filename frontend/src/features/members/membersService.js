import { axiosPrivate } from "@/api/axios";

const getAllMembers = async (teamId) => {
  await axiosPrivate.get("/member");
};

const inviteMember = async (memberDetails) => {
  await axiosPrivate.post("/member", memberDetails);
};

const memberService = {
  getAllMembers,
  inviteMember,
};

export default memberService;
