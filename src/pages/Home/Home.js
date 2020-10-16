import React,{useRef,useEffect} from 'react'
import './home.scss'
import {TweenLite,TimelineLite} from 'gsap'
import {Link} from 'react-router-dom'
function Home({load,setLoad}) {
    //gsap timeLine
    const tl=new TimelineLite()
    let container=useRef(null);
    let screen1=useRef(null);
    let screen2=useRef(null);
    let screen1Line1=useRef(null);
    let screen1Line2=useRef(null);
    let earthimg=useRef(null);
    let heroContentLine1=useRef(null)
    let heroContentLine2=useRef(null)
    let oathBtn=useRef(null)
    let logo=useRef(null)

   useEffect(()=>{
      
    TweenLite.to(container,0,{css:{visibility:'visible'}})
    if(load){
    tl.to(screen1,0.5,{opacity:1})
    .staggerFrom([screen1Line1,screen1Line2],1.8,{y:100,opacity:0.2,delay:0.2})
    .to(screen1,1,{opacity:0,delay:1})
    .to(screen2,2,{opacity:1,delay:-0.1})
    .to(screen2,1.5,{opacity:0,delay:1.5})
    setLoad(false)
       }
       tl.staggerTo([screen1,screen2],0.1,{display:'none'})
       .from(earthimg,0.5,{opacity:0,x:50,delay:0.5})
       .from(logo,0.2,{opacity:0})
       .staggerFrom([heroContentLine1,heroContentLine2,oathBtn],1,{opacity:0,delay:1})
   },[])
    return (
        <div className="home" ref={el=>container=el}>
            <div className="screenOne" ref={el=>screen1=el}>
                <div className="screenOne__line1" >
                    <h1 ref={el=>screen1Line1=el}>Congratulations,</h1>
                </div>
                <div className="screenOne__line2" >
                    <h1 ref={el=>screen1Line2=el}>Humans</h1>
                </div>
            </div>
            <div className="screenTwo" ref={el=>screen2=el}>
                <div className="screenTwo__line1">
                    <h1>We are finally destroying,</h1>
                </div>
                <div className="screenTwo__line2">
                    <h1>the Earth</h1>
                </div>
            </div>
            <div className="main">
                <nav>
                    <h3 ref={el=>logo=el}>saveEarth.</h3>
                </nav>
                <div className="main__content" >
                    <div className="left">
                        <h1  ref={el=>heroContentLine1=el}>What I stand for is,<br/>What I stand On</h1>
                        <p  ref={el=>heroContentLine2=el}>Wendell Berry</p>
                        <Link to="/oath" className="oath__button"  ref={el=>oathBtn=el}>Take Oath</Link>
                    </div>
                    <div className="right">
                <img src="https://www.linkpicture.com/q/LPic5f88488688d00419339294.gif" ref={el=>earthimg=el} alt="earth rotating gif"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
