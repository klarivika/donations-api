import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"saad from gaza",
        story:"Our kids don’t dream of toys anymore —they dream of food, peace, and tomorrow.Please help us give them that chance. 🕊️",
        youtube_channel:{
                src:"http://www.youtube.com/@Saadfromgaza-l6t"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/0RKOW9aCXWo",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/8z9J4tuImr-wSWJe0UpFMbneXDAcb1eFib7S2b7VckkuhFVcqR4HYZh0hBDq-4kQODxhYfPsKg=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.donorbox,url:"https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqa1hlbGV4ZWpCQXFPSUZOUmU5VDBzQjhwQ0Exd3xBQ3Jtc0tuSll4anU2Si1ZQUxRR3ZlTkVOZ0dId1QwbzhNZG5JakFkb21MbHd1Y2M4VlFKdWxvN3R2S09SUW1pS2RKRTZrdkI5b1BWdU1aZFZJX1hpOUtMdUs2cG5SS1F3dkdrV01SZHd6S0szN1ZySjhiY0dGbw&q=https%3A%2F%2Fdonorbox.org%2Fplease-stand-with-us"},

        ]
}

const saad_from_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {saad_from_gaza}