import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"save Garza's children",
        story:`Please help me buy survival food 🍉🍉🍉🇯🇴🤲😭`,
        youtube_channel:{
                src:"http://www.youtube.com/@Abud-w9u"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/gZNHeDUW9Ws",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/nNz_eP-Yh-hQNcQpgyxzi0ORz5pGkb5-k3CHJ6hrzKRRdRM9qkrkrQzgbudQJm_zUObCMrQYww=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?hosted_button_id=W5PU84XKD5W36"},

        ]
}

const save_garzas_children:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {save_garzas_children}