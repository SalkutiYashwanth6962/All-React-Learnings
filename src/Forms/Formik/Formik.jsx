import { useFormik } from 'formik'
import React from 'react'

const Formik = () => {
   let formik= useFormik({
    initialValues:{
        name:"",
        email:"",
        password:"",
        place:[],
        gender:"",
        feedback:"",
        dob:"",
        file:""


    },
    onSubmit:(values)=>{
        console.log(values);
    }
   })

  // console.log(name,email);
  return (
    <>
    <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange}/>
        <br /><br />
        <label htmlFor="email"> Email:</label>
        <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange}/>
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="password" value={formik.values.password} onChange={formik.handleChange}/>
        <br /><br />
        <div value={formik.values.place} onChange={formik.handleChange}>
        <label htmlFor="Place">Place:</label>
        <input type="checkbox" name="place" id="Bangalore" value="Bangalore" />
        <label htmlFor="Bangalore">Bangalore</label>
        <input type="checkbox" name="place" id="Hyderabad" value="Hyderabad"/>
        <label htmlFor="Hyderabad">Hyderabad</label>
        <input type="checkbox" name="place" id="Chennai" value="chennai" />
        <label htmlFor="Chennai">Chennai</label>
        </div>
        <label htmlFor="gender">Gender:</label>
        <div value={formik.values.gender} onChange={formik.handleChange}>
        <input type="radio" name="gender" id="male" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female"  value="female"/>
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="others"  value="others"/>
        <label htmlFor="others">Others</label>
        </div>

        <label htmlFor="feedback">Feedback</label>
        <textarea name="feedback" id="feedback" cols="30" rows="10" value={formik.values.feedback} onChange={formik.handleChange}></textarea>
        <br /><br />
         <label htmlFor="dob">DOB:</label>
         <input type="datetime-local"  name="dob" id="dob" value={formik.values.dob} onChange={formik.handleChange} />
         <br /><br />
         {/* file */}
         <label htmlFor="file">Choose a File:</label>
         <input type="file" name="file" id="file" value={formik.values.file} onChange={formik.handleChange}/>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Formik