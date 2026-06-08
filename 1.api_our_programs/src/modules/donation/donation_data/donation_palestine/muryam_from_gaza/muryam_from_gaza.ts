import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"muryam from gaza",
        story:`My family and I are living through unimaginable hardship in Gaza. We struggle every day to find enough food to eat and basic necessities to survive. Clean water, medicine, and even simple daily essentials are scarce.
Watching my loved ones suffer from hunger and lack of resources breaks my heart. Every day is a battle just to stay alive, and we fear what tomorrow will bring.
I am asking for your support to help provide food, clean water, and essential supplies for my family. Any donation, no matter the size, will make a real difference and give us hope in this crisis.
Please help us survive and regain even a small sense of safety and dignity. Your kindness can save lives`,
        youtube_channel:{
                src:"https://www.youtube.com/@muryam.fromgaza/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/37FFaMyJ_2k",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/mTBKoUZEAOAuGnXef3Iig-kWWxT9DMu8IaHWr0ZRRu72VoXBe3hM5VYrH44UnfGLHXcT3l1PDA=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?campaign_id=ZJZCCYX4BDMB4"},

        ]
}

const muryam_from_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {muryam_from_gaza}