import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        image:"https://instagram.fjog3-1.fna.fbcdn.net/v/t51.82787-19/633544615_18041067770736976_1542208574035996728_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDI0LmV4cGVyaW1lbnRhbCJ9&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2gFCYYkr6yqfUGRaPFfWk8xvzioVrQE19rsCausOWSjh_6nivcBTzGu983-2B9_C0ao&_nc_ohc=ovyEmZjBxlMQ7kNvwHaHKCP&_nc_gid=psULRPac_lKSTQr4j-_sKw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af-GByRk6Oc5edt657SanApPZwFgEi8XXehlsLmCJDjSoA&oe=6A46710D&_nc_sid=7a9f4b",
        links:[
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/paypalme/MahiraFamily?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn8v4nKTNZ7XOjx4N_K1lW00QvUp8hnpvsGcxvI4a1dDrJWIxknnSYbchV6KY_aem_ceP7mtZ3r_Ks1dRh5Cl69w"},
                {name:e_data_citizen.threads,url:"https://www.threads.com/@_mahiraamina?xmt=AQG0vFbFie499swebMJGNyryLCv9lR1I_6JdLFIISq8sA3Y"},
                {name:e_data_citizen.instagram,url:"https://www.paypal.com/paypalme/MahiraFamily?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn8v4nKTNZ7XOjx4N_K1lW00QvUp8hnpvsGcxvI4a1dDrJWIxknnSYbchV6KY_aem_ceP7mtZ3r_Ks1dRh5Cl69w"},
        ],
        name:"mahira",
        story:`From Gaza 🇵🇸
                Now the one responsible for my family’s survival.
                We lost our home, but not hope.
                Your help = food, shelter, life. 🤍Donate link in bio 👇👇`,
        youtube_channel:{
                src:e_data_citizen.none
        },
        youtube_profile:{
                src:e_data_citizen.none,
                type:e_data_citizen.yt_short
        }
}

const mahira:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {mahira}