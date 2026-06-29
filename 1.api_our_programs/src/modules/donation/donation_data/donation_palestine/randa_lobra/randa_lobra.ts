import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Randa(Lobra)",
        story:`Surviving a gen0cide 
"Let’s build a community of unstoppable learner growing, improving, and pushing forward no matter what."
I’m Randa , a Palestinian civilian and genocide survivor, documenting my journey of resilience, self-improvement, and productivity—while surviving in Gaza.
This channel is not just about me. It’s about proving that even in the worst conditions, we can still learn, grow, and push forward. You’ll find content on self-development, productivity, and the mindset needed to keep going, no matter what.
But survival is not just about mindset—it’s also about real support. My family and I are fighting to stay alive in Gaza, and your help can make a difference.
📌 Follow my journey on Instagram: 
https://www.instagram.com/randa.lobra?igsh=MTBobXhhemxmM3RxNg==
Every subscriber, every share, every bit of support matters. Let’s rise together.
🤫🔥 Join our brand VIP email list 👇👇 
https://lobra.biz/password`,
        youtube_channel:{
                src:"https://www.youtube.com/@randa_lobra"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/Sg2eorAHlRw",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/bole6GZCVMT0bjpuFxqVd0ANcWrXnV5T1VYZ0PsEYKaquLcQVDtK7t9R1gkkpC21VqP79lI-3w=s160-c-k-c0x00ffffff-no-rj",
        links:[
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/project/randagazafund26"},

        ]
}

const randa_lobra:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {randa_lobra}