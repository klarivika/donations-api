import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Mahmoud Shamalakh",
        story:` Living by the path of Prophet Muhammad ﷺ.. sharing my daily life and stories of resilience from Gaza.
على نهج محمد ﷺ نعيش.. من غزة أشارككم يومياتي وتفاصيل صمودنا. 
أنا محمود من قلب غزة 
I’m Mahmoud from the heart of Gaza
الحمدلله على كل شيء 🤍 
GAZA 📍`,
        youtube_channel:{
                src:"http://www.youtube.com/@mahmoud.Shamalakh"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/_wR2AOxdvQk",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/qSp0RX0VEVl7BNovcTrAhB4YY7RD7VjXuHK04GK7n_xHd0qy30f--HcxxcYtwYVjJTZkbizOTg=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.chuffed,url:"https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqa1NKa1VrUmh5LWZiVUtEUlJzTEdORExfWGQzd3xBQ3Jtc0tuMnhzMDNwdzhNc19WOE5HQWhKTFhJeldwcm5ZV0U0TlczUVA4bDdFb1R1ZDAtMEVfUmowSTFyYVdNVzFNeEl4eG54M3F0RlR5bHgxU0doMlRDVWtPQzJPODMzaFlyNHotTDhKNlBuU3RmN0pfTlVFcw&q=https%3A%2F%2Fchuffed.org%2Fproject%2Fsupport-mahmoud-and-his-family-in-gaza"},
                {name:"gaza educated support link",url:"https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqblV2WWVYNm1JS0JhMnI3bU5xYTRwVTlwaTNtd3xBQ3Jtc0tucy10amtoSlVrNWQ1bGNKT0hrUndRTk9Xd19xM2d1YkRodDlOZW5SdDBpN2hYb1lCdmk3RzlIWnZzUUlYWGpkT3d5RlEwal9kdXIxd0xwQUtHclhNMlExRERyQ1RuNk0yaEZHSmdUQmpUWHU4Q1Fwcw&q=https%3A%2F%2Fchuffed.org%2Fproject%2F166794-reconnect-gaza"},

        ]
}

const mahmoud_shamalakh:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {mahmoud_shamalakh}