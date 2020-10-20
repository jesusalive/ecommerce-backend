import CorsException from '../../exceptions/CorsException'

const allowedOrigins = [process.env.FRONT_ORIGIN]

export default {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) === -1) {
      return callback(new CorsException(), false)
    }

    return callback(null, true)
  }
}
