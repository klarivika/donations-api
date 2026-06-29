import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"hassan from gaza",
        story:`I am from Gaza. My family and I have lost everything because of the ongoing situation. We have no home, no food, and no safe place to live. Every small donation means hope for us — for medicine, food, and shelter. Please, if you can, help us survive and rebuild our lives. Your kindness can make a real difference.`,
        youtube_channel:{
                src:"http://www.youtube.com/@hassanfromgaza-e9b"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/QsbWV1TerkI",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/g2NOSWarPeAm2YNYfo4Rm4NfF3BA5nr0qaxV2Sxf1tMyD4sK3fHrcbz7nL-SF7psDHGhQRxBZA=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/project/187285-i-urgently-need-your-support-today"},

        ]
}

const hassan_from_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {hassan_from_gaza}