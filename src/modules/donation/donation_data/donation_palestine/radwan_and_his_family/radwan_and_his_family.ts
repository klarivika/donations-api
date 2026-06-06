import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"radwan and his family",
        story:`Hello, I am Radwan. I have 5 children. My wife died. I hope you can help me. I just want to feed my children. I don't have a job. I live in Gaza 🥹`,
        youtube_channel:{
                src:"https://www.youtube.com/@radwan_his_family1/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/Gjqn6FljNkE",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/E16HxzkGQUfoOMPQiRz0l8QoSvHtZz9R8MPzskOKvd6p7Pv-yTAhqC3x-rdUhIO-3mllRxEbG7M=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/project/172670-help-me-save-my-family"},

        ]
}

const radwan_and_his_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {radwan_and_his_family}