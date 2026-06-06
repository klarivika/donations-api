import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"hearts for family in gaza",
        story:`Please kindly donate any amount you can to help me feed my children via the fundraising link below ⬇️`,
        youtube_channel:{
                src:"https://www.youtube.com/@HeartsForFamilyInGaza/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/KNrQgq386AU",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/oEzuJEiun_9X5-ibypyBOFak-V2Goi72ghCEdqJJOrwAUn7yh4Xyc9uFk1D37dsIyrEy74nOXI0=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=L78EYXKDUJ2Q6"},

        ]
}

const hearts_for_family_in_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {hearts_for_family_in_gaza}