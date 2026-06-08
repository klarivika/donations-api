import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"givers gain",
        story:`💙 Givers Gain | Together, We Rise
        We’re here to help those who need it most — one meal, one child, one act of kindness at a time. From feeding starving kids in Gaza to supporting people in crisis worldwide, we use every donation, every view, and every voice to make a difference.
        🎥 Real stories. Real people. Real impact.
        ❤️ Be part of the mission.
        🌍 Give hope. Share love. Save lives.
        🙏 Support our cause: https://ko-fi.com/giversgain"
`,
        youtube_channel:{
                src:"www.youtube.com/@TheGiversgain"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/IBEq4vxU4xg",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/uBoEYIO8yKY31_tDnVpjcmvfEX6t_YZkZQSnE_ZzuB8EWXGuhDXdtJtPGVqWCKEXi9z7atj5JQ=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.ko_fi,url:"https://ko-fi.com/giversgain"},

        ]
}

const givers_gain:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {givers_gain}