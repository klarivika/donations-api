import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"saher sendawi",
        story:`You're the hope and strength we need to keep going please save my family.💔👇👇`,
        youtube_channel:{
                src:"https://www.youtube.com/@saher.sendawi"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/m0OcFm0Xh9U",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/fMIRAaoQHBfbvlq56oTJB5NDtA7Mc5fXKEt-EuewsHT1iYOoceftUbeLaEyt_HuR7AdbslKH=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=Z9AWLYDT8GRQ2"},

        ]
}

const saher_sendawi:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {saher_sendawi}