import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Marahfamily88",
        story:`Help my family in g@zal 🍉 Even 20$ will make a difference...🙏 Help us please`,
        youtube_channel:{
                src:"http://www.youtube.com/@Marahfamily88"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/4b2ptP4R_CI",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/l5ruDYR-fsy9OW93s4A4CdW-nfOV8aLNVaWtyMdKHzxogjUYpGBo-YAv4KC52EwdLKDoHdx5OA0=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/project/187285-i-urgently-need-your-support-today"},
                {name:e_data_citizen.link_tree,url:"https://linktr.ee/Youaremylasthope"},

        ]
}

const marahfamily88:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {marahfamily88}