const TimeUp = () =>{
    var time=new Date("Jan 1, 2026 12:00:00").getTime();
    var now=new Date();
    var dif=time-now;
    const sec=1000;
    const min=sec*60;
    const hr=min*60;
    const day=hr*24;
    let Tday=Math.floor(dif/day);
    let Thrs=Math.floor((dif%day)/hr);
    let Tmin=Math.floor((dif%hr)/min);
    let Tsec=Math.floor((dif%min)/sec);
    document.getElementById("x1").innerHTML=Tday;
    document.getElementById("x2").innerHTML=Thrs;
    document.getElementById("x3").innerHTML=Tmin;
    document.getElementById("x4").innerHTML=Tsec;
};
setInterval(TimeUp,1000);
