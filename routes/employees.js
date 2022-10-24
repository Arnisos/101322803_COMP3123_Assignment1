const express = require("express")
const mongoose = require("mongoose")
const Employee = require("../models/Employees")


const EmployeeModel = require("../models/Employees")
const routes = express.Router()

/*
{
    "firts_name": "Arnur,
    "last_name": "Azangaliyev",
    "email": "arnur@mail.ru",
    "gender":"male",
    "salary": 100
}
*/





//Get All Employee
routes.get("/employees", async (req, res) => {
    try{
        const employees = await EmployeeModel.find()
        res.status(200).send(employees)
    }catch(error){
        res.status(400).send(error)
    }
})

//Add NEW Employee
routes.post("/employees", async (req, res) => {
    try{
        const newEmployee = new EmployeeModel(req.body)
        const employee = await newEmployee.save()
        res.status(201).send(employee)
    }catch(error){
        res.status(400).send({
            message: "email already exist"
        })
    }
})

//Update existing Employee By Id
routes.put("/employees/:employeeid", async (req, res) => {
    try{
        const newEmployee = await EmployeeModel.findByIdAndUpdate(req.params.employeeid, req.body)
        res.status(200).send({
            message: "Employee updated successfully"
        })
    }catch(error){
        res.status(400).send(error)
    }  
})

//Delete Employee By ID
routes.delete("/employees/:eid", async(req, res) => {
    try{
        const newEmployee = await EmployeeModel.findByIdAndDelete(req.query.eid, req.body)
        res.status(204).send({
            message: "Employee deleted successfully"
        })
        if(!deleteEmployee){
            res.status(400).send({message: "No employee deleted"})
        }
    }catch(error){
        res.status(400).send(error)
    }
})

//Get Employee By ID
routes.get("/employees/:employeeid", async (req, res) => {
    try{
        const newEmployee = await EmployeeModel.findById(req.params.employeeid, req.body)
        res.status(200).send(newEmployee)
    }catch(error){
        res.status(400).send(error)
    }  
})

//Get All Books in sorted order

module.exports = routes