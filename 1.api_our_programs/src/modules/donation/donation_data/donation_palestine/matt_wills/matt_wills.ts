import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Matt Wills",
        story:`I want to use this illness I have to motivate and help others to make an impact in this world to overcome.`,
        youtube_channel:{
                src:"http://www.youtube.com/@Supportwills07"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/n5-UXo9I_Ug",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/JMIsovd_PcC3e909E0Kj7jcJbF_4BlRwPUQenfhSJztbmlmSXiSiqwVyidP6mgjsyOQ7q113lw=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?campaign_id=MZS3W7ZSZX49A"},

        ]
}

const matt_wills:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {matt_wills}