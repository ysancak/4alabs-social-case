export const splashBg = require('../../assets/bg/bg-splash.png');
export const homeBg = require('../../assets/bg/bg-home.png');
export const conversationBg = require('../../assets/bg/bg-conversation.png');
export const profileBg = require('../../assets/bg/bg-profile.png');

export const splashGallery = [
    require('../../assets/splash/hero.png'),
    require('../../assets/splash/hero-2.png')
]

export const stories = [
    'https://i.pravatar.cc/200?img=38',
    'https://i.pravatar.cc/200?img=32',
    'https://i.pravatar.cc/200?img=30'
]

export const feeds = [
    {
        image: 'https://picsum.photos/id/26/600/600',
        user: {
            name: 'Dennis Reynolds',
            avatar: 'https://i.pravatar.cc/200?img=68'
        },
        time: 1675350784,
        stats: {
            like: 3654,
            comment: 648,
            save: 129
        }
    },
    {
        image: 'https://picsum.photos/id/114/600/600',
        user: {
            name: 'Dennis Reynolds',
            avatar: 'https://i.pravatar.cc/200?img=35'
        },
        time: 1675358553,
        stats: {
            like: 2487,
            comment: 325,
            save: 108
        }
    }
]

export const conversations = [
    {
        user: {
            name: 'John Doe',
            avatar: 'https://i.pravatar.cc/200?img=22'
        },
        lastMessage: 'when an unknown printer took a galley of type'
    },
    {
        user: {
            name: 'Dennis Reynolds',
            avatar: 'https://i.pravatar.cc/200?img=25'
        },
        lastMessage: 'Where can I get some?'
    },
    {
        user: {
            name: 'Dennis Reynolds',
            avatar: 'https://i.pravatar.cc/200?img=36'
        },
        lastMessage: 'Where can I get some?'
    },
]

export const userProfile = {
    id: 1,
    name: "Dennis Reynolds",
    nickname: '@johndoe',
    avatar: 'https://i.pravatar.cc/200?img=21',
    stats: {
        posts: 35,
        followers: 1552,
        follows: 128
    }
}

export const userPhotos = [
    {
        url: 'https://picsum.photos/id/26/600/600',
        width: 600,
        height: 600
    },
    {
        url: 'https://picsum.photos/id/19/600/600',
        width: 800,
        height: 600
    },
    {
        url: 'https://picsum.photos/id/36/600/600',
        width: 600,
        height: 900
    },
    {
        url: 'https://picsum.photos/id/49/600/600',
        width: 600,
        height: 900
    }
]

export const messageDetail = {
    user: {
        name: "Charlie Kelly",
        status: "Online",
        avatar: 'https://i.pravatar.cc/200?img=48',
    },
    messages: [
        {
            senderId: 2,
            message: "we r goin to c the lions",
            time: 1675350684
        },
        {
            senderId: 2,
            message: "they are doing a feed thing event at the zoo..",
            time: 1675350694
        },
        {
            senderId: 1,
            message: "when?",
            time: 1675350894
        },
        {
            senderId: 1,
            message: "see the lions or sea lions? also, is mac there with u??",
            time: 1675350994
        }
    ]
}