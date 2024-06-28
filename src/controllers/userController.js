const UserModel = require('../models/User');

const userController = {
    create: async (req, res) => {
        try{
            const user = {
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                image_url: req.body.image_url
            };
            
            const response = await UserModel.create(user);
            res.status(201).json({response, message: 'User created'});
        }
        catch(error){
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    },

    getAll: async (req, res) => {
        try{
            const users = await UserModel.find();
            res.status(200).json(users);
        }
        catch(error){ 
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    },
    get: async (req, res) => {
        try{
            const id = req.params.id;
            const user = await UserModel.findById(id);
            if(!user){
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        }
        catch(error){
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    },
    update: async (req, res) => {
        try{
            const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            if(!user){
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        }
        catch(error){            
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    },

    delete: async (req, res) => {
        try{
            const id = req.params.id;
            const user = await UserModel.findByIdAndDelete(id);
            if(!user){
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        }
        catch(error){
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }
};

module.exports = userController