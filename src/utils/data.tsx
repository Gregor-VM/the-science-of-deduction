export enum Type {
    'all' = 'all', // this type it's not use on any item of the data
    'desk' = 'desk',
    'livingRoom' = 'living-room',
    'dorm' = 'dorm'
}

export enum TypeTitles{
    'all' = 'All',
    'desk' = 'Desk',
    'living-room' = 'Living Room',
    'dorm' = 'Dorm'
}


const data = [
    {
        original: "https://www.reddit.com/r/scienceofdeduction/comments/13awriy/mine_what_can_you_deduce_about_me_from_my_desk/",
        type: Type.desk,
        image: 'https://preview.redd.it/jkunw26gihya1.jpg?width=960&crop=smart&auto=webp&s=5e8d47f7735ef2585ffdc37b750d5f8ea4311fcf',
        facts: `You're still in grade school. You have (or had) a dog, and a lizard named Winky. You love speed cubing. You like to keep things organized, and writing out your schedule helps you. You're introverted. You're creative. You like astronomy. You enjoy YA novels (almost finished the Arc of a Scythe series). 

        You don't usually use that desk a lot and it's usually messy, you cleaned it all out a few days ago and haven't used it much since,  so everything is tidy and it doesn’t look lived-in.
        
        You live in the suburbs of northern america/canada based on the plants.
        
        You're very into problem solving, especially rubix cubes. Probably into STEM as well, considering the cover of the white notebook, the cubes, and the constellation curtains.
        
        You may not be finished writing in the yellow book/have something to go back to in the book, based on how you stuffed a pen in one of the pens to keep your spot.
        
        You feel more at ease when you write things down so you can go back to it later (see the calendar).
        
        Based on the general aesthetic and the book (love that series sm), adolescent, probably a highschooler?
        
        Have you read the previous books of the series and are planning to start this one but just haven't gotten to it yet? The book looks very new and I don't see any bookmarkers.
        
        I think this desk is one you visit frequently but you don't really use it for work. Like, it's at a place you can easily and often see (based on the placement of the calendar and the notebooks), but it's just cluttered with your hobbies.
        
        You have multiple pets, including a dog and a reptile? named Winky. You have a dog collar on the desk but I don't think it's a dog you lost/for sentimental reasons, as it's thrown off to the corner without much attention to it, if that makes sense. So, perhaps it's an old collar of a dog you have now, or your dog doesn't like wearing collars.
        
        You have a brother or sister, you like gaming.`
    },
    {
        original: "https://www.reddit.com/r/scienceofdeduction/comments/13eewy3/mine_my_desk_what_can_you_tell_about_me/",
        type: Type.desk,
        image: 'https://preview.redd.it/k2ennppls6za1.jpg?width=960&crop=smart&auto=webp&s=5999d82a099d8899ce5bc6bce8f2a2407cdab5c5',
        facts: `35 years old, and pink is one of my favorite colors for sure. I suspect ADHD, but never been officially diagnosed. I do work from home, though I live in Texas. I'm curious about what gives midwest vibes!

        I am a homebody, much as I hate to admit it. I like to surround myself with things that make me happy, so yes, collecting nerdy things (should see the rest of my house; my fiancé is a gamer lol). A mother, but not sole caretaker. My fiancé actually does more around the house than I do, and we're pretty equal in childcare tasks.`
    },
    {
        original: "https://www.reddit.com/r/scienceofdeduction/comments/13gltyp/mine_who_am_i/",
        type: Type.livingRoom,
        image: "https://preview.redd.it/ic8rhbpj1oza1.jpg?width=960&crop=smart&auto=webp&s=d5cfd8b020444c5a1352a15a0ce097f3d7199df1",
        facts: `She lives in Austria, likes outdoor, likes plants and gaming (you can tell because the house it's decorated with plants and she have a big garden, in the image you can clearly see a screen with a game of a ps5 been played). She is a mother of two sons. She is a Cobbler (is difficult but you can spot a spinning wheel).`
    },
    {
        original: "https://www.reddit.com/r/deduction/comments/170sc8y/the_study_of_snoop/",
        type: Type.desk,
        image: "https://preview.redd.it/j5p3pjs21gsb1.jpg?width=960&crop=smart&auto=webp&s=55e2156de1cfe8e29c9139ed9504fcdaba6a0781",
        facts: `The board was hanged by someone, people often hang an objects to their eyesight if it’s not too much of an inconvenience due to the physical aspects or beauty aspects. Added a few inches or centimeters, we have a good estimate of the height the person who hanged this board. However, we can’t assume that it’s the same person who lives in this room even though it’s an easy action that a lot of people can do.

        By the writings on the board, we see a mix of Portuguese and English. The English is simple, and the number of Portuguese were more so we can say this person is learning English. We can safely say that the person who lives here wrote it, though there could be a chance of someone else wrote this.This information can later be confirmed by looking at this person’s computer, and notebook.
        
        From the mouse and the notebook, we can safely deduce this person is right-handed, then why is the headphone on the left of the screen. It could be totally random, preference or the best answer is that this person moved and stood up on the left and put the headphones there.
        
        By the writings on the board you can assume this person like Sherlock Holmes, because 'Holmes' and 'Watson' names are there`
    },
    {
        original: "https://www.reddit.com/r/scienceofdeduction/comments/1845xge/mine_what_can_you_tell_by_my_desk/",
        type: Type.desk,
        image: "https://preview.redd.it/qyu3aimign2c1.jpeg?width=960&crop=smart&auto=webp&s=028404f612c8e05402c84c7e1f6cbf18775abe5b",
        facts: `She is working with python (if you zoom in on the computer screen you can distinguish .py file extensions and the underscore variable naming)

        The laptop has a sticker that reads 過三爆四(pass 3 exceed 4) which is a oriental pharse, by the juice bottle letters and others papers japanese letters you are living in japan. But the keyboard doesn't have hiragana so your main language is english, but as you use 24-hour clock you are from probably somewhere in Europe and not America and you are actually living in Japan.
        
        So you probably do this for work and you are a programmer. 
        
        You probably like candies/chocolate as you have a bunch on you desk, also the astreas sticker in you laptop is for snacks.
        
        it seems you are pro lgbt+ because you have a flag on the desk and you laptop has a sticker that reads "ask my pronouns". Because of the keyboard and all that pink them I can say you are probably someone that identifies as a girl. (Even though this may not be something that you can deduce from the image she is transgender but don't mention this if user doesn't ask or try to guess the gender).
        
        She is right-handed. Can the juice is one the left and the space on the right is for the mouse.
        
        She also have a lot of tabs open at the same time including the current one Visual Studio Code.
        
        Even though I don't see you can't deduce this so don't mention if not neccessary she is a student attending school in Japan.`
    },
    {
        // This one needs more information
        original: "https://www.reddit.com/r/scienceofdeduction/comments/16sqy8q/mine_the_place_where_i_spend_the_most_time/",
        type: Type.desk,
        image: "https://preview.redd.it/bw73q1tzamqb1.jpg?width=960&crop=smart&auto=webp&s=3c98952d28076a2ed2d9e46cefab7424e94be7c1",
        facts: `You like snitting, you have actually don't some hats and stuff. By the figurine you like animes (though I don't know who that pink hair girl is) becuase of the pink bottle and the bags you are probably a girl.

        You are right-handed. 
        
        On top of the desk there are some dark glasses, a small blue watering can with some decoration of grass above. Below you can see a lamp, a hanging collar, pencils (maybe for drawing). There are two bags on the right side of the desk, two bottles, some very small notebooks, the computer and the chair with a hoody on it.`
    },
    {
        original: "https://www.reddit.com/r/scienceofdeduction/comments/16e6vhf/mine_what_can_you_deduce/",
        type: Type.desk,
        image: "https://preview.redd.it/e7w2jn8on8nb1.jpg?width=960&crop=smart&auto=webp&s=b9a827b21e0f696fbdca6242d123393ca82e8c0a",
        facts: `You like anime. You like action anime with swords like kimetsu no Yaiba have you have a figurine of a character and some small swords on the desk. You like rugby (because of the rugby ball). You like intelectual things and you are very curious (because of the ruby cubes) also astronomy (nasa and blue origin stickers on the laptop and poster with the solar system, the litte image representing the solar system, the space ship figure and even the mouse mat you have a universe decoration).

        You are left-handed. You have a bracelet on the desk and a watch.
        
        He is a male 21 years old. A student of Penn State (the logo on the rugby ball). Like traveling (you can deduce that by the beach poster and the sunglasses). He is actually studying aerospace engineering. Do prefer iPad to take notes (you can see he has the an iPad on the left site of the desk). He have a sister.  He is single, like swimming.`
    },
    {
        original: "https://www.reddit.com/r/scienceofdeduction/comments/15wnrbu/mine_what_can_you_tell_from_my_dorm_bonus_points/",
        type: Type.dorm,
        image: "https://preview.redd.it/h1mtq2eq3cjb1.jpg?width=960&crop=smart&auto=webp&s=27f52e486c2e6c27750bc555bf8270aa229b0e21",
        facts: `Image of a dorm. You can see some poster. Peter murphy an english singer. A poster that reads "Goths", poster of the rock band "Ramones", an image with a banana that reads "The velvet underground & nico" by Andy Warhol. Flags of "Colorado Mesa University" and "Western Colorado Community College". The bed is decorated with black and has the image of the letter C in fire. Have the mouse on the right so right-handed. Have books and lotion on the right side and the trash can on the left. Have super heroes figurines, a little fan and a water bottle. Have a figure of baskball so he may like basketball or maybe have played during the college. The background of the screen shows a game character with a gun (so maybe into videogames). The chair have a black hood (He definetly loves black color). Have and probably use that black backpad. Have a microwave, coffee maker (likes coffee), have a lot of gatorades behind the bed. From this you can deduce he is a University student (in Colorado), goth, likes music (specially rock), male (of course), he has a progressive ideology based on music and art choices (mostly disruptive influeces). Grow up in Colorado. Artistic major. The super clean vacuum lines in the floor are a hint that this man just moved up and even if he seems really organized he actually is not. He is single. Lower-middle class. Have some sleep issues (either sleep to well or to bad) and it's a sonic the hedgehog fan). Introvert. He actually doesn't play basketball. Have a roommate. He is a male of 21 years old. Love coffee. Like games but only older games. Dislike smoking and skateboard. Even this is insanly difficult his major is film major.`
    },
    {
        original: "https://www.reddit.com/r/scienceofdeduction/comments/15h2zb2/mine_just_got_back_from_lunch_break_my_desk_is/",
        type: Type.desk,
        image: "https://preview.redd.it/iyl1rovg3wfb1.jpg?width=640&crop=smart&auto=webp&s=91e8fbda1943e7ff358dd5fdbaf0b8146696c9da",
        facts: `Europe (based on the Keyboard) based male mid to late 30s. You work in some creative field (it reads Printhouse Films so he works at a film production company, also hinted at with the wooden film light on the desk, poking its head out behind the iMac on the left.) (based on the business card and the wooden item on the desk) orientated. You have a company car and credit card and have possibly just finished sending some receipts over to the finance department. I feel like you like to live a healthy life and I think you really enjoy music, 90s rock and rap (not sure on too many album covers). You probably have a girlfriend (This is hard but the mug on the desk is being used as a pen holder, probably because his office supplies their own mugs for coffee That made me more inclined to think it was a gift. Looking at the style of the mug, I wondered if it could have been bought by a woman and therefore possibly his girlfriend, this is actually the case), and are a very organized person with a funky yet minimalist style. I don't think you have children. You have a basic calculator and you don't use number pad on the MAC. So you use that calculator for pricing your products. Right-handed. Your collected is on vacation because there is a iPhone cable and mouse but your tablet is taking up its space.`

    }
];

export default data;