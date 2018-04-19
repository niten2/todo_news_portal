import settings from 'server/config/settings'
import bunyan from 'bunyan'

const buildLogger = () => {
  if (settings.isEnvTest) {
    return {
      info: () => {},
      error: () => {},
    }
  }

  return bunyan.createLogger({
    name: settings.name,
    level: 'trace',
    serializers: {
      req: bunyan.stdSerializers.req,
      res: bunyan.stdSerializers.res
    },
  })
}

export default buildLogger()
