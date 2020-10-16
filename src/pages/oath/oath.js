/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState,useEffect,useRef} from 'react'
import {TimelineLite,TweenLite} from 'gsap'
import {Link} from 'react-router-dom';
import db from '../../firebase'
import './oath.scss'
function oath() {
    const [name,setName]=useState("name");
    const [error,setError]=useState({status:false,message:null})
    const [success,setSuccess]=useState(false);
    const [count,setCount]=useState(0);
    let container=useRef(null);
    let logo=useRef(null);
    let oath=useRef(null);
    let tl=new TimelineLite();
    useEffect(()=>{
        TweenLite.to(container,0,{css:{visibility:'visible'}})
        tl.from(logo,1,{opacity:0,y:50})
        .from(oath,1.5,{opacity:0,delay:-1})
    },[])
    useEffect(()=>{
        db.collection('users').onSnapshot(snapshot=>{
           
                setCount(snapshot.docs.length)
        })
    },[count])
    const onClickHandler=()=>{
        const value=name.trim().toLowerCase();
        if(value.length===0){
            setError({status:true,message:"Name cannot be empty."})
            setSuccess(false);
        }else if(value==="name"){
            setError({status:true,message:"Replace name with your name."})
            setSuccess(false);
        }
        else{
            db.collection('users').add({
                name
            })
            setError({status:false,message:null});
            setSuccess(true);
        }
    }
    return (
        <div className="oath" ref={el=>container=el} >
             <nav>
                    <h3 ref={el=>logo=el}>saveEarth.</h3>
                </nav>
                <div className="oath__content" ref={el=>oath=el} style={{display:success&&"none"}}>
                    <p className="oath__line">I <input style={{width:name.length+1+"ch"}} type="text" value={name} onChange={e=>setName(e.target.value)}/>. I promise to protect the mother Earth in all the ways possible.</p>
                    <button onClick={onClickHandler}>Yes, I do</button>
    <p className="oath__error">{error.status&&error.message}</p>
    <div className="oath__takersInfo">
                <h4>Join <b>{count}</b> people, for making Earth a better place to live</h4>
        </div>
               
                </div>   
                <div className="oath__success" style={{display:success&&'grid'}}>
                    <p><b>Thanks</b>, Never forget you took the oath.</p>
                   <p>Together, We can make the Earth a better place to live In.</p>
                    <Link to="/" className="back__home">Back to Home</Link>
                </div>
        </div>
    )
}

export default oath
