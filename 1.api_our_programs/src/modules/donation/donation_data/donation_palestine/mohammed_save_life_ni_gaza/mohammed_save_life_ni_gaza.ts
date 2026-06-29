import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"mohammed save life ni gaza",
        story:`📍 palestine 𓂆 ,Gaza🇵🇸✌️
صوت من قلب الحقيقة، وصورة تحكي ألف قصة 🎥
🔻 A living witness to the genocide in Gaza ⚠️
🔗 donate to support families in Gaza 👇👇`,
        youtube_channel:{
                src:"http://www.youtube.com/@Mohammedsavelifenigaza"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/qJqvbxzkIHo",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/sIGi89PmPOjkVQpzhNdIoxMolJva0h4DkpQ4IIN7yugd4VETDnzPDFh1EXzIoF1K8nkPFinyCEk=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=FTPVR8RCRZ85C"},

        ]
}

const mohammed_save_life_ni_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {mohammed_save_life_ni_gaza}