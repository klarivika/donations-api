import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"nada elghalayini",
        story:`URGENT APPEAL .. My Family From Gaza
I feel I need to share my story because I truly need everyone’s help. My family is trapped in northern Gaza, and I live far from them with my kids husband, and his family, all together in one place. I’m trying to gather money to help both my family and my husband’s family. If the border opens, they will be able to escape to Egypt, where they can finally feel safe and begin a new life from scratch.
My family includes 6 members my mother, my father , 2 brothers and 2 sisters. I’ll share a photo of them before the war when they were living a good, dignified life. Now, because of the war my mother’s health is in very poor condition. She urgently needs regular treatment and continuous medical check-ups due to complications from the war, including issues with her eyes and ears. Here are some of her test results .
they’ve lost their home, and my siblings have lost their schools and places of learning..`,
        youtube_channel:{
                src:e_data_citizen.none
        },
        youtube_profile:{
                src:e_data_citizen.none,
                type:e_data_citizen.none
        },
        image:"https://images.gofundme.com/iNL9FAICR83jWCxjcze8w9ZbAKg=/720x405/https://d2g8igdw686xgo.cloudfront.net/77922373_1759893916584242_r.jpeg",
        links:[
                
                {name:e_data_citizen.go_fund_me,url:"https://www.gofundme.com/f/urgent-appeal-sos-gaza-family-in-rafah?attribution_id=sl:ba068b0e-e59e-4067-9e7a-3cd5affdb73b&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link"},

        ]
}

const nada_elghalayini:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {nada_elghalayini}