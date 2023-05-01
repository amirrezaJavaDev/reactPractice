import React,{useState} from "react";
import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
const Contact = ()=>{
    const [subject,setSubject] = useState('');
    const [email,setEmail] = useState('');
    const [textarea,setTextarea] = useState('');
    const [errors,setErrors] = useState({});
    //function checking email
    const checkEmail = (email)=>{
        console.log("email is :",email);
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return filter.test(String(email).toLowerCase());
    }
    const handelonclickinputsubject = (event)=>{
            setSubject(event.target.value);
    }
    const handelemailvalue = (event)=>{
        if(checkEmail(event.target.value)){
            setEmail(event.target.value);
            setErrors({
                ...errors,
                email:null,
            });
        }else{
            setErrors({
                ...errors,
                email:'Email is not vaild'
            });
        }
    }
    const handeltextareavalue = (event)=>{
        setTextarea(event.target.value);
    }
    const handelclickbtn = ()=>{
        let ticket = {
            subjectWasSet:subject,
            emailWasSet:email,
            textareaWasSet:textarea
        }
        console.log(ticket);
    }
    return(
        <Layout>
            <div className="contact">
                <div className="contactForm">
                    <input type="text" onChange={handelonclickinputsubject} placeholder="Subject"/>
                    <input type="email" onChange={handelemailvalue} placeholder="Enter you're email"/>
                    {errors.email && <span>{errors.email}</span>}
                    <textarea onChange={handeltextareavalue}>pleace type you're request on here</textarea>
                <Button handleclick={handelclickbtn}>Send</Button>
                </div>
            </div>
        </Layout>
    )
}
export default Contact;