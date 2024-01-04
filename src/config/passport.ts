import fs from 'fs';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { TokenTypes } from '@common/constants';
import Users from '@models/users.model';

const publicKey = fs.readFileSync(__dirname + '/../../public.key', "utf8");
const jwtOptions = {
  secretOrKey: publicKey,

  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== TokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await Users.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

export const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
