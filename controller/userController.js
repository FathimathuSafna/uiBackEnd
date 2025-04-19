import User from '../modals/userSchema.js'


const userSignup = async (req, res) => {
    const { phoneNumber } = req.body;
    try {
      const existUser = await User.findOne({ phoneNumber });
      if (existUser) {
        return res.status(400).json({
          msg: "User already exist",
        });
      }
      const userDetails = await User.create(req.body);
      res.status(201).json({
        msg: "User detailes added succesfully",
        userDetails,
      });
    } catch (err) {
      res.status(400).json({
        err,
      });
    }
  };

  export {userSignup}