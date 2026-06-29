import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"home",
        story:`JOIN ME ON MY MISSION OF SAVING HOMELESSKIDS IN MY COUNTRY BY DONATED ANYTHING YOU TO SAVE THE KIDS`,
        youtube_channel:{
                src:"https://www.youtube.com/@Home_for-e3u/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/aU3hCtrt9uQ",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.ggpht.com/kzIOusklqAHWqi7bg_uHGvCiYPYDPJ-pexrYFOLxfsP0I46cLE1P0KxaHg4fjyKHbek1OnjS2Q=s48-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.go_fund_me,url:"https://www.gofundme.com/f/help-a-father-and-his-8-kids-to-get-a-safe-home"},
                {name:e_data_citizen.go_fund_me,url:"https://www.gofundme.com/f/help-a-father-and-his-8-kids-to-get-a-safe-home?attribution_id=sl:5d92b8c6-cfe6-4fcc-91e5-425ef13544f7&lang=en_US&ts=1781038510&utm_campaign=fp_sharesheet&utm_content=amp20_control&utm_medium=customer&utm_source=whatsapp"},

        ]
}

const home:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {home}