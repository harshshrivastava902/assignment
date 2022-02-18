import React, { useState } from 'react'
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


function Project() {

    const { confirm } = Modal;

    const [tittle, setTittle] = useState("")
    const [proj_obj, setProj_obj] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [index, setIndex] = useState()

    const [data, setData] = useState([])
    const [formErrors, setFormErrors] = useState([]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    // validation
    const handleFormValidation = () => {
        let formErrors = {};
        let formIsValid = true;

        if (!tittle) {
            formIsValid = false;
            formErrors["tittle"] = "Tittle is required.";
        }
        if (!proj_obj) {
            formIsValid = false;
            formErrors["proj_obj"] = "Project Objective is required";
        }
        if (!from) {
            formIsValid = false;
            formErrors["from"] = "From month/year is required";
        }
        if (!to) {
            formIsValid = false;
            formErrors["to"] = "To month/year is required.";
        }

        setFormErrors(formErrors);
        return formIsValid;
    };


    // add func

    const Add_fucn = () => {

        if (handleFormValidation()) {
            let json = {
                tittle: tittle,
                proj_obj: proj_obj,
                from: from,
                to: to
            }
            data.push(json)
            setData(data)
            console.log("data==>", data)

        }

    }


    const showModal = (index) => {
        setIsModalVisible(true);
        setIndex(index)
    };

    const handleOk = () => {
        data.splice(index, 1)
        setData(data)
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div className='conatiner'>
            <div className='m-5' align="left">
                <h2>Project</h2>
                <hr></hr>
            </div>

            <div className='content'>
                <div className='row m-5' align="left">
                    <div className='col-lg-6 col-6'>

                        <input type="text" className='col-lg-6 col-6 form-control'
                            onChange={(e) => {
                                setTittle(e.target.value)
                            }}
                            placeholder='Tittle' style={{ border: "none" }}></input>
                        <hr></hr>
                        {formErrors.tittle && (
                            <p
                                style={{
                                    color: "red",
                                    fontSize: ".8rem",

                                }}
                            >
                                {formErrors.tittle}
                            </p>
                        )}
                    </div>
                    <div className='col-lg-6 col-6'>

                        <input type="text" className='col-lg-6 col-6 form-control'
                            onChange={(e) => {
                                setProj_obj(e.target.value)
                            }}
                            placeholder='Project Objective' style={{ border: "none" }}></input>
                        <hr></hr>
                        {formErrors.proj_obj && (
                            <p
                                style={{
                                    color: "red",
                                    fontSize: ".8rem",

                                }}
                            >
                                {formErrors.proj_obj}
                            </p>
                        )}
                    </div>

                </div>

                <div className='row m-5' align="left">
                    <div className='col-lg-4 col-4'>
                        <label for="floatingInput" className='label-head'>From month/year</label>
                        <input type="date" className='col-lg-4 col-4 form-control'

                            onChange={(e) => {
                                setFrom(e.target.value)
                            }}
                            placeholder='From month/year' style={{ border: "none" }}></input>

                        <hr></hr>
                        {formErrors.from && (
                            <p
                                style={{
                                    color: "red",
                                    fontSize: ".8rem",

                                }}
                            >
                                {formErrors.from}
                            </p>
                        )}
                    </div>
                    <div className='col-lg-4 col-4'>

                        <label for="floatingInput" className='label-head'>To month/year</label>
                        <input type="date" className='col-lg-4 col-4 form-control'
                            onChange={(e) => {
                                setTo(e.target.value)
                            }}
                            placeholder='To month/year' style={{ border: "none" }}></input>
                        <hr></hr>
                        {formErrors.to && (
                            <p
                                style={{
                                    color: "red",
                                    fontSize: ".8rem",

                                }}
                            >
                                {formErrors.to}
                            </p>
                        )}
                    </div>
                    <div className='col-lg-4 col-4' align="right">
                        <button type="button pd-10" onClick={() => {
                            Add_fucn()
                        }} className="btn btn-primary">Add</button>
                    </div>

                </div>

                <div className='m-5 table-responsive-lg'>
                    <table class="table">
                        <thead class="table-dark">
                            <tr>
                                <th>Tittle</th>
                                <th>Project Objective</th>
                                <th>From</th>
                                <th>To</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, i) => {
                                    return (
                                        <tr>
                                            <td>{item.tittle}</td>
                                            <td>{item.proj_obj}</td>
                                            <td>{item.from}</td>
                                            <td>{item.to}</td>
                                            <td><div className='icon rounded-lg' onClick={showModal}>
                                                <i class="fa-solid fa-trash-can"></i>

                                            </div></td>
                                        </tr>
                                    )

                                })
                            }

                        </tbody>
                    </table>

                </div>

            </div>

            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p><ExclamationCircleOutlined/>   Are you sure you want delete ?</p>

            </Modal>

        </div>
    )
}

export default Project