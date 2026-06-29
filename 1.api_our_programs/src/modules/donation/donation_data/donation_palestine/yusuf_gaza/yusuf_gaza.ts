import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Yusuf Gaza",
        story:`Please help us from Gaza we are war victims dying every single day from hunger and disease donate to help. Displaced families without food, clean water and medication. We are very grateful for your support. Be blessed 🙏🙏`,
        youtube_channel:{
                src:"http://www.youtube.com/@Yusufgaza-p3u"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/XoSQ8zaTJHM",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/9cUhjcHdSvK6-7ofwmSksx5MuxULWLlFTnC3beKhskcTxu3ItbTCTUMnoyOgEhoD5H5LhSbTLQ=s160-c-k-c0x00ffffff-no-rj",
        links:[
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?hosted_button_id=ZKGK2BPXNS4UA"},

        ]
}

const yusuf_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {yusuf_gaza}