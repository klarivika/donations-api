import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"matw_project",
        story:`MATW Project is a global humanitarian organisation dedicated to supporting communities facing poverty, conflict, and displacement.

Guided by the values of compassion, Sadaqah, and Zakat, our work is rooted in the Islamic responsibility to care for those in need and serve the Ummah with sincerity.

Across more than 30 countries, MATW delivers essential support including food, clean water, orphan care, medical assistance, and long term development projects. From emergency response in crisis zones to sustainable initiatives like water wells and education, the focus is simple. Reach people in need with dignity, consistency, and accountability.

Join a global community committed to serving the Ummah and fulfilling a trust given by Allah.`,
        youtube_channel:{
                src:"https://www.youtube.com/@MATWProject/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/fRfRRf4m-lo",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/ju9DPkCTzmnYWJNQVHOui8fvv01D1xrdmDJfvNFJtclysnt8M_VVBhe_oSCgvg0gg0DExD8PrQ=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.website,url:"http://www.matwproject.org/"},
                {name:e_data_citizen.facebook,url:"https://www.facebook.com/matwproject"},
                {name:e_data_citizen.instagram,url:"https://www.instagram.com/matw_project"},
                {name:e_data_citizen.tiktok,url:"https://www.tiktok.com/@matw_project"},
                {name:e_data_citizen.link_tree,url:"linktr.ee/MATWProject"},
                {name:e_data_citizen.app,url:"https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbWp0UWJfdzQxcFBjY2d2RXliQ0ZIdlkxUEtJd3xBQ3Jtc0tuM3pWM0Q1aTNTeFU3bFhjUVRPX1Y3dTRlUkwweWpzOW5PVlBURGhTMTRJakFlcFdtRm5VN3JyMTZhLXphc2lwUXJIOFppSHJ6NW5sTFRnQjcxSk1ic01CQ1l4ZDhpeGhMajFoc19JQUdZU005RlZDZw&q=https%3A%2F%2Fonelink.to%2Fxq5p5w"},

        ]
}

const matw_project:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {matw_project}