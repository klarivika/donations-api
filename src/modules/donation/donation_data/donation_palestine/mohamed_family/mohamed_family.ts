import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Mohamed family",
        story:`I'm Mohammed in Gaza😭😭💔🇸🇩wasup ‎⁨‪+971 55 147 9458‬⁩`,
        youtube_channel:{
                src:"https://www.youtube.com/@SaveLife-u4w/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/watch?v=WVHuxRToh5c",
                type:e_data_citizen.yt_long
        },
        image:"https://yt3.googleusercontent.com/UaA0OpuZpfDk0lUp0958olX9mwTAmRdXimLq7y-sVne2mCXvDrYK4Z2UhKaZGr6rEVCUeAbpGA=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/paypalme/JoMalik569"},
                {name:e_data_citizen.spot_fund,url:"https://www.spotfund.com/story/8d955f35-d2e9-4f62-b02b-e459f078e195?source=s&share_location=c&r=aHR0cHM6Ly93d3cueW91dHViZS5jb20v&SFID=rzqs1cmsc&referral_id=45c1a8aa-9501-40c9-847c-3b84a309d6f7"},

        ]
}

const mohamed_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {mohamed_family}