import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"gaza care | Mohammed Abdulla and his family",
        story:`Hello My name is Mohammed Abdullah amaza. Please help me raise money for my family. We have lost everything: our home, our safety, and our sense of stability. Today, we are reaching out for your solidarity to help us get through this difficult time. This fundraiser will go toward covering our most urgent needs: food, medical care, clothing, and shelter to keep us safe. Every donation, big or small, is a gesture of hope for us. And if you're unable to contribute financially, even sharing this fundraiser can make a real difference. **Thank you from the bottom of our hearts, Mohammed Abdullah. Amaza`,
        youtube_channel:{
                src:"https://www.youtube.com/@GAZACARE/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/6FQ3Lx2LM1c",
                type:e_data_citizen.yt_short
        },
        image:"https://d1c7drk47yg0al.cloudfront.net/assets/QCf1F9pU1trC0lwaLDl9hvfiHpOZQmcR0qTXZ8HN.jpg?profile=campaign.header_desktop",
        links:[
                
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/project/174897-help-for-mohammed-abdulla-and-his-family"},

        ]
}

const gaza_care:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {gaza_care}