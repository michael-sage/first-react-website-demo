import React, { Component } from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*' }
        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message...*' }
        ]
    ]
}

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }

    }
    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form onSubmit={this.props.handleSubmit} id="contactForm" name="sentMessage" novalidate="novalidate">
                        <div className="row align-items-stretch mb-5"> 

                            {fields.sections.map((section, sectionIndex) => {
                                console.log("Rendering section:", sectionIndex, "with",  section); //demonstrating the render of two separate arrays
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field,i) =>{
                                            return <Field 
                                                        {...field} 
                                                        key={i} 
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        errors={this.props.errors[field.name]}
                                                        touched={this.props.touched[field.name]}
                                                    />
                                        })}
                                    </div>
                                ) 
                            })}


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
    mapPropsToValues: () => ({
        name:'',
        email:'',
        phone:'',
        message:''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Please enter your name'),
        email: Yup.string().email('Email address invalid')
            .required('You must enter an email address'),
        phone: Yup.string()
            .min(10, 'Invalid phone number')
            .max(15, 'Invalid phone number')
            .required('Please enter a phone number'),
        message: Yup.string().required('Please enter your message')
    }),
    handleSubmit: (values, {setSubmitting}) =>{
        console.log("VALUES");
        alert("Form submitted!")
    }
})(Contact);

// validate: values => {
//     const errors = {};

//     Object.keys(values).map(v => {
//         if (!values[v]) {
//             errors[v] = "Required"
//         }
//     })

//     return errors;