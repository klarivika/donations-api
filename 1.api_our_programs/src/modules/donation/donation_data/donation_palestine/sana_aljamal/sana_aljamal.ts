import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"sana aljamal",
        story:`Urgent Humanitarian Appeal
The young girl, Hanaa Al-Awady, is battling cancer, a disease that has robbed her of her childhood and caused her to lose her vision completely. Her health condition is rapidly deteriorating as the tumor continues to spread in her head and face.
Hanaa is no longer able to eat or drink normally due to the progression of the disease, forcing her family to perform surgery to insert a feeding tube into her stomach. However, the ongoing closure of the crossings and delays in her medical referral for treatment abroad pose a direct threat to her life, as there is a serious risk of the tumor blocking her airway.
Her mother appeals to the World Health Organization, Doctors Without Borders, and all relevant authorities to urgently intervene to save her daughter’s life and facilitate her travel abroad for the necessary treatment before it is too late. 📌 Family contact 
+972567256765`,
        youtube_channel:{
                src:e_data_citizen.none
        },
        youtube_profile:{
                src:e_data_citizen.none,
                type:e_data_citizen.none
        },
        image:e_data_citizen.none,
        links:[
                
                {name:e_data_citizen.instagram,url:"https://www.instagram.com/reel/DEwdUT9Oxqb/?igsh=MWtvenFpbmwxOGlvdw%3D%3D&utm_source=Pinterest&utm_medium=organic&epik=dj0yJnU9VWtleXl6Z2E3ZlhRY1JrUlRDZ2E2dTlGak5kVjd6YTAmcD0wJm49WWs0MWs1SUlWMHZXZ3VCbUpaeXpBQSZ0PUFBQUFBR29qbmkw"},

        ]
}

const sana_aljamal:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {sana_aljamal}