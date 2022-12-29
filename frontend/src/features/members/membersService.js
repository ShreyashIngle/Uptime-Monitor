import { axiosPrivate } from "@/api/axios";
import { toast } from "react-toastify";

const getAllMembers = async (teamId) => {
  await axiosPrivate.get("/member");
};

const inviteMember = async (memberDetails) => {
  let response;
  await axiosPrivate
    .post("/member", memberDetails)
    .then((res) => {
      res = response;
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
