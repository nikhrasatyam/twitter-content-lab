import React from 'react'
import {Field} from'redux-form'

export default (props) =>{
    const{label,name,type} = this.props ;
    
    renderInputField = (field) => {
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`
        return(
            <div className = {className}>
                <label> {field.label} </label>
                <input className = "form-control" type = {field.type} {...field.input}/>
                <div className = "error"> 
                {field.meta.touched ? field.meta.error:null}
                </div>
            </div>
        )
    }

    return(
        <Field
        label = {label}
        name = {name}
        type={this.props.type}
        component={this.renderInputField}
    />
    )
}