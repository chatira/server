'use strict'

const User = use('App/Models/User');
const Hash = use("Hash");

class AuthController 
{
    async register({request, response, auth}) 
    {
        // extract data from json sended by client
        const username = request.input('username');
        const email    = request.input('email');
        const password = request.input('password');

        // make new user document
        let user    = new User();
        user.username = username;
        user.email    = email;
        user.password = await Hash.make(password);

        // register user or send error
        try {
            user = await user.save();
            let accessToken = await auth.generate(user);
            return response.json({user, accessToken});
        }
        catch(e) {
            return response.status(500).json(e.message);
        }
    }

    async login({request, response, auth})
    {
        const email = request.input('email');
        const password = request.input('password');

        try {
            if(await auth.attempt(email, password)) 
            {
                let user = await User.findOne({email});
                let accessToken = await auth.generate(user);
                return response.json({'user': user, 'accessToken': accessToken});
            }
        } catch (e) {
            return response.status(404).json('User not found: ' + e.message);
        }
    }
}

module.exports = AuthController