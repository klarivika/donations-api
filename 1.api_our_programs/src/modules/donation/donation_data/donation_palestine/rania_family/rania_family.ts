import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:" Rania family ",
        story:`please help my family 👇 🔗`,
        youtube_channel:{
                src:"http://www.youtube.com/@Raniafamily-n6h"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/8EqUwZJFUhM",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/9QNHi-AJZlUPjw2JD7bnoJz3nt86ED0crlAvwKQ7uBXHrsF2j5ZF3cR0-QIwCmg0LQQZIRdP5aA=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/project/187285-i-urgently-need-your-support-today"},

        ]
}

const rania_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {rania_family}