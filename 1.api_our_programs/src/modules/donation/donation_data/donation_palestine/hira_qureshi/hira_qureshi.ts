import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Hira Qureshi",
        story:`I need you to stay here and donate to get my treatment of cancer ♋️ 😪 🍉👇`,
        youtube_channel:{
                src:"http://www.youtube.com/@Hira2233-r1q"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/xOS7-ME1xHg",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/AsmL5c3kvR-tIubJD-dhzRhPcKHUYwNbXPvd5CqsQP1ElONKLB8__gWtWHWsWzI3d_VRqOst=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=JXUVCRMXLNTWY"},

        ]
}

const hira_qureshi:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {hira_qureshi}