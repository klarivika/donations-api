import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Hala&lana family 🍉❤️",
        story:`I am Hazem, the father of two beautiful girls, Lana and Hala. I am trying to evacuate them from Gaza. Help us, Lana and Hala.❤️🍉`,
        youtube_channel:{
                src:e_data_citizen.none
        },
        youtube_profile:{
                src:e_data_citizen.none,
                type:e_data_citizen.yt_short
        },
        image:"https://instagram.fjog3-1.fna.fbcdn.net/v/t51.82787-19/727287230_18086483627312202_3870984168994629825_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2gGcN1EwSq0uTMZffIZaVqk4nY91TAOcwSEmmQJe2XspXHDgKZm3KYfSdKc1B__5cVE&_nc_ohc=SFyfhXpB38QQ7kNvwEcOGFi&_nc_gid=sg3BLv9MfsW7Ubl2_QDN0g&edm=AFH_I_IBAAAA&ccb=7-5&oh=00_Af9dFRuYVDdV6LrhPqdRUEwHaNGPSjpo-Lb1ehF2BIXqjg&oe=6A481F83&_nc_sid=58c7ce",
        links:[
                
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/project/18455-help-hala-and-lana-family?utm_source=threads&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1denngx8nt2rt"},

        ]
}

const hazem_khilla99:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {hazem_khilla99}