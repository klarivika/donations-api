import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"gaza family emergency relief",
        story:`On December 23, Firas Abu Raida sent us this message: "I haven't slept. The cold is unbearable. My limbs are trembling from the intense cold. I feel like my body has turned blue from the cold. I'm suffering so much. I'm slowly dying. My limbs feel like blocks of ice from the cold, and at the same time, my stomach is rumbling from extreme hunger."

Firas is a student in Gaza who works hard to support his family, including his two disabled parents. He has always dreamed about becoming a computer programmer and he is devastated that the war has prevented him from studying what he loves. Two years ago, he was an avid computer science and math student, earning a certificate in front-end web development. Now, he and his family are struggling to survive. Their tent was destroyed in the storm and they now have no shelter from the rain or the cold.

Here is a photo of Firas next to another of the storm's effect on his tent:`,
        youtube_channel:{
                src:e_data_citizen.none
        },
        youtube_profile:{
                src:e_data_citizen.none,
                type:e_data_citizen.none
        },
        image:"https://d3k9p5zq72yv95.cloudfront.net/files/spotfundfile/8F9pPRq3QKypd22JCMQUdA.jpeg?width=650&format=webp",
        links:[
                
                {name:e_data_citizen.spot_fund,url:"https://www.spotfund.com/story/da334739-c9ab-4008-a0da-8174561d5509?value=gaza"},

        ]
}

const gaza_family_emergency_relief:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {gaza_family_emergency_relief}