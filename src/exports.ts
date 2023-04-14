import { lookUp, inventory, friends, avatar, level, card } from './commands/user.js'
import { randomGame, randomUser, randomGuild, randomCatalog, deletedRandomCatalog, randomBanner } from './commands/random.js'
import { ping } from './commands/ping.js'
import { game } from './commands/game.js'
import { cookie } from './commands/cookie.js'
import { guild } from './commands/guild.js'
import { catalog } from './commands/catalog.js'
import { help } from './commands/help.js'
import { info } from './commands/info.js'
import { status } from './commands/status.js'
import { catalogSearch } from './commands/catalog-search.js'
import { toolbox } from './commands/toolbox.js'

export default {
  lookup: lookUp,
  inventory: inventory,
  ping: ping,
  game: game,
  cookie: cookie,
  guild: guild,
  catalog: catalog,
  friends: friends,
  avatar: avatar,
  'random-game': randomGame,
  'random-user': randomUser,
  'random-guild': randomGuild,
  'random-catalog': randomCatalog,
  '404-random-catalog': deletedRandomCatalog,
  'random-banner': randomBanner,
  help: help,
  level: level,
  info: info,
  card: card,
  status: status,
  'catalog-search': catalogSearch,
  toolbox: toolbox
}
