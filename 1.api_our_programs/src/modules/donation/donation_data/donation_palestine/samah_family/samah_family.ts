import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"samah family",
        story:`Voices,and updates from gaza.raising awaireness and standing in solidality with families affected with crisis`,
        youtube_channel:{
                src:"http://www.youtube.com/@samahGaza-b2z"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/5jLrws_S2WY",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/R7gY9K5_OIgdgT4zc_vxT9P9qRYiHTAxw6DQlFhSPEgLjB6EK3qldSniG0PcTKiL4uRg2hZA-Y0=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/ncp/payment/27D2X5CJXA274"},

        ]
}

const samah_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {samah_family}