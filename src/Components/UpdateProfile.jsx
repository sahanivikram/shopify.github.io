import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function UpdateProfile() {
    let [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        pin: "",
        city: "",
        state: "",
        pic: "",
        username: ""
    })
    let navigate = useNavigate()
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function getInputFile(e) {
        var { name, files } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: files[0].name
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        var response = await fetch("/user/" + localStorage.getItem("userid"), {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ ...data })
        })
        response = await response.json()
        if (data.role === "Admin")
            navigate("/admin")
        else
            navigate("/profile")
    }
    async function getAPIData() {
        let response = await fetch("/user/" + localStorage.getItem("userid"), {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        setData(response)
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="w-75 m-auto">
                    <h5 className='text-center bg-primary p-2 text-light'><span className='text-warning fs-3'>Update</span> Profile</h5>
                    <form onSubmit={postData}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Name</label>
                                <input type="text" name="name" onChange={getInputData} placeholder='Full Name' className='form-control' value={data.name} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Pic</label>
                                <input type="file" name="pic" onChange={getInputFile} className='form-control' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Email</label>
                                <input type="email" name="email" onChange={getInputData} placeholder='Email Address' className='form-control' value={data.email} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Phone</label>
                                <input type="text" name="phone" onChange={getInputData} placeholder='Phone Number' className='form-control' value={data.phone} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>Address</label>
                            <textarea name="address" rows="3" className='form-control' onChange={getInputData} placeholder='Address...' value={data.address}></textarea>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label>PIN</label>
                                <input type="number" name="pin" onChange={getInputData} placeholder='PIN Code' className='form-control' value={data.pin} />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label>City</label>
                                <input type="text" name="city" onChange={getInputData} placeholder='City Name' className='form-control' value={data.city} />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label>State</label>
                                <input type="text" name="state" onChange={getInputData} placeholder='State Name' className='form-control' value={data.state} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="btn-group w-100">
                                <button className='btn btn-success' onClick={()=>window.history.back()}>Back</button>
                                <button type="submit" className='btn btn-primary'>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
