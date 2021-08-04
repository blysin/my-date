new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("晚上一起吃饭ヽ(^ω^)ﾉ  ")
    .pause(5000)
    .delete(null, {
        delay: 500
    })
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();