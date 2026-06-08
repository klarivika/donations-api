import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Give Hope to My Family",
        story:`I have lost over 20 close and distant relatives, and those of us remaining are living in a tent along with a great danger. Save us from the storm! 
This channel is our cry for help. Please donate whatever you can! 
PayPal email: jop.oppeth@gmail.com`,
        youtube_channel:{
                src:"https://www.youtube.com/@GazaFamilyHope"
        },
        youtube_profile:{
                src:"https://youtu.be/iIj3UJ6x1I4",
                type:e_data_citizen.yt_long
        },
        image:"https://yt3.googleusercontent.com/HTCfHfZwmtqz8jUKm9TJAMJ5NLZMMWsAbdddTS8HKoHYnf-9vDh_Gni0Q6FU2hQu6HEjMMRuag=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.go_fund_me,url:"https://www.gofundme.com/f/help-mira-to-start-carrer-in-music?attribution_id=sl:64cff4d8-d67e-4949-ab9a-5354798ba3a9&utm_campaign=man_sharesheet_dash&utm_medium=customer&utm_source=copy_link"},
                {name:e_data_citizen.go_get_funding,url:"https://gogetfunding.com/help-me-support-my-family-and-children/"},

        ]
}

const give_hope_to_my_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {give_hope_to_my_family}