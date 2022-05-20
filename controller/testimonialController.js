const res = require('express/lib/response')
const Testimonial = require('../models/testimonialModel')

exports.getAllTestmonial = async (req, res) => {
    try {
        let data = await Testimonial.findAll();
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (err) {
        res.status(400).json({
            stauts: 'fail',
            message: err.message
        })
    }
}

exports.getTestimonial = async(req,res)=>{
    try {
        let data = await Testimonial.findByPk(req.params.id)
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (err) {
        res.status(400).json({
            stauts: 'fail',
            message: err.message
        })   
    }
}

exports.createTestinomial = async (req, res) => {
    try {
        let testimonial = await Testimonial.create(req.body)
        res.status(200).json({
            status: 'success',
            message: 'Testinomial created successfully',
            data: testimonial
        })
    } catch (err) {
        res.status(400).json({
            stauts: 'fail',
            message: err.message
        })
    }
}

exports.deleteTestinomial = async (req, res) => {
    try {
        await Testimonial.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({
            status: 'success',
            message: 'testinomial deleted successfully'
        })

    } catch (err) {
        res.status(400).json({
            stauts: 'fail',
            message: err.message
        })
    }
}

exports.updateTestinomial = async (req, res) => {
    try {

        let testimonial = await Testimonial.update(req.body, { where: { id: req.params.id } })
        res.status(200).json({
            status: 'success',
            message: 'testinomial updated successfully',
            data: testimonial
        })
    } catch (err) {
        res.status(400).json({
            stauts: 'fail',
            message: err.message
        })
    }
}