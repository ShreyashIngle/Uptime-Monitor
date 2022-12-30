import { axiosPrivate } from "@/api/axios";
import { toast } from "react-toastify";

const getAllMembers = async (teamId) => {
  const response = await axiosPrivate.get(`/member/${teamId}`);
  return response.data;
};

const inviteMember = async (memberDetails) => {
  let response;
  await axiosPrivate
    .post("/member", memberDetails)
    .then((res) => {
      response = res;
      toast.success("Member added successfully");
    })
    .catch((error) => {
      toast.error(error.response.data.message);
    });

  return response.data;
};

const memberService = {
  getAllMembers,
  inviteMember,
};

export default memberService;
