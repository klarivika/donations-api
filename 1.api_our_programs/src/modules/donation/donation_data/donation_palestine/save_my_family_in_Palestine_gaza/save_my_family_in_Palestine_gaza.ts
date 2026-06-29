import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Save my family in Palestine Gaza",
        story:`help us to survive please😭🙏Donation link in bio 🙏`,
        youtube_channel:{
                src:"http://www.youtube.com/@SavemyfamilyinPalestineGaza90"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/G3pwIMfGGnQ",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/n35fPSjHY4iF3C3809BT7r3IV5_Hlvdk3KPkqEsKikwFBkUB5VlwLXK35fX-vUIxBhbiqHQ3F4s=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?campaign_id=55D6N79S2UARL"},

        ]
}

const save_my_family_in_Palestine_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {save_my_family_in_Palestine_gaza}