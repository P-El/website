import React , {Component} from 'react';
import Field from '../common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';
const fields ={
    section :[
     [
        {name :'name',elementName:'input' ,type:'text', placeholder:'your name' },
        {name :'email',elementName:'input' ,type:'email', placeholder:'your email' },
        {name :'phone',elementName:'input' ,type:'text', placeholder:'your phone number' }

    ],
    [
        {name :'message',elementName:'textarea' ,type:'text', placeholder:'Type your message' }

    ]
   ]
}
class Contact extends Component{
 

    render(){
        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form onSubmit={this.props.handleSubmit} id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                     {fields.section.map((section, sectionIndex) =>{
                         console.log("Rendering Section", sectionIndex,"with",section)
                         return (
                             <div className="col-md-6" key={sectionIndex}>
                                    {section.map((field, i)=>{
                                        return <Field {...field} key={i}
                                        value ={this.props.values[field.name]}
                                        name = {field.name}
                                        onChange ={this.props.handleChange}
                                        onBlur ={this.props.handleBlur}
                                        touched ={(this.props.touched[field.name])}
                                        errors = {this.props.errors[field.name]}
                                        />
                                    })}
                                 </div>
                         )
                          } )
                     }
                        
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button 
                        className="btn btn-primary btn-xl text-uppercase" 
                        id="sendMessageButton" 
                        type="submit"
                        
                        >Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        );
    }
}
export default withFormik({
    mapPropsToValues:() => ({
        name:'',
        email:'',
        phone:'',
        message:'',
    }),
    // validate : values =>{
    //     const errors ={};
        
    //     Object.keys(values).map(v =>{
    //         if(!values[v]){
    //             errors[v] = "Required";
    //         }
    //     })
    //     return errors

    // },
    validationSchema: Yup.object().shape({
        name:Yup.string().min(3,'your name is longer than that.').required('Yon must give us your name'),
        email: Yup.string().email('please enter valid email address').required('We need Your Email Address'),
        phone:Yup.string().min(10,'Please provide your 10 digit phone nuumber').max(15,'Your phone number is to long').required('we need a phone number to reach you at.'),
        message: Yup.string().min(100,'You need to provide detailed information').required('Message is required')
    }),
    handleSubmit:(values, {setSubmitting}) =>{
        console.log("VALUES",values)
      alert("You Submitted a Form" ,JSON.stringify(values));
    }
})(Contact);