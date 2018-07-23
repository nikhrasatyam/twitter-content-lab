import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Field,reduxForm} from'redux-form'
import {getTweets,sortBy,displayCount} from '../actions/tweets_action'


class SearchTweets extends Component {
          
  onSubmit=(event)=>{
        this.props.dispatch(getTweets(event)).then(this.props.dispatch(displayCount(event.display)))
  }

  sortByEventHandler = (event) =>{
    this.props.dispatch(sortBy(event.target.value))
  }


  renderInputField(field){
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
   


  render() {
    return (
        <div>
                <div className="Form">
                    <form onSubmit={this.props.handleSubmit((event) => this.onSubmit(event))}>
                        <div className="Form">

                            <Field
                                label="Enter Hashtag (For multiple hashtag search, separate hashtags by ','. Ex #hashtag1,#hashtag2)"
                                name="hashtag"
                                type="text"
                                component={this.renderInputField}
                            />

                            <Field
                                label="Enter Display"
                                name="display"
                                type="text"
                                component={this.renderInputField}
                            />
                            <label>Sort By</label>
                            <Field
                                label ="Sort By"
                                name="sortBy"
                                component="select"
                                onChange = {this.sortByEventHandler}
                            >
                                <option value="favorite_count">Favourite</option>
                                <option value="retweet_count">Retweet</option>
                            </Field>
                       
    

                            <br />
                            <button class="btn btn-primary" type="submit">Submit</button>&nbsp;
                        </div>
                    </form>

                </div>
        
        </div>

    )
  }
}

function validate(values){
  const errors={};

  if(!values.hashtag){
      errors.hashtag = "The hashtag is empty"
  }

  if(!values.display){
    errors.display = "The display is empty"
}
if(isNaN(values.display)){
    errors.display = "The display is not a number "
}
if(values.display < 1)
    errors.display = "The number cannot be less than 1" ;
if(!values.sortBy){
    values.sortBy = "favorite_count"
}
return errors;
}
export default reduxForm({
    validate,
    form:'SearchTweets',

  })(connect(null,null)(SearchTweets) )
  
