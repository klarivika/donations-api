import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"abdul karim",
        story:`My name is Abdul Karim from Palestine. The war took my right leg in one day, leaving me unable to work. I now struggle to feed my wife and our seven children.
We urgently need food, clean water, and medicine for my wound and the children’s malnutrition and illnesses.
Any small donation will help us survive. Please share and support us.
Thank you,
Abdul Karim & family`,
        youtube_channel:{
                src:"https://www.youtube.com/@Abdukarim-d9c/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/l6JuNipZKQ8",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/caKih6kkSllebgeOQrcKcpcF0dUldkmp4xMQ4cKeCJzLGQLGDzY4XNX-kvZCmGUalSvTW4UgTQ=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/project/179557-help-abdul-karims-family-escape-gaza"},

        ]
}

const abdul_karim:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {abdul_karim}