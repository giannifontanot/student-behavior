const router = require('express').Router();
const {Student} = require('../../models/index');


router.get('/allStudents', async (req, res) => {
    try {
        return res.status(200).send('<H1>This is ALL STUDENTS page</H1>'); // --------------------------------------------------------------------------
        // const students = await Student.findAll();
        // console.log("---> students :" + JSON.stringify(students));
        // return res.status(200).json(students);
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

router.get('/insertStudent', async(req, res) => {
        return res.status(200).send('<H1>This is INSERT STUDENTS page</H1>'); // --------------------------------------------------------------------------
    //  console.log("---> insertStudent :" );
    // const  studentInsert  = await Student.create({id:2,firstName:"yo",lastName:"merito"})
    //  console.log("---> studentInsert :" + studentInsert );
    //     res.status(200).json(studentInsert);
})

router.get('/', (req, res) => {
    res.status(200).send('<h1>Root on student-routes</h1>');
})

module.exports = router;