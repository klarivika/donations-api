import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"feed my family in  🇵🇸",
        story:`Help us in Gaza Your 10$ can save someone's  life  ! Humanity is calling you
DONATE ANYTHING YOU CAN TO SAVE US`,
        youtube_channel:{
                src:"https://www.youtube.com/@musa-l9d8s"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/HPNMe9EHGjE",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/mssN2Pht6N2Grfc-DOcxAPHcIPfQ8pFRCE0hNpalOERO4JPaaM7AisvQcLpi1SZdGqR9as88bNU=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=8ZT4BVFFJ36R8"},

        ]
}

const feed_my_family_in_ps:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {feed_my_family_in_ps}