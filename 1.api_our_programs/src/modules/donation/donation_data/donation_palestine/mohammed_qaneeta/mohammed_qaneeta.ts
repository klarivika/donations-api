import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Mohammed Qaneeta",
        story:`Mohammed_Qaneeta
أنا محمد من غزة 🇵🇸 | أوثّق حياتي اليومية وأنقل معاناة شعبي للعالم | كل فيديو حقيقة يجب أن تُرى🎥
I’m Mohammed from Gaza 🇵🇸 | Documenting my daily life & sharing the untold suffering of my people | Every video is a truth that must be seen | Support me 👇`,
        youtube_channel:{
                src:"http://www.youtube.com/@Medo.nq1"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/3b3OXA_FDec",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/6DvaVtyxc83LOhpCSPmXNWISDCvfQNgVaM5ZC6jt3Lqg0F1crcwBLT1KE8yJhlpsepQPW3pffg=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/paypalme/jasminemarin22"},

        ]
}

const mohammed_qaneeta:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {mohammed_qaneeta}