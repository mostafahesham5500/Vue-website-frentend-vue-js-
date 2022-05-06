import $ from 'jquery';

import "jquery/dist/jquery";

import "./head.css";
export default ({
    name:"HeaderVue",
    methods:{
        cli: function(){
            $(".screen-mb").toggleClass("show-mb");
        },
    },
    mounted: function() {
        $(document).scroll(function(){

            if (window.scrollY >= 50) {
                $("#nav").addClass("navcolor");
            }else{
                $("#nav").removeClass("navcolor");
            }
        });


    var item = document.querySelectorAll(
        ".list-pages > li > a,.list-pages-mb > li > a,.al"
    );
    var a = document.querySelectorAll('[href*="#"]');

    a.forEach(function(el) {
        el.onclick = function(item){
            item.preventDefault();
        }
    });

    var apper = document.querySelector(".apper");
    var left = document.querySelector(".left-apper");
    var right = document.querySelector(".right-apper");
    var num =document.querySelector(".apper .num");
    var show = document.getElementsByClassName("screen-mb")[0];
    num.innerHTML = 1;
    item.forEach(function(el){
        el.onclick = function(){
            window.scrollTo(0,0);
            left.classList.add("active")
            right.classList.add("active")
            apper.style.display="block";
            var v=1;
            var nn = setInterval(() => {
                v+=1;
                num.innerHTML=v + "%";
                if(v == 100){
                    clearInterval(nn);
                }
            }, 13);
            show.classList.remove("show-mb");
            setTimeout(() => {
                left.classList.remove("active")
                right.classList.remove("active")
                apper.style.display="none";
            }, 1500);

            setTimeout(() => {
                num.innerHTML=1;
            }, 1600);
        }
    });

    window.onload = function(){
                left.classList.add("active")
                right.classList.add("active")
                apper.style.display="block";
                var v=1;
                var nn = setInterval(() => {
                    v+=1;
                    num.innerHTML=v + "%";
                    if(v == 100){
                        clearInterval(nn);
                    }
                }, 13);
                setTimeout(() => {
                    left.classList.remove("active")
                    right.classList.remove("active")
                    apper.style.display="none";
                }, 1500);
        
                setTimeout(() => {
                    num.innerHTML=1;
                }, 1600);
    }






    },
        // a:function(){
        //     console.log($(".nav"));
        //     // if(document.getElementsByName("nav").scrollTop >=500){
        //     //     console.log("ggg");
        //     // }else{
        //     //     console.log("mmmm");
        //     // }
        // }
});