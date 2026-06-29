import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"abusultan1",
        story:`Oxygen for my child`,
        youtube_channel:{
                src:"http://www.youtube.com/@Abusultanfamily-1"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/zwwCqK7sznw",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/e0DP5sEM06m9o0FfffxA59UjokvPlLraH18dWLuxIa3Ag7HtXqlD6M4_opI4qzwLVwEGTd3GYg=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=A4DED8LC6XKAL"},

        ]
}

const abusultan1:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {abusultan1}