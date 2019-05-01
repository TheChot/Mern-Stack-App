const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

const auth = require('../../middleware/auth')

//@route GET api/Items
//@desc Get All Items
//@access Public

router.get('/', (req, res)=>{
    Item.find()
        .sort({date:-1})
        .then(items => res.json(items))
});

//@route Post api/Items
//@desc create an item
//@access Private

router.post('/', auth, (req, res)=>{
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));

});

//@route Delete api/Items:id
//@desc delete an item
//@access Private

router
    .delete('/:id', auth, (req, res)=>{
        Item.findById(req.params.id)
            .then(item => item.remove().then( ()=> res.json({success:true})))
            .catch(err => res.status(404).json({success:false}));

    });


module.exports = router;