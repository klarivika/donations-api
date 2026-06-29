import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Save Mohamed Yusuf in Gaza",
        story:`My name is Mohamed Yusuf, my family has seven people life is very hard for us in Gaza 🇵🇸 no food. Every night, I listen to their breathing as they sleep beside me, praying that tomorrow I can find something to feed them. Their tiny hands hold onto mine, trusting that I can keep them safe… even when I no longer know how. 💔
My wife tries to stay strong, whispering prayers as she holds our baby close. I see the sadness in her eyes, the exhaustion, the fear. As a father, nothing hurts more than watching your family suffer and feeling powerless to help.
We are holding onto hope fragile, but still alive. That hope lives in you. Your kindness can give my children food. Your donation can bring comfort. Your share can help our story reach the hearts of those who care.
Please, I ask you help us survive. Every small act of love matters. You can be the reason my children wake up to a better day. 🙏
💌 Link in bio to donate & share. Your compassion can save my family.`,
        youtube_channel:{
                src:"http://www.youtube.com/@Moham-h1u"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/tifNaEco4-A",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/uiE0wVUA6sta6VamMq26iPJthujU3v8ClHPGpW4P8Or7On9RIRyjjp2-p9PVoGGd1DJcVVj7Yg=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?hosted_button_id=ZKGK2BPXNS4UA"},

        ]
}

const save__mohamed_yusuf_in_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {save__mohamed_yusuf_in_gaza}