const express = require('express');
const db = require('../models')
const jwt = require('jsonwebtoken')

const User = db.users

const saveUser = async (req, res, next) => {
    try {
        const email = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (email) {
            return res.json(409).send("username already taken");
        }

        next();
    } catch (error) {
        console.log(error);
    }
};

const checkUser = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
      
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
      
        // Verify and decode the token
        jwt.verify(token, process.env.secretKey, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
      
            req.user = decoded;
            next();
        });

        // next();
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    saveUser, checkUser
};