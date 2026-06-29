import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"mahmood Naser",
        story:`WhatsApp +970598011378
⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
"Sharing real daily life.
to help, the link is here ⬇️`,
        youtube_channel:{
                src:"http://www.youtube.com/@mahmood_Naser"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/Ulu8OjeNjMo",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/qPd1FK3bNcsN6Rfv-LpKm4s5FD2YhIsk25lrgyKqEgKAeVbD3dS_xMmkIm_QTMahiHQPc4C0eCY=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/paypalme/MahmoodAlareer"},
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/project/183395-we-need-to-survive-this-hell"},
                {name:e_data_citizen.instagram,url:"https://www.instagram.com/mahmood__naser?igsh=dXFmeDl0dTMyZHc5&utm_source=qr"},
                {name:e_data_citizen.threads,url:"https://www.threads.com/@mahmood__naser?xmt=AQG091IiWz61nf6VSYGyix0pMz_SRnvBjfOi1SR6iQVgcMs"},

        ]
}

const mahmood_naser:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {mahmood_naser}