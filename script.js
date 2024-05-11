function locomotiveAnimation()
{
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locomotiveAnimation()

function navAnimation() {
    let nav = document.querySelector("nav");
    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to(".nav-bottom",
            {
                height: "30vh"
            })
        tl.to(".nav-part2 h5",
            {
                display: "block"
            })
        tl.to(".nav-part2 h5 span",
            {
                y: 0,
                stagger:
                {
                    amount: 0.6
                }
            })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span",
            {
                y: 25,
                stagger:
                {
                    amount: 0.2
                }
            })
        tl.to(".nav-part2 h5",
            {
                display: "none",
                duration: 0.2
            })
        tl.to(".nav-bottom",
            {
                height: 0,
                duration: 0.2
            })
    })
}
navAnimation()

function page2Animantion()
{
    var rightElems = document.querySelectorAll(".right-elem")
rightElems.forEach(function(elem)
{
    elem.addEventListener("mouseenter",function()
{
    gsap.to(elem.childNodes[3],
    {
        opacity:1,
        scale:1
    })
})
elem.addEventListener("mouseleave",function()
{
    gsap.to(elem.childNodes[3],
    {
        opacity:0,
        scale:0
    })
})
elem.addEventListener("mousemove",function(dets)
{
    gsap.to(elem.childNodes[3],
    {
        x:dets.x - elem.getBoundingClientRect().x - 90,
        y:dets.y - elem.getBoundingClientRect().y - 215
    })
})
})
}
page2Animantion()

function page3VideoAnimation()
{
    var page3Center = document.querySelector(".page3-center")
var video = document.querySelector(".page3 video")
page3Center.addEventListener("click",function()
{
    video.play()
    gsap.to(video,
    {
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click",function()
{
    video.pause()
    gsap.to(video,
        {
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        })
})
}
page3VideoAnimation()

function page6VideoAnimation()
{
    var sections = document.querySelectorAll(".sec-right")
sections.forEach(function(elem)
{
    elem.addEventListener("mouseenter",function()
{
    elem.childNodes[3].style.opacity = 1
    elem.childNodes[3].play()
})
elem.addEventListener("mouseleave",function()
{
    elem.childNodes[3].style.opacity = 0
    elem.childNodes[3].load()
})
})
}
page6VideoAnimation()


function page8Animantion()
{
    gsap.from(".btm8-part2 h4",
{
    x:0,
    duration:1,
    scrollTrigger:
    {
        trigger:".btm8-part2",
        scroller:"#main",
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})

gsap.from(".btm8-part3 h4",
{
    x:0,
    duration:1,
    scrollTrigger:
    {
        trigger:".btm8-part3",
        scroller:"#main",
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})

gsap.from(".btm8-part4 h4",
{
    x:0,
    duration:1,
    scrollTrigger:
    {
        trigger:".btm8-part4",
        scroller:"#main",
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})
}
page8Animantion()

function loadingAnimation()
{
    gsap.from(".page1",
{
    transform:"scaleX(0.7) scaleY(0)"
})
}

loadingAnimation()







