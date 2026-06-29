import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"my chance | Life with out cancer",
        story:`Please donate to save my life and get treatment 🙏🙏🍉🍉👇👇`,
        youtube_channel:{
                src:"https://www.youtube.com/@Mycance/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/QWg0jsQtdLg",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/DUex8bFy32TG6bHLfKfb9Bjfyb-mPS5Xl_yOt9C-xAlirLQR-zYUgkvqzwzR7imyxefB_TGPRg=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=VPBJRA7K763B8"},
                {name:e_data_citizen.go_fund_me,url:"https://www.gofundme.com/f/kids-with-cancer-9usdy?attribution_id=sl:b56eafea-020e-4c99-9807-0ecddc0efc0d&ts=1781374048&utm_campaign=natman_sharesheet_dash&utm_medium=customer&utm_source=whatsapp"},

        ]
}

const my_chance:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {my_chance}