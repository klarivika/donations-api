import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Save lives ",
        story:`Save Lives Gaza 🇵🇸 | دعم إنساني لغزة
Emergency relief • أمل • إنقاذ أرواح
Together we stand | معًا نصنع الأمل
👇 Donate & Support | تبرع الآن`,
        youtube_channel:{
                src:"http://www.youtube.com/@Savelives-h6g"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/ErRGR1SrmnU",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/-1cTZ-ibd45qy8FRaQO8Pw2TlnPGPR7gQLxbJDhb15bTM1PJCJ-_Pl61ZdUJFUYl_CgNIaUUxw=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=7XXUJ4LTWQGHS"},

        ]
}

const save_lives :t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {save_lives }