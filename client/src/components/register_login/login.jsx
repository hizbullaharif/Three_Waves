import React,{useState} from 'react';
import FormField from '../utils/form/formField';
import {update,generateData,isFormValid} from  '../utils/form/formActions'
import {connect, useDispatch} from 'react-redux'
import {loginUser} from '../../actions/user_actions'
import {withRouter} from 'react-router-dom'

const Login = (props) => {
    const dispatch = useDispatch();
    const [formsuccess,setFormSuccess]=useState('')
    const [formError,setFormError]=useState(false)
    const [formdata,setFormData]= useState({
        email:{
            element:'input',
            value:'',
            config:{
                name:'email_input',
                type:'email',
                placeholder:'Enter your Email'
            },
            validation:{
                required:true,
                email:true
            },
            valid:false,
            touched:false,
            validationMessage:false
        },
        
        password:{
            element:'input',
            value:'',
            config:{
                name:'password_input',
                type:'password',
                placeholder:'Enter your password'
            },
            validation:{
                required:true,
                email:true
            },
            valid:false,
            touched:false,
            validationMessage:false
        }
    })
    
    const submitForm=(event)=>{
        event.preventDefault();
        let dataTosubmit = generateData(formdata,"login");
        console.log(dataTosubmit)
        // let formIsvalid = isFormValid(dataTosubmit)
        // console.log(formIsvalid)
        // if(formIsvalid){
            dispatch(loginUser(dataTosubmit)).then((response)=>{
                if(response.payload.loginSuccess){
                    console.log(response);
                    console.log('login succcess')
                    props.history.push('/user/dashboard')
                }else{
                   setFormError(true)
                   console.log("there is error")
                }
            })
        // }else{
        //     setFormError(true)
        // } 
    }

    const updateForm =(element)=>{
        const newFormData = update(element, formdata,'login')
        setFormData(newFormData);
        setFormError(false);
    }
    return (
        
        <div className="sigin_wrapper">
            <form onSubmit={(event)=>submitForm(event)}>
           
                <FormField
                    id={"email"}
                    formdata={formdata.email}
                    change={(element)=>updateForm(element)}
                />
                <FormField
                    id={"password"}
                    formdata={formdata.password}
                    change={(element)=>updateForm(element)}
                />
                {
                    formError
                    ?<div className = "error_label">
                      Please Check your Data
                    </div>
                    :null
                }
                <button onClick={(event)=>submitForm(event)}>Login</button>
            </form>
        </div>
    );
};
export default connect()(withRouter(Login));