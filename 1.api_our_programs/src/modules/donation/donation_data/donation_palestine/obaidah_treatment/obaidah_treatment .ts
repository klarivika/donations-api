import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Obaidah Treatment ",
        story:`Please donate for me & my 5 family members
Line 22 on medical list on OOB..Donate 👇👇`,
        youtube_channel:{
                src:"http://www.youtube.com/@Obaidah.treatment"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/KPos4FogFHs",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/uhV4lJ1UTIr0FN-MLMUIp_m790kDLiykCWjX82MNbUThUhKHLpV9_hH9CzLui4bXNIcsgWifoQ=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=FNCFPTU5V9VHL"},

        ]
}

const obaidah_treatment:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {obaidah_treatment}