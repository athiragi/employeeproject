import React from 'react'
import Header from './Header'

const Viewall = () => {
    var employeelist=[       {
        "id": 1,
        "name": "Jerin",
        "designation": "Developer",
        "salary":"20000",
        "company":"xyz",
        "dob":"09-01-1998",
        "email":"jerin@2321"
      },
      {
          "id": 2,
          "name": "Sree",
          "designation": "Developer",
          "salary":"20000",
          "company":"xyz",
          "dob":"07-11-1998",
          "email":"sree@2321"
        },
        {
          "id": 3,
          "name": "Nithin",
          "designation": "Developer",
          "salary":"20000",
          "company":"xyz",
          "dob":"12-01-1997",
          "email":"athulya@2321"
        },
        {
          "id": 4,
          "name": "Ammu",
          "designation": "Developer",
          "salary":"20000",
          "company":"xyz",
          "dob":"23-12-1998",
          "email":"ammu@2321"
        },
        {
          "id": 5,
          "name": "Akash",
          "designation": "Developer",
          "salary":"20000",
          "company":"xyz",
          "dob":"09-11-1996",
          "email":"azar@2321"
        }]
  return (
    <div>
        <Header/>
         <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            
            
  {post.map((value,key)=>{
                    return <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Salary</th>
      <th scope="col">Company</th>
      <th scope="col">DOB</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
   
    <tbody>
    <tr>
      <th scope="row">{value.id}</th>
      <td>{value.name}</td>
      <td>{value.designation}</td>
      <td>{value.salary}</td>
      <td>{value.company}</td>
      <td>{value.dob}</td>
      <td>{value.email}</td>
    </tr>
    
  </tbody>
  </table>
                    </div>
                    
                })}

            </div>
        </div>
    </div>
</div>
        

    </div>
  )
}

export default Viewall