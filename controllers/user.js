const bcrypt = require('bcrypt');
const db = require('../models')
const jwt = require('jsonwebtoken')

const User = db.users

const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hashedPassword,
        });

        if (user){
            // const token = jwt.sign({ id: user.id }, process.env.secretKey, { expiresIn: 1 * 60 * 60 * 1000});

            // res.cookie("jwt", token, {maxAge: '1h', httpOnly: true})
            res.status(201).json({ user });
        } else {
            res.status(400).send('Invalid email or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) return res.status(400).send('User not found');

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) return res.status(400).send('Invalid email or password');
        
        const token = jwt.sign({ id: user.id }, process.env.secretKey, { expiresIn: 1 * 60 * 60 });

        // res.cookie("jwt", token, {maxAge: 1 * 60 * 60 * 1000, httpOnly: true})
        res.json({ user, token, expiresIn: 1 * 60 * 60  });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

module.exports = {
    signup,
    login,
};