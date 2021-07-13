//Project Mixed Messages

const selfHatred = [
    "I love and approve of myself just the way I am.",
    "I release the self-hatred and forgive myself for holding onto it.",
    "I love and accept my body and my height, my weight, and all my curves.",
    "I love and adore my face, my features, my wrinkles, my nose, my ears and my hair.",
    "I release all the negative thoughts about my body and my face and replace them with love.",
    "I trust my inner voice and my intuition to show me the way.",
    "I let go of the self-sabotage I used to do to myself.",
    "I forgive myself for the way I treated me in the past.",
    "I am caring and loving to myself at all times.",
    "I accept and forgive all my mistakes, all my failures and all my regrets.",
];

const selfFear = [
    "Life is lovely, and I trust the world to help me live a memorable life.",
    "I am enough.",
    "With every air that I exhale, I release tension.",
    "Every passing day, I feel more relaxed and calmer.",
    "All is well with me.",
    "I’m strong. I’m ready for change.",
    "I’ll overcome the situation if I remain courageous.",
    "I got the power of preventing this.",
    "I’m capable of persevering and remaining strong.",
    "I’m free from anxiety.",
];

const selfAnger = [
    "I can feel my anger and still stay in control.",
    "I am at peace and harmony with everyone and everything.",
    "I can do better next time.",
    "I release all my embodied anger!",
    "I will remember to stop, relax and think before I act.",
    "I clear and release all my angry thoughts and feelings!",
    "I allow myself to acknowledge angry feelings without losing control.",
    "I can express my anger in a respectful way.",
    "I choose now to release anger and reclaim my happiness.",
    "Controlling my anger comes naturally to me.",
];   

const selfRegret = [
    "I am free from my past regrets.",	
    "I am living my life without regrets.",
    "I accept my life and everything I have done.",
    "My mind is focused on enjoying the present moment.",
    "I am on the path to a brighter future.",
    "I am transforming into someone who lives happily in the present moment.",
    "Letting go of my regrets is becoming easier and more natural.",
    "I will move on with my life.",
    "I will become free from regrets.",
    "I am starting to see that my future will be bright and happy.",
];

const selfShame = [
    "I am working my recovery.",
    "I am an imperfect yet worthwhile person.",
    "I have value and worth.",
    "I have done bad things, but I am not a bad person.",
    "It is OK for me to talk to others about what I am thinking and feeling.",
    "I am letting go of my shame.",
    "Today, I am living my values.",
    "Negative feelings are just feelings. They don’t last.",
    "I honor who I am.",
    "I am a strong person with healthy habits.",
];

const selfGuilt = [
    "I lay down the heavy weight of doubt, shame, guilt and embarrassment.",
    "I release the past so I can step into the future with pure intentions.",
    "I am capable of moving beyond my mistakes.",
    "I am able to heal from the hurt and pain of what I have caused.",
    "I am worthy of all the compassion and kindness life offers me.",
    "I forgive myself one day at a time until it’s complete.",
    "I gently release the grip of anger and rage from my body.",
    "I set my past free and forgive my participation in it.",
    "I give up the hope of a different past by accepting my true past.",
    "I trust my present and future decisions based on love and good intentions.",
];

const selfSadness = [
    "My sadness and my depression do not define me.",
    "I don’t have to be productive to see value in myself.",
    "I am resilient in the face of any challenge.",
    "I am in charge of my life, and my happiness and I feel happy and content.",
    "Not everybody will understand my situation, and it is okay.",
    "I am much more than what I think I am.",
    "Every day is a gift, and I am blessed to see today. I will see tomorrow and the next and bless them too.",
    "I have made it this far, and I won’t stop now.",
    "I am loved and appreciated even when it seems like I’m not.",
    "I am a work in progress, and I welcome every positive change. The darkness s in the past, and I open my eyes to new beginnings.",
];

const quotes = (feeling, affirmationsArray) => {
    return {
        feel: feeling,
        affirm: affirmationsArray,
        randomAffirm() {
            let randomIndex = Math.floor(Math.random() * this.affirm.length);
            return `"${this.affirm[randomIndex]}"`;
        },
    }
}

const emotionHate = quotes("hate", selfHatred);
const emotionFear = quotes("fear", selfFear);
const emotionAnger = quotes("angry", selfAnger);
const emotionRegret = quotes("regret", selfRegret);
const emotionShame = quotes("shame", selfShame);
const emotionGuilt = quotes("guilt", selfGuilt);
const emotionSad = quotes("sad", selfSadness);

const negativeFeeling = [emotionHate, emotionFear, emotionAnger, emotionRegret, emotionShame, emotionGuilt, emotionSad];

const message = () => {
    let randomIndex = Math.floor(Math.random() * negativeFeeling.length);
        console.log(`If you feel ${negativeFeeling[randomIndex].feel}, repeat this affirmations ${negativeFeeling[randomIndex].randomAffirm()}`);
}

message();

