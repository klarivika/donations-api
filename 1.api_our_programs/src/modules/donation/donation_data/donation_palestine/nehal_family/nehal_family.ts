import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Nehal Family",
        story:`Family from Gaza 🍉
Help us to survive🙏
Subscribe Like share comment 🥹
Please support us 👇🏻👇🏻`,
        youtube_channel:{
                src:"http://www.youtube.com/@GazaFamily.001"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/-2vW9m_YlSw",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/fI77mGDg65r9YTMOQeSkmBuY0jIJuJIfTvoAUiSqy1UFsDxtN6nQ32Jr4vpfd3_IO0Ddf0enPL4=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.go_fund_me,url:"https://www.gofundme.com/f/help-nehaal-and-her-children-survive-in-gaza?attribution_id=sl:4f54a4a6-2aa3-4cc7-9a00-9c718d1d26eb&lang=en_US&utm_campaign=man_ss_icons&utm_medium=customer&utm_source=copy_link"},

        ]
}

const nehal_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {nehal_family}