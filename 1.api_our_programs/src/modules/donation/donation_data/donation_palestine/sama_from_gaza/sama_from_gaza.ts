import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"SamaFromgaza",
        story:`Help us to survive🥞🍔
Family from Gaza 🥺🙏
Subscribe Like share comment 🥹
Please support us 👇🏻`,
        youtube_channel:{
                src:"http://www.youtube.com/@Sama.family.80"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/dGBhdTdIbRs",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/s0ipbJd5dVgecQq19aIhiGWazzmKvBTpsybrpERkA9AonHiZqJTc97tl9k0SQ3NHpR1TAYPE=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.go_fund_me,url:"https://www.gofundme.com/f/help-nehaal-and-her-children-survive-in-gaza?attribution_id=sl:4f54a4a6-2aa3-4cc7-9a00-9c718d1d26eb&lang=en_US&utm_campaign=man_ss_icons&utm_medium=customer&utm_source=copy_link"},

        ]
}

const sama_from_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {sama_from_gaza}