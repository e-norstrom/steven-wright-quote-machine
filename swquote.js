

$(document).ready(function() {

  //Hide everything
  $('.well, #tweeter, #theButton, footer, h1, hr').css("visibility", "hidden");

    //First quote
   var quote1 = "I wish, when I was first born, the first thing I said was \'Quote\' so the last thing I said before I died would be \'Unquote.\'";

  //Delayed scroll and fade in of first quote
  (function() {
    setTimeout(function() {
       $('html, body').animate({
        scrollTop: $("#theQuote").offset().top
        }, 7100, 'swing');
      }, 1000);
      $('.well').hide().css("visibility", "visible").html('"' + quote1 + '"').fadeIn(7000);
})();

  //Delayed fade in of everything else
  (function() {
    setTimeout(function() {
   $("#tweeter, #theButton, footer, h1, hr").css("visibility", "visible").hide().fadeIn(3000);
 }, 7000);
})();

  //Tweet button for first quote
  document.addEventListener( 'click', function(){
  document.getElementById("tweeter").href='https://twitter.com/intent/tweet/?text=' + '"' + quote1 + '" - Steven Wright';
  });

  //New random quote button
  $("#theButton").on("click", function() {

      var quotes = [

      {q: "I wish, when I was first born, the first thing I said was \"Quote\" so the last thing I said before I died would be \"Unquote.\""},
      {q: "Right now I'm having amnesia and deja vu at the same time. I think I've forgotten this before."},
      {q: "I just got out of the hospital. I was in a speed reading accident. I hit a book mark and flew across the room."},
      {q: "If at first you don't succeed then skydiving definitely isn't for you."},
      {q: "Everywhere is walking distance if you have the time."},
      {q: "If at first you don't succeed, destroy all evidence that you tried."},
      {q: "If it's a penny for your thoughts and you put in your two cents worth, then someone, somewhere is making a penny."},
      {q: "I put instant coffee in a microwave oven and almost went back in time."},
      {q: "What's another word for thesaurus?"},
      {q: "The best kind of friend is the kind you sit with, never say a word and walk away feeling like it was the best conversation you ever had."},
      {q: "When everything is coming your way, you're in the wrong lane."},
      {q: "There is a fine line between fishing and just standing on the shore like an idiot."},
      {q: "If a person with multiple personalities threatens suicide, is that considered a hostage situation?"},
      {q: "I'm writing a book. I've got the page numbers done."},
      {q: "Depression is merely anger without enthusiasm."},
      {q: "I went to a restaurant that serves \"breakfast at any time\" so I ordered French toast during the Renaissance."},
      {q: "When I was in school the teachers told me practice makes perfect; then they told me nobody's perfect so I stopped practicing."},
      {q: "I'd kill for a Nobel Peace Prize."},
      {q: "If a man says something in the woods and there are no women there, is he still wrong?"},
      {q: "If toast always lands butter-side down, and cats always land on their feet, what happens if you strap toast on the back of a cat and drop it?"},
      {q: "Monday is an awful way to spend 1/7 of your life."},
      {q: "Everyone has a photographic Memory, some just don't have film."},
      {q: "I was reading the dictionary. I thought it was a poem about everything."},
      {q: "I'm writing an unauthorized autobiography."},
      {q: "I went to a bookstore and asked the saleswoman, 'Where's the self-help section?' She said if she told me, it would defeat the purpose."},
      {q: "I stayed up all night playing poker with tarot cards. I got a full house and four people died."},
      {q: "I have a hobby. I have the world's largest collection of sea shells. I keep it scattered on beaches all over the world. Maybe you've seen some of it."},
      {q: "The other night I was lying in bed, looking up at the stars, and I wondered, 'Where the hell is my roof?"},
      {q: "It was the first time I was ever in love, and I learned a lot. Before that I'd never even thought about killing myself."},
      {q: "You know how it is when you're reading a book and falling asleep, you're reading, reading... and all of a sudden you notice your eyes are closed? I'm like that all the time."},
      {q: "Why isn't the word \"phonetically\" spelled with an \"f\"."},
      {q: "I put tape on the mirrors in my house so I don't accidentally walk through into another dimension."},
      {q: "Plan to be spontaneous tomorrow."},
      {q: "Light travels faster than sound. Isn't that why people appear bright before you hear them speak?"},
      {q: "I have an inferiority complex, but it's not a very good one."},
      {q: "Last week the candle factory burned down. Everyone just stood around and sang, 'Happy Birthday."},
      {q: "Shin: a device for finding furniture in the dark."},
      {q: "Support bacteria - they're the only culture some people have."},
      {q: "I intend to live forever. So far, so good."},
      {q: "Eagles may soar, but weasels don't get sucked into jet engines."},
      {q: "What happens if you get scared half to death twice?"},
      {q: "Did you sleep well?\" \"No, I made a couple of mistakes."},
      {q: "If Barbie is so popular, why do you have to buy her friends?"},
      {q: "A lot of people are afraid of heights. Not me, I'm afraid of widths."},
      {q: "A friend of mine once sent me a post card with a picture of the entire planet Earth taken from space. On the back it said, 'Wish you were here.'"},
      {q: "I just got lost in thought. It was unfamiliar territory."},
      {q: "I named my dog Stay, so I can say, 'Come here, Stay! Come here, Stay!'"},
      {q: "I couldn't repair your brakes, so I made your horn louder."},
      {q: "Experience is something you don't get until just after you need it."},
      {q: "It doesn't matter what temperature a room is, it's always room temperature."},
      {q: "If everything seems to be going well, you have obviously overlooked something."},
      {q: "If a mute kid swears, should his mother wash his hands with soap?"},
      {q: "Whose cruel idea was it for the word \"lisp\" to have an \"s\" in it?"},
      {q: "I can picture in my mind a world without war, a world without hate. And I can picture us attacking that world, because they'd never expect it."},
      {q: "Why is the alphabet in that order? Is it because of that song?"},
      {q: "I almost had a psychic girlfriend but she left me before we met."},
      {q: "A metaphor is like a simile."},
      {q: "When I was a kid we had a sandbox. It was a quicksand box. I was an only child...eventually."},
      {q: "I went for a walk last night and she asked me how long I was going to be gone. I said, 'The whole time.'"},
      {q: "When an evil masochist dies, does he go to hell, or would heaven be a better punishment?"},
      {q: "What is the speed of dark?"},
      {q: "Why are they called buildings when they're already finished? Shouldn't they be called builts?"},
      {q: "If warm air rises, Heaven could be hotter than Hell."},
      {q: "I think it's wrong that only one company makes the game Monopoly."},
      {q: "If it's zero degrees outside today and it's supposed to be twice as cold tomorrow, how cold is it going to be?"},
      {q: "Last night somebody broke into my apartment and replaced everything with exact duplicates... When I pointed it out to my roommate, he said, \"Do I know you?\""},
      {q: "Why are there five syllables in the word \"monosyllabic?\""},
      {q: "I'm so tired... I was up all night trying to round off infinity."},
      {q: "Why is a carrot more orange than an orange?"},
      {q: "Curiosity killed the cat, but for a while I was a suspect."},
      {q: "I can levitate birds. No one cares."},
      {q: "I was sad because I had no shoes, until I met a man who had no feet. So I said, \'Got any shoes you're not using?\'"},
      {q: "Why don't they make the whole plane out of that black box stuff?"},
      {q: "All those who believe in psychokinesis, raise my hand."},
      {q: "Sometimes I talk to myself in languages I'm unfamiliar with... just to screw with my subconscious."},
      {q: "You can't have everything ... where would you put it?"},
      {q: "I hate it when my leg falls asleep. I know that means it's going to be up all night."},
      {q: "Sorry... my mind was wandering... one time it went all the way to Venus and ordered a meal I couldn't pay for."},
      {q: "In my house there's this light switch that doesn't do anything. Every so often I would flick it on and off just to check. Yesterday, I got a call from a woman in Madagascar. She said, 'Cut it out.'"},
      {q: "How much deeper would the ocean be if sponges didn't live there?"},
      {q: "You know when you're sitting on a chair and you lean back so you're just on two legs and you lean too far so you almost fall over but at the last second you catch yourself? I feel like that all the time..."},
      {q: "Do Roman paramedics refer to IV's as '4's'?"},
      {q: "I heard that in relativity theory, space and time are the same thing. Einstein discovered this when he kept showing up three miles late for his meetings."},
      {q: "If one synchronized swimmer drowns, do all the rest have to drown too?"},
      {q: "I bought my brother some gift-wrap for Christmas. I took it to the gift wrap department and told them to wrap it, but in a different print so he would know when to stop unwrapping."},
      {q: "My theory of evolution is that Darwin was adopted."},
      {q: "I worked in a health food store once. A guy asked me, 'If I melt dry ice, can I take a bath without getting wet?"},
      {q: "I bought some powdered water, but I don't know what to add."},
      {q: "If you are killing time, are you damaging eternity?"},
      {q: "I went to a general store, but they wouldn't let me buy anything specific."},
      {q: "What a nice night for an evening."},
      {q: "Do the people in Australia call the rest of the world 'Up Over'?"},
      {q: "I stayed in a really old hotel last night. They sent me a wakeup letter."},
      {q: "Imagine how weird phones would look if your mouth was nowhere near your ears."},
      {q: "What do you do when you see an endangered animal that eats only endangered plants?"},
      {q: "What do little birdies see when they get knocked unconscious?"},
      {q: "How young can you die of old age?"},
      {q: "I'm a psychic amnesiac. I know in advance what I'll forget."},
      {q: "If God dropped acid, would he see people?"},
      {q: "It's a small world, but I wouldn't want to paint it."},
      {q: "My friend has a baby. I'm recording all the noises he makes so later I can ask him what he meant."},
      {q: "Can you buy an entire chess set in a pawn shop?"},
      {q: "I finally got around to reading the dictionary. Turns out the Zebra did it."},
      {q: "Why is the third hand on a watch called a second hand?"},
      {q: "I have an existential map. It has 'You are here' written all over it."},
      {q: "How do you tell when you're out of invisible ink?"},
      {q: "How can there be self-help groups?"},
      {q: "I went down to the 24-hour grocery. When I got there, the guy was locking the front door. I said, 'Hey, the sign says you're open 24 hours. He said, 'Yes, but not in a row."},
      {q: "Always try to be modest, and be proud of it!"},
      {q: "Why are there interstate highways in Hawaii?"},
      {q: "Two babies were born on the same day at the same hospital. They lay there and looked at each other. Their families came and took them away. Eighty years later, by a bizarre coincidence, they lay in the same hospital, on their deathbeds, next to each other. One of them looked at the other and said, 'So, what did you think?"},
      {q: "The other day I went to a tourist information booth and asked, 'Tell me about some of the people who were here last year."},
      {q: "Why doesn't the fattest man in the world become a hockey goalie?"},
      {q: "Last year I went fishing with Salvador Dali. He was using a dotted line. He caught every other fish."},
      {q: "I tried to hang myself with a bungee cord. I kept almost dying."},
      {q: "It is like putting a dehumidifier and a humidifier in the same room and letting them fight it out."},
      {q: "99 percent of lawyers give the rest a bad name."},
      {q: "You know, the New Testament is pretty old. I think they should call them the Old Testament and the Most Recent Testament."},
      {q: "If you saw a heat wave, would you wave back?"},
      {q: "I used to work in a fire hydrant factory. You couldn't park anywhere near the place."},
      {q: "There was a power outage at a department store yesterday. Twenty people were trapped on the escalators."},
      {q: "On the other hand, you have different fingers."},
      {q: "When I have a kid, I want to buy one of those strollers for twins. Then put the kid in and run around, looking frantic. When he gets older, I'd tell him he used to have a brother, but he didn't obey."},
      {q: "If you can't hear me, it's because I'm in parentheses."},
      {q: "When I was a fetus, I used to sneak out at night when my mother was sleeping. I figured I should start stealing stuff while I still had no fingerprints."},
      {q: "How do you get off a non-stop flight?"},
      {q: "What would a chair look like if your knees bent the other way?"},
      {q: "Laughing stock: cattle with a sense of humor."},
      {q: "I'm a peripheral visionary."},
      {q: "I had a dream that all the babies prevented by the pill showed up. They were mad."},
      {q: "Once I tried to kill myself with a bungee cord. I kept almost dying."},
      {q: "Imagine Oshkosh straitjackets for little insane children."},
      {q: "The early bird may get the worm, but it's the second mouse who gets the cheese."},
      {q: "I got a new shadow. I had to get rid of the other one - it wasn't doing what I was doing."},
      {q: "Cross-country skiing is fine as long as you live in a small country."},
      {q: "I bought some batteries, but they weren't included. So I had to buy them again."},
      {q: "When I was crossing the border into Canada, they asked if I had any firearms with me. I said, \"Well, what do you need?\""},
      {q: "My school colors were clear. We used to say, 'I'm not naked, I'm in the band."},
      {q: "If the universe is everything, and scientists say that the universe is expanding, what is it expanding into?"},
      {q: "I saw a bank that said '24 Hour Banking,' but I didn't have that much time."},
      {q: "How did a fool and his money get together in the first place?"},
      {q: "I was in the supermarket the other day, and I met a lady in the aisle where they keep the generic brands. Her name was 'woman."},
      {q: "If Dracula can't see his reflection in a mirror, how come his hair is always so neatly combed?"},
      {q: "When I erase a word with a pencil, where does it go?"},
      {q: "I had amnesia once or twice."},
      {q: "I washed a sock. Then I put it in the dryer. When I took it out, it was gone."},
      {q: "I planted some bird seed. A bird came up. Now I don't know what to feed it."},
      {q: "I bought a house on a one-way dead-end road. I don't know how I got there."},
      {q: "A clear conscience is usually the sign of a bad memory."},
      {q: "Do radioactive cats have eighteen half-lives?"},
      {q: "If you are sending someone some Styrofoam, what do you pack it in?"},
      {q: "Smoking cures weight problems, eventually."},
      {q: "I went to San Francisco. I found someone's heart."},
      {q: "When I turned two I was really anxious, because I'd doubled my age in a year. I thought, if this keeps up, by the time I'm six I'll be ninety."},
      {q: "The doctor says he has to amputate all of me."},
      {q: "So I got off the plane and I forget to take off my seat-belt and I'm dragging the plane through the terminal... The wings are knocking people over..."},
      {q: "I was in a grocery store. I saw a sign that said 'pet supplies.' So I did. Then I went outside and saw a sign that said, 'Compact cars."},
      {q: "Is it possible to be totally partial?"},
      {q: "I spilled spot remover on my dog; now he's gone."},
      {q: "To steal ideas from one person is plagiarism; to steal from many is research."},
      {q: "Yesterday, my eyeglass prescription ran out."},
      {q: "You know how it is when you're walking up the stairs, and you get to the top, and you think there's one more step? I'm like that all the time."},
      {q: "I once locked my keys out of my car. I had to break out of my car with a coat hanger."},
      {q: "I Xeroxed a mirror. Now I have an extra Xerox machine."},
      {q: "Does fuzzy logic tickle?"},
      {q: "The sun got confused about daylight savings time. It rose twice. Everything had two shadows."},
      {q: "Is 'tired old cliche' one?"},
      {q: "When I get real bored, I like to drive downtown and get a great parking spot, then sit in my car and count how many people ask if I'm leaving."},
      {q: "I saw a subliminal advertising executive, but only for a second."},
      {q: "I saw a man with a wooden leg and a real foot."},
      {q: "I have a map of the United States... Actual size. It says, 'Scale: 1 mile = 1 mile.' I spent last summer folding it. I hardly ever unroll it. People ask me where I live, and I say, 'E6."},
      {q: "Hermits have no peer pressure."},
      {q: "If a word in the dictionary were mispelled, how would we know?"},
      {q: "My nephew has HDADHD. High Definition Attention Deficit Disorder. He can barely pay attention, but when he does it's unbelievably clear."},
      {q: "I bought a cheap piece of land... It was on someone else's property."},
      {q: "I just lost a buttonhole."},
      {q: "I was trying to daydream but my mind kept wandering."},
      {q: "If you were going to shoot a mime, would you use a silencer?"},
      {q: "I installed a skylight in my apartment...The people who live above me are furious!"},
      {q: "My dental hygienist is cute. Every time I visit, I eat a whole package of Oreo cookies while waiting in the lobby. Sometimes she has to cancel the rest of the afternoon's appointments."},
      {q: "I busted a mirror and got seven years bad luck, but my lawyer thinks he can get me five."},
      {q: "I don't have to walk my dog anymore. I walked him all at once."},
      {q: "Imagine Pulitzer prizefighting."},
      {q: "You cant have everything. Where would you put it?"},
      {q: "Right now I'm having amnesia and deja vu at the same time. I think I've forgotten this before."},
      {q: "Officer, I know I was going faster than 55MPH, but I wasn't going to be on the road an hour."},
      {q: "They say the universe is expanding. That should help ease the traffic."},
      {q: "Last week I forgot how to ride a bicycle."},
      {q: "Always remember your unique, just like everyone else"},
      {q: "The sooner you fall behind, the more time you'll have to catch up."},
      {q: "I got food poisoning today. I don't know when I'll use it."},
      {q: "You know how it is when you go to be the subject of a psychology experiment and nobody else shows up and you think maybe that's part of the experiment? I'm like that all the time."},
      {q: "It's a small world, but I wouldn't want to have to paint it."},
      {q: "I woke up one morning, and all of my stuff had been stolen and replaced by exact duplicates."},
      {q: "The sign said \"eight items or less\". So I changed my name to Les."},
      {q: "If you tell a joke in the forest, but nobody laughs, was it a joke?"},
      {q: "24 hours in a day, 24 beers in a case. Coincidence?"},
      {q: "Is it good if a vacuum really sucks?"},
      {q: "I'm not afraid of heights, I'm afraid of widths."},
      {q: "I just got out of the hospital. I was in a speed-reading accident. I hit a bookmark"},
      {q: "I watched the Indy 500, and I was thinking that if they left earlier they wouldn't have to go so fast."},
      {q: "I'm writing a book. I'm almost finished. I numbered the pages. Now all I have to do is fill them in."},
      {q: "Light travels faster than sound. This is why some people appear bright until they speak."},
      {q: "Everyone who believes in psychokinesis raise my hand."},
      {q: "I went into a general store. They wouldn't let me buy anything specifically."},
      {q: "I couldn't repair your brakes, so I made your horn louder."},
      {q: "What is another name for a Thesaurus?"},
      {q: "I'm donating my body to science...fiction."},
      {q: "Everywhere is within walking distance if you have the time."},
      {q: "I'm actually writing a short story about a photographer who went completely insane trying to take a close up photo of the horizon."},
      {q: "If heat rises, heaven must be hotter than hell."},
      {q: "When i have a kid, I want to put him in one of those strollers for twins, then run around the mall looking frantic."},
      {q: "You can't have everything... where would you put it?"},
      {q: "I think it\'s wrong that only one company makes the game Monopoly."},
      {q: "I was reading the dictionary, I thought it was a poem about everything"},
      {q: "I was a peripheral visionary. I could see the future, but only way off to the side."},
      {q: "I saw a bank that said ‘24 Hour Banking,' but I don't have that much time."},
      {q: "So I figured I'd leave the area, because I had no ties there anyway except for this girl I was seeing. We had conflicting attitudes: I really wasn't into meditating and she wasn't really into being alive. I told her I knew when I was going to die because my birth certificate has an expiration date."},
      {q: "I donated my body to science...fiction."},
      {q: "Be nice to your children. After all, they are going to choose your nursing home."},
      {q: "I just found out I have an IQ of 208, and I don't know what that means."}
          ];

        //Store the value of a randomly selected quote object in 'selectedQuote'
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        var selectedQuote = Object.values(randomQuote);

          //Display currently selected quote
          $('.well').hide().html('"' + selectedQuote + '"').fadeIn(500);

          //Tweet button for current/selected quote
          document.addEventListener( 'click', function(){
  document.getElementById("tweeter").href='https://twitter.com/intent/tweet/?text=' + '"' + selectedQuote + '" - Steven Wright';

      });
    });
  });
