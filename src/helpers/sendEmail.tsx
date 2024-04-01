import axios from "axios";

export async function  sendEmail(data:object) {
    const res = await axios
    .post("/api/email", {
      data,
    })
    console.log(res)
    if(res.status == 200)
    {
        return true
    }

    return false;


}
