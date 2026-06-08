import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"change life in gaza",
        story:`we can't stay silent while Gaza in crying please donate anything you can 🤲🤲🙏🇯🇴🇯🇴`,
        youtube_channel:{
                src:"https://www.youtube.com/@change_life_in_Gaza/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/2vpXPDbAr7Q",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/TG3bzSh-i-Zemmyvp3EOVMuG8gzBrcKyU8jCCQC8KcllM2s5YVTpO8Qo19HWlvPTDEYhcdxp0Q=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.link_tree,url:"https://linktr.ee/kalungiw98"},
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?hosted_button_id=YUNLPRWJQV7XG"},

        ]
}

const change_life_in_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {change_life_in_gaza}