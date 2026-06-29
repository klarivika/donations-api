import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"emanfamily",
        story:`You’re the hope and strength we need to keep going.
            Please save my family.💔👇👇`,
        youtube_channel:{
                src:"https://www.youtube.com/@emanfamily-l1q/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/N3oFVZsMHmQ",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/HhimfHWkiUCCZy2upZfXA6p5N4Q3kPWvSqWEuDNp7Jvvn6B2E518a444nYd3hYDanHpVOl-CZQ=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=RSLGXNWL66P2Q"},

        ]
}

const emanfamily:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {emanfamily}