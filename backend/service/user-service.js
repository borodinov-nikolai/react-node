const {User} = require('../models/models');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const ApiError = require('../exceptions/api-error');
const UserDto = require('../dtos/user-dto');
const mailService = require('../service/mail-service');
const tokenService = require('../service/token-service')



class UserService {
      async registration(login, email, password) {
        const candidate = await User.findOne({where: {email}});
        if(candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
        }
        const hashPassword = await bcrypt.hash(password, 3);
        let activationLink = uuid.v4();
        const user = await User.create({login, email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
      }
      

         async activate(activationLink) {
          const user = await User.findOne({where:{activationLink}});
          console.log(user);
          if(!user) {
            throw ApiError.BasRequest('Неккоректная ссылка активации');
          }
          user.isActivated = true;
          await user.save();
         }


      async login(email, password) {
        const user = await User.findOne({where: {email}});
        if(!user) {
          throw ApiError.BadRequest('Пользователь с таким email не найден');
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals) {
          throw ApiError.BadRequest('неверный пароль');
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto};
      }

     async refresh(refreshToken) {
      if(!refreshToken) {
        throw ApiError.UnauthorizedError();
      }
      const userData = tokenService.validateRefreshToken(refreshToken);
      const tokenFromDb = await tokenService.findToken(refreshToken);
      if(!userData || !tokenFromDb) {
        throw ApiError.UnauthorizedError();
      }
      const user = await User.findOne({where: {id: userData.id}})
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({...userDto});
      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return {...tokens, user: userDto};
     }   

     async logout(refreshToken){
      const token = await tokenService.removeToken(refreshToken);
      return token;
     }
     
     async getAllUsers() {
      const users = await User.findAll();
      return users;
    }


}

module.exports = new UserService
