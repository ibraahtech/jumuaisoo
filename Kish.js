const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');
const util = require("util");
const chalk = require('chalk');
const mathjs = require("mathjs");
const dictionary = require("word-definition");
const npt = require("node-periodic-table");
const pTable = require("ptable");
const mver = require('./package.json').version;
const moment = require('moment-timezone');
const speed = require("performance-now");
const axios = require("axios");
const fetch = require('node-fetch');
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const more = String.fromCharCode(0x200e);
const readmore = more.repeat(0xfa1);
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require("./Gallery/lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar
} = require("./Gallery/lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  jam,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  reSize
} = require('./Gallery/lib/myfunc');
let afk = require("./Gallery/lib/afk");
const {
  fetchBuffer,
  buffergif
} = require("./Gallery/lib/myfunc2");
const yts = require("yt-search");
const ytdl = require("@distube/ytdl-core");
global.modnumber = "254745936840";
let ntilinkall = JSON.parse(fs.readFileSync("./Gallery/database/antilink.json"));
const isnsfw = JSON.parse(fs.readFileSync('./Gallery/database/nsfw.json'));
let _afk = JSON.parse(fs.readFileSync("./Gallery/database/afk-user.json"));
let hit = JSON.parse(fs.readFileSync('./Gallery/database/total-hit-user.json'));
const replay = _0x2dfe7b => {
  Kish.sendMessage(m.chat, {
    'text': _0x2dfe7b
  }, {
    'quoted': m
  });
};
const xtime = moment.tz('Africa/Nairobi').format('HH:mm:ss');
const xdate = moment.tz("Africa/Nairobi").format('DD/MM/YYYY');
const time2 = moment().tz('Africa/Nairobi').format("HH:mm:ss");
if (time2 < '23:59:00') {
  var Kishytimewisher = "Good Night 🌃";
}
if (time2 < "19:00:00") {
  var Kishytimewisher = "Good Evening 🌆";
}
if (time2 < "18:00:00") {
  var Kishytimewisher = "Good Evening 🌆";
}
if (time2 < "15:00:00") {
  var Kishytimewisher = "Good Afternoon 🌄";
}
if (time2 < "11:00:00") {
  var Kishytimewisher = "Good Morning 🌅 „";
}
if (time2 < "05:00:00") {
  var Kishytimewisher = "Good Morning 🌅 „";
}
module.exports = Kish = async (_0x449011, _0x3ec39e, _0x104948, _0x116c20, _0x3eac2) => {
  try {
    const {
      type: _0x1b142f,
      quotedMsg: _0x33554a,
      mentioned: _0x18e989,
      now: _0xa2d015,
      fromMe: _0x44427e
    } = _0x3ec39e;
    var _0x953bad = _0x3ec39e.mtype === "conversation" ? _0x3ec39e.message.conversation : _0x3ec39e.mtype == "imageMessage" ? _0x3ec39e.message.imageMessage.caption : _0x3ec39e.mtype == "videoMessage" ? _0x3ec39e.message.videoMessage.caption : _0x3ec39e.mtype == "extendedTextMessage" ? _0x3ec39e.message.extendedTextMessage.text : _0x3ec39e.mtype == "buttonsResponseMessage" ? _0x3ec39e.message.buttonsResponseMessage.selectedButtonId : _0x3ec39e.mtype == "listResponseMessage" ? _0x3ec39e.message.listResponseMessage.singleSelectreply.selectedRowId : _0x3ec39e.mtype == 'templateButtonreplyMessage' ? _0x3ec39e.message.templateButtonreplyMessage.selectedId : _0x3ec39e.mtype === "messageContextInfo" ? _0x3ec39e.message.buttonsResponseMessage?.["selectedButtonId"] || _0x3ec39e.message.listResponseMessage?.["singleSelectreply"]["selectedRowId"] || _0x3ec39e.text : '';
    var _0x56dbd2 = typeof _0x3ec39e.text == "string" ? _0x3ec39e.text : '';
    const _0x59ea59 = global.prefa;
    const _0x240a1f = _0x953bad.startsWith(_0x59ea59);
    const _0x29fbe7 = _0x953bad.replace(_0x59ea59, '').trim().split(/ +/).shift().toLowerCase();
    const _0x1e269b = _0x953bad.trim().split(/ +/).slice(0x1);
    const _0x30e0a3 = _0x3ec39e.pushName || "No Name";
    const _0x3aa6f5 = await _0x449011.decodeJid(_0x449011.user.id);
    const _0x13fc48 = _0x3ec39e.sender;
    const _0x38be52 = q = _0x1e269b.join(" ");
    const _0x46f484 = _0x3ec39e.key.remoteJid;
    const _0x210ca0 = _0x3ec39e.quoted || _0x3ec39e;
    const _0x24699f = _0x210ca0.mtype == "buttonsMessage" ? _0x210ca0[Object.keys(_0x210ca0)[0x1]] : _0x210ca0.mtype == "templateMessage" ? _0x210ca0.hydratedTemplate[Object.keys(_0x210ca0.hydratedTemplate)[0x1]] : _0x210ca0.mtype == 'product' ? _0x210ca0[Object.keys(_0x210ca0)[0x0]] : _0x3ec39e.quoted ? _0x3ec39e.quoted : _0x3ec39e;
    const _0x33cdae = (_0x24699f.msg || _0x24699f).mimetype || '';
    const _0x2aec50 = _0x24699f.msg || _0x24699f;
    const _0x42bdfd = _0x1b142f == "videoMessage";
    const {
      Configuration: _0x4e4c40,
      OpenAIApi: _0x46c9cc
    } = require('openai');
    const _0x259ce7 = afk.checkAfkUser(_0x3ec39e.sender, _afk);
    const _0x5765f0 = _0x3ec39e.key.remoteJid.endsWith("@g.us");
    const _0x5e6b57 = _0x3ec39e.isGroup ? await _0x449011.groupMetadata(_0x3ec39e.chat)["catch"](_0x59269d => {}) : '';
    const _0x4d76d1 = _0x3ec39e.isGroup ? _0x5e6b57.subject : '';
    const _0x1d2252 = _0x3ec39e.isGroup ? await _0x5e6b57.participants : '';
    const _0x1b8bf6 = _0x3ec39e.isGroup ? await getGroupAdmins(_0x1d2252) : '';
    const _0x41b04e = _0x3ec39e.isGroup ? _0x1b8bf6.includes(_0x3aa6f5) : false;
    const _0x439c33 = _0x3ec39e.isGroup ? _0x1b8bf6.includes(_0x3ec39e.sender) : false;
    const _0x265298 = _0x3ec39e.isGroup ? _0x5e6b57.owner : '';
    const _0x2c9bf = _0x1b142f == "extendedTextMessage" && _0x3ec39e.message.extendedTextMessage.contextInfo != null ? _0x3ec39e.message.extendedTextMessage.contextInfo.mentionedJid : [];
    const _0x4615ea = _0x1b142f == "extendedTextMessage" && _0x3ec39e.message.extendedTextMessage.contextInfo != null ? _0x3ec39e.message.extendedTextMessage.contextInfo.participant || '' : '';
    const _0x3bb18c = _0x3ec39e.isGroup ? (_0x265298 ? _0x265298 : _0x1b8bf6).includes(_0x3ec39e.sender) : false;
    const _0x49b7a1 = [_0x3aa6f5, ...global.ownernumber].map(_0x1f2b6f => _0x1f2b6f.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x3ec39e.sender);
    const _0x418620 = _0x3ec39e.isGroup ? ntilinkall.includes(_0x46f484) : true;
    const _0x53b9c3 = _0x3ec39e.isGroup ? isnsfw.includes(_0x46f484) : false;
    const _0x247b93 = _0x3ec39e.isGroup ? isnsfw.includes(_0x46f484) : false;
    const _0x559315 = _0x447377 => {
      const _0x1670c0 = fs.readdirSync(_0x447377).filter(_0x3480a6 => {
        const _0x588d17 = path.join(_0x447377, _0x3480a6);
        return fs.statSync(_0x588d17).isFile() && (_0x3480a6.toLowerCase().endsWith(".jpg") || _0x3480a6.toLowerCase().endsWith(".png"));
      });
      if (_0x1670c0.length === 0x0) {
        return null;
      }
      const _0x3b1a44 = _0x1670c0[Math.floor(Math.random() * _0x1670c0.length)];
      const _0x2a25f1 = path.join(_0x447377, _0x3b1a44);
      return fs.existsSync(_0x2a25f1) ? _0x2a25f1 : (console.log("Selected file " + _0x3b1a44 + " does not exist."), null);
    };
    const _0x1c7f99 = _0x559315("./Gallery/Theme-logo");
    const _0x58e00e = _0x558fba => {
      _0x449011.sendMessage(_0x3ec39e.chat, {
        'text': _0x558fba
      }, {
        'quoted': _0x3ec39e
      });
    };
    async function _0x5c87df(_0x4139d4) {
      return new Promise(async (_0x5e7a88, _0x3d88c7) => {
        if (!_0x4139d4.match(/(https:\/\/t.me\/addstickers\/)/gi)) {
          return _0x58e00e("Enter your url telegram sticker link");
        }
        packName = _0x4139d4.replace("https://t.me/addstickers/", '');
        data = await axios('https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=' + encodeURIComponent(packName), {
          'method': "GET",
          'headers': {
            'User-Agent': "GoogleBot"
          }
        });
        const _0x2110c9 = [];
        for (let _0xdbb499 = 0x0; _0xdbb499 < data.data.result.stickers.length; _0xdbb499++) {
          fileId = data.data.result.stickers[_0xdbb499].thumb.file_id;
          data2 = await axios("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + fileId);
          result = {
            'status': 0xc8,
            'author': "KISH𓅃",
            'url': 'https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/' + data2.data.result.file_path
          };
          _0x2110c9.push(result);
        }
        _0x5e7a88(_0x2110c9);
      });
    }
    if (!_0x449011["public"]) {
      if (!_0x49b7a1 && !_0x3ec39e.key.fromMe) {
        return;
      }
    }
    if (autoread) {
      _0x449011.readMessages([_0x3ec39e.key]);
    }
    if (global.autoTyping) {
      _0x449011.sendPresenceUpdate('composing', _0x46f484);
    }
    if (global.autoRecording) {
      _0x449011.sendPresenceUpdate("recording", _0x46f484);
    }
    _0x449011.sendPresenceUpdate("available", _0x46f484);
    if (global.autorecordtype) {
      let _0x2a6be9 = ["recording", "composing"];
      let _0x852cf3 = _0x2a6be9[Math.floor(Math.random() * _0x2a6be9.length)];
      _0x449011.sendPresenceUpdate(_0x852cf3, _0x46f484);
    }
    if (_0x3ec39e.sender.startsWith("212") && global.anti212 === true) {
      return _0x449011.updateBlockStatus(_0x3ec39e.sender, "block");
    }
    if (_0x3ec39e.message && _0x3ec39e.isGroup) {
      console.log(chalk.redBright("\n\nGroup Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x56dbd2 || _0x3ec39e.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0x30e0a3), chalk.yellow(_0x3ec39e.sender) + "\n" + chalk.blueBright("=> In"), chalk.green(_0x4d76d1, _0x3ec39e.chat));
    } else {
      console.log(chalk.redBright("\n\nPrivate Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x56dbd2 || _0x3ec39e.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0x30e0a3), chalk.yellow(_0x3ec39e.sender));
    }
    if (_0x29fbe7) {
      const _0x5eb799 = () => {
        hit[0x0].hit_cmd += 0x1;
        fs.writeFileSync("./Gallery/database/total-hit-user.json", JSON.stringify(hit));
      };
      _0x5eb799();
    }
    const _0x549084 = require("./Gallery/lib/photooxy");
    if (_0x3ec39e.isGroup && !_0x3ec39e.key.fromMe) {
      let _0x453257 = [...new Set([...(_0x3ec39e.mentionedJid || []), ...(_0x3ec39e.quoted ? [_0x3ec39e.quoted.sender] : [])])];
      for (let _0x4ec65e of _0x453257) {
        if (afk.checkAfkUser(_0x4ec65e, _afk)) {
          let _0x191840 = afk.getAfkId(_0x4ec65e, _afk);
          let _0xccd823 = afk.getAfkReason(_0x191840, _afk);
          _0x58e00e("Don't tag him, he's afk\n\n*Reason :* " + _0xccd823);
        }
      }
      if (afk.checkAfkUser(_0x3ec39e.sender, _afk)) {
        _afk.splice(afk.getAfkPosition(_0x3ec39e.sender, _afk), 0x1);
        fs.writeFileSync("./Gallery/database/afk-user.json", JSON.stringify(_afk));
        _0x449011.sendTextWithMentions(_0x3ec39e.chat, '@' + _0x3ec39e.sender.split('@')[0x0] + " have returned from afk", _0x3ec39e);
      }
    }
    const _0x41ec03 = _0x3ec39e.chat;
    if (!_0x3ec39e.isGroup) {
      if (_0x41ec03.startsWith("212") || _0x41ec03.startsWith("210")) {
        return;
      }
    }
    if (_0x418620) {
      if (_0x56dbd2.includes("https://")) {
        if (!_0x41b04e) {
          return;
        }
        bvl = "```☠️ Link Detected ☠️```\n\nyou are a group admin thats why i wont kick you, but remember from next time";
        if (_0x439c33) {
          return _0x58e00e(bvl);
        }
        if (_0x3ec39e.key.fromMe) {
          return _0x58e00e(bvl);
        }
        if (_0x49b7a1) {
          return _0x58e00e(bvl);
        }
        await _0x449011.sendMessage(_0x3ec39e.chat, {
          'delete': {
            'remoteJid': _0x3ec39e.chat,
            'fromMe': false,
            'id': _0x3ec39e.key.id,
            'participant': _0x3ec39e.key.participant
          }
        });
        _0x449011.groupParticipantsUpdate(_0x3ec39e.chat, [_0x3ec39e.sender], "remove");
        _0x449011.sendMessage(_0x46f484, {
          'text': "```🚫 Link Detected 🚫```\n\n@" + _0x3ec39e.sender.split('@')[0x0] + " *Has been kicked because of sending link in this Group*",
          'contextInfo': {
            'mentionedJid': [_0x3ec39e.sender]
          }
        }, {
          'quoted': _0x3ec39e
        });
      } else {}
    }
    switch (_0x29fbe7) {
      case "antilink":
        {
          if (!_0x3ec39e.isGroup) {
            return _0x58e00e(mess.group);
          }
          if (!_0x439c33 && !_0x49b7a1) {
            return _0x58e00e(mess.admin);
          }
          if (!_0x41b04e) {
            return _0x58e00e(mess.botAdmin);
          }
          if (_0x1e269b[0x0] === 'on') {
            if (_0x418620) {
              return _0x58e00e("*_Already activated_*");
            }
            ntilinkall.push(_0x46f484);
            fs.writeFileSync("./Gallery/database/antilink.json", JSON.stringify(ntilinkall));
            _0x58e00e("*_Anti_Link Succesfully set to kick link senders!_*");
            var _0x4bdc41 = await _0x449011.groupMetadata(_0x46f484);
            var _0x5bd22c = _0x4bdc41.participants;
            var _0x5527a1 = [];
            _0x5bd22c.map(async _0x5b4da6 => {
              _0x5527a1.push(_0x5b4da6.id.replace("c.us", "s.whatsapp.net"));
            });
          } else {
            if (_0x1e269b[0x0] === 'off') {
              if (!_0x418620) {
                return _0x58e00e("*_Already deactivated_*");
              }
              let _0x4f7d9c = ntilinkall.indexOf(_0x46f484);
              ntilinkall.splice(_0x4f7d9c, 0x1);
              fs.writeFileSync("./Gallery/database/antilinkall.json", JSON.stringify(ntilinkall));
              _0x58e00e("*_Antilink Successful deactivated_*");
            } else {
              await _0x58e00e("Please Type The Option\n\nExample: " + (_0x59ea59 + _0x29fbe7) + " on\nExample: " + (_0x59ea59 + _0x29fbe7) + " off\n\non to enable\noff to disable");
            }
          }
        }
        break;
      case "setppbot":
      case 'setbotpp':
        {
          if (!_0x49b7a1) {
            return replay(mess.botowner);
          }
          if (!_0x24699f) {
            return _0x58e00e("Send/Reply Image With Caption " + (_0x59ea59 + _0x29fbe7));
          }
          if (!/image/.test(_0x33cdae)) {
            return _0x58e00e("Send/Reply Image With Caption " + (_0x59ea59 + _0x29fbe7));
          }
          if (/webp/.test(_0x33cdae)) {
            return _0x58e00e("Send/Reply Image With Caption " + (_0x59ea59 + _0x29fbe7));
          }
          var _0x1dc7ab = await _0x449011.downloadAndSaveMediaMessage(_0x24699f, "ppbot.jpeg");
          if (_0x1e269b[0x0] == "full") {
            var {
              img: _0x1baffc
            } = await generateProfilePicture(_0x1dc7ab);
            await _0x449011.query({
              'tag': 'iq',
              'attrs': {
                'to': _0x3aa6f5,
                'type': "set",
                'xmlns': 'w:profile:picture'
              },
              'content': [{
                'tag': "picture",
                'attrs': {
                  'type': "image"
                },
                'content': _0x1baffc
              }]
            });
            fs.unlinkSync(_0x1dc7ab);
            _0x58e00e("Succes");
          } else {
            var _0x3e7890 = await _0x449011.updateProfilePicture(_0x3aa6f5, {
              'url': _0x1dc7ab
            });
            fs.unlinkSync(_0x1dc7ab);
            _0x58e00e("Success, Thank you for the new profile photo, my darling ðŸ˜š");
          }
        }
        break;
      case "deletesession":
      case 'delsession':
      case "clearsession":
        {
          if (!_0x49b7a1) {
            return _0x58e00e(mess.owner);
          }
          fs.readdir("./Gallery/session", async function (_0x4acda5, _0x5eebe5) {
            if (_0x4acda5) {
              console.log("Unable to scan directory: " + _0x4acda5);
              return _0x58e00e("Unable to scan directory: " + _0x4acda5);
            }
            let _0x1655d9 = await _0x5eebe5.filter(_0xd0b1a1 => _0xd0b1a1.startsWith("pre-key") || _0xd0b1a1.startsWith('sender-key') || _0xd0b1a1.startsWith("session-") || _0xd0b1a1.startsWith("app-state"));
            console.log(_0x1655d9.length);
            let _0xce25d9 = "Detected " + _0x1655d9.length + " junk files\n\n";
            if (_0x1655d9.length == 0x0) {
              return _0x58e00e(_0xce25d9);
            }
            _0x1655d9.map(function (_0x312eb2, _0x3dcbd6) {
              _0xce25d9 += _0x3dcbd6 + 0x1 + (". " + _0x312eb2 + "\n");
            });
            _0x58e00e(_0xce25d9);
            await sleep(0x7d0);
            _0x58e00e("Delete junk files...");
            await _0x1655d9.forEach(function (_0x4a187d) {
              fs.unlinkSync("./Gallery/session/" + _0x4a187d);
            });
            await sleep(0x7d0);
            _0x58e00e("Successfully deleted all the trash in the session folder");
          });
        }
        break;
      case "join":
        try {
          if (!_0x49b7a1) {
            return _0x58e00e(mess.owner);
          }
          if (!_0x38be52) {
            return _0x58e00e("Enter Group Link!");
          }
          if (!isUrl(_0x1e269b[0x0]) && !_0x1e269b[0x0].includes("whatsapp.com")) {
            return _0x58e00e("Link Invalid!");
          }
          _0x58e00e(mess.wait);
          let _0x56d8d7 = _0x1e269b[0x0].split("https://chat.whatsapp.com/")[0x1];
          await _0x449011.groupAcceptInvite(_0x56d8d7).then(_0xba135a => _0x58e00e(json(_0xba135a)))["catch"](_0x4b249f => _0x58e00e(json(_0x4b249f)));
        } catch {
          _0x58e00e("Failed to join the Group");
        }
        break;
      case "session":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        _0x58e00e("Wait a moment, currently retrieving your session file");
        let _0x56e5d4 = await fs.readFileSync("./session/creds.json");
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'document': _0x56e5d4,
          'mimetype': "application/json",
          'fileName': "creds.json"
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case 'shutdown':
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        _0x58e00e("â™ ï¸Goodbye........");
        await sleep(0xbb8);
        process.exit();
        break;
      case "restart":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        _0x58e00e("Restarting....");
        exec("pm2 restart all");
        break;
      case "fbdl":
      case 'fb':
      case "facebook":
      case 'fbmp4':
        {
          if (!_0x38be52) {
            return _0x58e00e("Please provide the link!\n\nExample: " + _0x59ea59 + "fbdl https://www.facebook.com/groups/599913174599515/permalink/705467384044093/");
          }
          if (!isUrl(_0x1e269b[0x0]) && !_0x1e269b[0x0].includes("facebook.com")) {
            return _0x58e00e("Invalid link!");
          }
          let _0x33271d = require("aptoide-scraper");
          _0x33271d.facebookdlv2('' + _0x38be52).then(async _0x24ecae => {
            let _0x518adc = "「 _Facebook Downloader_ 」\n\n";
            _0x518adc += "*Title :* " + _0x24ecae.title + "\n";
            _0x518adc += "*Quality :* " + _0x24ecae.result[0x0].quality + "\n";
            _0x518adc += "*Description:* " + _0x24ecae.description + "\n";
            _0x518adc += "*URL :* " + _0x38be52 + "\n\n";
            buf = await getBuffer(_0x24ecae.thumbnail);
            _0x449011.sendMessage(_0x3ec39e.chat, {
              'image': {
                'url': _0x24ecae.thumbnail
              },
              'jpegThumbnail': buf,
              'caption': '' + _0x518adc
            }, {
              'quoted': _0x3ec39e
            });
            for (let _0x2169d7 of _0x24ecae.result) {
              _0x449011.sendMessage(_0x3ec39e.chat, {
                'video': {
                  'url': _0x2169d7.url
                },
                'jpegThumbnail': buf,
                'caption': "*Quality :* " + _0x2169d7.quality
              }, {
                'quoted': _0x3ec39e
              });
            }
          })["catch"](_0x1b9752 => {
            _0x58e00e("An error Occured");
          });
        }
        break;
      case "lyrics":
        {
          if (!_0x3ec39e.isGroup) {
            return _0x58e00e(mess.Group);
          }
          if (!_0x3ec39e.isGroup) {
            return replay(mess.grouponly);
          }
          _0x449011.sendMessage(_0x46f484, {
            'react': {
              'text': '🍁',
              'key': _0x3ec39e.key
            }
          });
          if (!_0x38be52) {
            return _0x58e00e("Comand usage: " + _0x59ea59 + "lyrics Thunder");
          }
          _0x58e00e(mess.waiting);
          const {
            lyrics: _0x19663a,
            lyricsv2: _0x303a09
          } = require("@bochilteam/scraper");
          const _0x3bfffa = await _0x303a09(_0x38be52)["catch"](async _0x11fc03 => await _0x19663a(_0x38be52));
          _0x58e00e(("\n*Title :* " + _0x3bfffa.title + "\n*Author :* " + _0x3bfffa.author + "\n\n*Lyrics :* " + _0x3bfffa.lyrics + "\n\n").trim());
        }
        break;
      case 'autoread':
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        if (_0x1e269b.length < 0x1) {
          return _0x58e00e("Example " + (_0x59ea59 + _0x29fbe7) + " on/off");
        }
        if (q === 'on') {
          autoread = true;
          _0x58e00e("Successfully changed autoread to " + q);
        } else if (q === 'off') {
          autoread = false;
          _0x58e00e("Successfully changed autoread to " + q);
        }
        break;
      case "alive":
        {
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'image': {
              'url': 'https://telegra.ph/file/3016068c9a9f6249a6ff2.jpg'
            },
            'caption': "Hello " + _0x3ec39e.pushName + ", Kish Md is active\n\nActive for:  " + runtime(process.uptime()) + "\n\nType " + _0x59ea59 + 'menu.',
            'fileLength': '9999999999898989899999999'
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "enc":
        let _0x2d9e06 = _0x3ec39e.quoted ? _0x3ec39e.quoted.text ? _0x3ec39e.quoted.text : _0x38be52 ? _0x38be52 : _0x3ec39e.text : _0x3ec39e.text;
        var _0x1940dc = require("javascript-obfuscator");
        if (!_0x38be52 && !_0x3ec39e.quoted) {
          throw "Quote/tag a code to encrypt";
        }
        var _0x206123 = _0x1940dc.obfuscate(_0x2d9e06, {
          'compact': false,
          'controlFlowFlattening': true,
          'controlFlowFlatteningThreshold': 0x1,
          'numbersToExpressions': true,
          'simplify': true,
          'stringArrayShuffle': true,
          'splitStrings': true,
          'stringArrayThreshold': 0x1
        });
        console.log("successfully encrypted the code");
        _0x58e00e(_0x206123.getObfuscatedCode());
        break;
      case "autotyping":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        if (_0x1e269b.length < 0x1) {
          return _0x58e00e("Example " + (_0x59ea59 + _0x29fbe7) + " on/off");
        }
        if (q === 'on') {
          autoTyping = true;
          _0x58e00e("Successfully changed auto-typing to " + q);
        } else if (q === "off") {
          autoTyping = false;
          _0x58e00e("Successfully changed auto-typing to " + q);
        }
        break;
      case "autorecording":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        if (_0x1e269b.length < 0x1) {
          return _0x58e00e("Example " + (_0x59ea59 + _0x29fbe7) + " on/off");
        }
        if (q === 'on') {
          autoRecording = true;
          _0x58e00e("*_Successfully changed to auto-recording_*");
        } else if (q === "off") {
          autoRecording = false;
          _0x58e00e("*_Successfully changed auto-recording off_*");
        }
        break;
      case "gpt3":
        _0x449011.sendMessage(_0x46f484, {
          'react': {
            'text': '🤖',
            'key': _0x3ec39e.key
          }
        });
        if (!q) {
          return _0x58e00e("Please provide a text query. Example: " + (_0x59ea59 + _0x29fbe7) + " Hello, ChatGPT!");
        }
        const _0x1e7f0e = "https://api.maher-zubair.tech/ai/chatgptv4?q=" + encodeURIComponent(q);
        try {
          const _0x572a63 = await fetch(_0x1e7f0e);
          const _0x53d97e = await _0x572a63.json();
          if (_0x572a63.status === 0xc8 && _0x53d97e && _0x53d97e.status === true && _0x53d97e.data) {
            const _0x1329ae = _0x53d97e.data;
            const _0x4a3c93 = _0x3ec39e.sender;
            await _0x449011.sendMessage(_0x3ec39e.chat, {
              'text': _0x1329ae,
              'mentions': [_0x4a3c93]
            }, {
              'quoted': _0x3ec39e
            });
          } else {}
        } catch (_0x179b1e) {
          console.error(_0x179b1e);
          _0x58e00e("An error occurred while fetching the response from the API.");
        }
      case "chatgpt":
      case "gpt":
        if (!_0x38be52) {
          return _0x58e00e("I need more text please. Make your query a bit longer.");
        }
        const _0x198f2f = new _0x4e4c40({
          'apiKey': "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"
        });
        const _0x4c3d37 = new _0x46c9cc(_0x198f2f);
        try {
          const _0x1b3583 = await _0x4c3d37.createChatCompletion({
            'model': "gpt-3.5-turbo",
            'messages': [{
              'role': "user",
              'content': _0x38be52
            }]
          });
          _0x3ec39e.reply('' + _0x1b3583.data.choices[0x0].message.content);
        } catch (_0x5f2de0) {
          if (_0x5f2de0.response) {
            console.log(_0x5f2de0.response.status);
            console.log(_0x5f2de0.response.data);
            console.log(_0x5f2de0.response.status + "\n\n" + _0x5f2de0.response.data);
          } else {
            console.log(_0x5f2de0);
            _0x3ec39e.reply("I'm Facing An Error:" + _0x5f2de0.message);
          }
        }
      case "autorecordtype":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        if (_0x1e269b.length < 0x1) {
          return _0x58e00e("Example " + (_0x59ea59 + _0x29fbe7) + " on/off");
        }
        if (q === 'on') {
          autorecordtype = true;
          _0x58e00e("*_Successfully changed auto recording and typing_*");
        } else if (q === 'off') {
          autorecordtype = false;
          _0x58e00e("*_Successfully changed auto recording and typing off_*");
        }
        break;
      case "autoswview":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        if (_0x1e269b.length < 0x1) {
          return _0x58e00e("Example " + (_0x59ea59 + _0x29fbe7) + " on/off");
        }
        if (q === 'on') {
          autoread_status = true;
          _0x58e00e("*_Successfully changed auto status/story view_*");
        } else if (q === "off") {
          autoread_status = false;
          _0x58e00e("*_Successfully changed auto status/story view Off_*");
        }
        break;
      case 'vv':
        if (!_0x24699f) {
          return _0x58e00e("Reply to Video/Image With Caption " + (_0x59ea59 + _0x29fbe7));
        }
        if (_0x3ec39e.quoted.mtype == "viewOnceMessageV2") {
          if (_0x3ec39e.isBaileys && _0x3ec39e.fromMe) {
            return;
          }
          let _0x33a5a7 = {
            ..._0x3ec39e
          };
          let _0x4bbba9 = {
            ..._0x3ec39e.quoted.message
          };
          delete _0x4bbba9[Object.keys(_0x4bbba9)[0x0]].viewOnce;
          _0x33a5a7.message = _0x4bbba9;
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'forward': _0x33a5a7,
            'quoted': _0x3ec39e
          });
        }
        break;
      case "public":
        {
          if (!_0x49b7a1) {
            _0x58e00e(mess.owner);
          }
          _0x449011['public'] = true;
          _0x58e00e("*Successful in Changing To Public Usage*");
        }
        break;
      case "self":
        {
          if (!_0x49b7a1) {
            _0x58e00e(mess.owner);
          }
          _0x449011["public"] = false;
          _0x58e00e("*Successful in Changing To Self Usage*");
        }
        break;
      case "weather":
        _0x449011.sendMessage(_0x46f484, {
          'react': {
            'text': '🌫️',
            'key': _0x3ec39e.key
          }
        });
        if (!_0x1e269b[0x0]) {
          return _0x58e00e("Enter your location to search weather.");
        }
        const _0x489cf5 = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + _0x1e269b.join(" ") + "&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785");
        const _0x53720a = await _0x489cf5.json();
        console.log("Weather data:", _0x53720a);
        const _0x12fd5b = _0x53720a.name;
        const _0x5132d6 = _0x53720a.main.temp;
        const _0x4fd6a0 = _0x53720a.weather[0x0].description;
        const _0x39db81 = _0x53720a.main.humidity;
        const _0x4b6c78 = _0x53720a.wind.speed;
        const _0x3c1dfe = _0x53720a.rain ? _0x53720a.rain['1h'] : 0x0;
        const _0x23b90e = _0x53720a.clouds.all;
        const _0x3fc575 = new Date(_0x53720a.sys.sunrise * 0x3e8);
        const _0x261b00 = new Date(_0x53720a.sys.sunset * 0x3e8);
        _0x449011.sendMessage(_0x46f484, {
          'video': {
            'url': "https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4"
          },
          'gifPlayback': true,
          'caption': "❄️ Weather in " + _0x12fd5b + "\n\n🌡️ Temperature: " + _0x5132d6 + "°C\n📝 Description: " + _0x4fd6a0 + "\n❄️ Humidity: " + _0x39db81 + "%\n🌀 Wind Speed: " + _0x4b6c78 + " m/s\n🌧️ Rain Volume (last hour): " + _0x3c1dfe + " mm\n☁️ Cloudiness: " + _0x23b90e + "%\n🌄 Sunrise: " + _0x3fc575.toLocaleTimeString() + "\n🌅 Sunset: " + _0x261b00.toLocaleTimeString()
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "setexif":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        if (!_0x38be52) {
          return _0x58e00e("Example : " + (_0x59ea59 + _0x29fbe7) + " packname|author");
        }
        global.packname = _0x38be52.split('|')[0x0];
        global.author = _0x38be52.split('|')[0x1];
        _0x58e00e("Exif successfully changed to\n\nâ€¢ Packname : " + global.packname + "\nâ€¢ Author : " + global.author);
        break;
      case "setpp":
      case "setpp":
      case "setppbot":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        if (!_0x24699f) {
          return _0x58e00e("Send/Reply Image With Caption " + (_0x59ea59 + _0x29fbe7));
        }
        if (!/image/.test(_0x33cdae)) {
          return _0x58e00e("Send/Reply Image With Caption " + (_0x59ea59 + _0x29fbe7));
        }
        if (/webp/.test(_0x33cdae)) {
          return _0x58e00e("Send/Reply Image With Caption " + (_0x59ea59 + _0x29fbe7));
        }
        var _0x1dc7ab = await _0x449011.downloadAndSaveMediaMessage(_0x24699f, "ppbot.jpeg");
        if (_0x1e269b[0x0] == "full") {
          var {
            img: _0x1baffc
          } = await generateProfilePicture(_0x1dc7ab);
          await _0x449011.query({
            'tag': 'iq',
            'attrs': {
              'to': _0x3aa6f5,
              'type': "set",
              'xmlns': "w:profile:picture"
            },
            'content': [{
              'tag': "picture",
              'attrs': {
                'type': 'image'
              },
              'content': _0x1baffc
            }]
          });
          fs.unlinkSync(_0x1dc7ab);
          _0x58e00e(mess.done);
        } else {
          var _0x3e7890 = await _0x449011.updateProfilePicture(_0x3aa6f5, {
            'url': _0x1dc7ab
          });
          fs.unlinkSync(_0x1dc7ab);
          _0x58e00e(mess.done);
        }
        break;
      case 'block':
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        let _0x212046 = _0x3ec39e.mentionedJid[0x0] ? _0x3ec39e.mentionedJid[0x0] : _0x3ec39e.quoted ? _0x3ec39e.quoted.sender : _0x38be52.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x449011.updateBlockStatus(_0x212046, "block").then(_0x5d51da => _0x58e00e(json(_0x5d51da)))["catch"](_0xc61f13 => _0x58e00e(json(_0xc61f13)));
        break;
      case "unblock":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        let _0x3dc235 = _0x3ec39e.mentionedJid[0x0] ? _0x3ec39e.mentionedJid[0x0] : _0x3ec39e.quoted ? _0x3ec39e.quoted.sender : _0x38be52.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x449011.updateBlockStatus(_0x3dc235, "unblock").then(_0x180e28 => _0x58e00e(json(_0x180e28)))['catch'](_0x46dd75 => _0x58e00e(json(_0x46dd75)));
        break;
      case 'leave':
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        _0x58e00e("ðŸŸ¨Bye Everyone ðŸ¥º");
        await _0x449011.groupLeave(_0x3ec39e.chat);
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!_0x49b7a1) {
            return _0x58e00e(mess.owner);
          }
          if (!_0x38be52) {
            return _0x58e00e("Which text?\n\nExample : " + (_0x59ea59 + _0x29fbe7) + " It's holiday tomorrow ");
          }
          let _0x4a661d = await _0x449011.groupFetchAllParticipating();
          let _0x3bb17b = Object.entries(_0x4a661d).slice(0x0).map(_0x515837 => _0x515837[0x1]);
          let _0x731b4f = _0x3bb17b.map(_0x20f563 => _0x20f563.id);
          _0x58e00e("Send Broadcast To " + _0x731b4f.length + " Group Chat, End Time " + _0x731b4f.length * 1.5 + " second");
          for (let _0x2a79ed of _0x731b4f) {
            await sleep(0x9c4);
            let _0x41d239 = "```" + ("\nðŸ“’" + _0x38be52 + "\n\n") + "```" + "\n\n*✍️Author:* ${pushname} ";
            _0x449011.sendMessage(_0x2a79ed, {
              'text': _0x41d239,
              'contextInfo': {
                'externalAdReply': {
                  'showAdAttribution': true,
                  'title': " *🎐Kish Broadcast🎐* ",
                  'body': "Sent " + _0x2a79ed.length + " Group",
                  'thumbnailUrl': 'https://telegra.ph/file/3fd18ee11521117c7c882.jpg',
                  'sourceUrl': global.link,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            });
          }
          _0x58e00e("Broadcast Sent !");
        }
        break;
      case "getcase":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        _0x58e00e('' + ('case' + ("'" + q + "'") + fs.readFileSync("Kish.js").toString().split("case '" + q + "'")[0x1].split("break")[0x0] + 'break'));
        break;
      case "stealdp":
        {
          const _0x118ef9 = _0x3ec39e.quoted ? _0x3ec39e.quoted.sender : _0x38be52.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          if (_0x118ef9 === _0x3aa6f5) {
            return _0x3ec39e.reply("_🙅🏻 I can not steal my own profile picture, Darling 🍭_");
          }
          const {
            key: _0x4864e1
          } = await _0x3ec39e.reply("𝒑𝒍𝒆𝒂𝒔𝒆 𝒘𝒂𝒊𝒕 𝑫𝒂𝒓𝒍𝒊𝒏𝒈 🍭");
          let _0x4bbd80;
          try {
            _0x4bbd80 = await getBuffer(await _0x449011.profilePictureUrl(_0x118ef9, "image"));
          } catch (_0x3ae699) {
            return _0x3ec39e.edit("_❌ @" + _0x118ef9.split('@')[0x0] + " Doesn't have a profile picture, or it's hidden.", _0x4864e1, {
              'mentions': [_0x118ef9]
            });
          }
          _0x449011.updateProfilePicture(_0x3aa6f5, _0x4bbd80).then(() => _0x3ec39e.edit("✅ 𝐏𝐫𝐨𝐟𝐢𝐥𝐞 𝐏𝐢𝐜𝐭𝐮𝐫𝐞 𝐒𝐭𝐞𝐚𝐥𝐞𝐝", _0x4864e1))["catch"](_0x5e6369 => {
            console.error(_0x5e6369);
            _0x3ec39e.edit("Error! try again later", _0x4864e1);
          });
        }
        break;
      case 'delete':
      case "del":
        {
          if (!_0x49b7a1) {
            return _0x58e00e(mess.done);
          }
          if (!_0x3ec39e.quoted) {
            throw false;
          }
          let {
            chat: _0x1a6e20,
            fromMe: _0x32f59d,
            id: _0x20ccec,
            isBaileys: _0x451e28
          } = _0x3ec39e.quoted;
          if (!_0x451e28) {
            return _0x58e00e("The message was not sent by a bot!");
          }
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'delete': {
              'remoteJid': _0x3ec39e.chat,
              'fromMe': true,
              'id': _0x3ec39e.quoted.id,
              'participant': _0x3ec39e.quoted.sender
            }
          });
        }
        break;
      case "closetime":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x439c33 && !_0x49b7a1) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        if (_0x1e269b[0x1] == 'second') {
          var _0x2a50e9 = _0x1e269b[0x0] * "1000";
        } else {
          if (_0x1e269b[0x1] == "minute") {
            var _0x2a50e9 = _0x1e269b[0x0] * "60000";
          } else {
            if (_0x1e269b[0x1] == "hour") {
              var _0x2a50e9 = _0x1e269b[0x0] * "3600000";
            } else {
              if (_0x1e269b[0x1] == "day") {
                var _0x2a50e9 = _0x1e269b[0x0] * '86400000';
              } else {
                return _0x58e00e("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
              }
            }
          }
        }
        _0x58e00e("Close time " + q + " starting from now");
        setTimeout(() => {
          _0x449011.groupSettingUpdate(_0x3ec39e.chat, "announcement");
          _0x58e00e("*Closed* group closed by admin\nnow only admin can send messages");
        }, _0x2a50e9);
        break;
      case "opentime":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x439c33 && !_0x49b7a1) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        if (_0x1e269b[0x1] == "second") {
          var _0x2a50e9 = _0x1e269b[0x0] * "1000";
        } else {
          if (_0x1e269b[0x1] == "minute") {
            var _0x2a50e9 = _0x1e269b[0x0] * "60000";
          } else {
            if (_0x1e269b[0x1] == 'hour') {
              var _0x2a50e9 = _0x1e269b[0x0] * "3600000";
            } else {
              if (_0x1e269b[0x1] == "day") {
                var _0x2a50e9 = _0x1e269b[0x0] * "86400000";
              } else {
                return _0x58e00e("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
              }
            }
          }
        }
        _0x58e00e("Open time " + q + " starting from now");
        setTimeout(() => {
          _0x449011.groupSettingUpdate(_0x3ec39e.chat, "not_announcement");
          _0x58e00e("*Opened* The group is opened by admin\nNow members can send messages");
        }, _0x2a50e9);
        break;
      case "remove":
        {
          if (!_0x3ec39e.isGroup) {
            return _0x58e00e(mess.group);
          }
          if (!_0x3ec39e.isGroup) {
            return replay(mess.grouponly);
          }
          if (!_0x41b04e) {
            return replay(mess.botAdmin);
          }
          if (!_0x439c33 && !_0x3bb18c && !_0x49b7a1) {
            return _0x58e00e(mess.admin);
          }
          _0x449011.sendMessage(_0x46f484, {
            'react': {
              'text': "",
              'key': _0x3ec39e.key
            }
          });
          let _0x439272 = _0x3ec39e.mentionedJid[0x0] ? _0x3ec39e.mentionedJid[0x0] : _0x3ec39e.quoted ? _0x3ec39e.quoted.sender : _0x38be52.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x449011.groupParticipantsUpdate(_0x3ec39e.chat, [_0x439272], 'remove');
          await _0x58e00e("Removed successfully");
        }
        break;
      case "add":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x439c33 && !_0x3bb18c && !_0x49b7a1) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        let _0xafd537 = _0x3ec39e.quoted ? _0x3ec39e.quoted.sender : _0x38be52.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x449011.groupParticipantsUpdate(_0x3ec39e.chat, [_0xafd537], "add").then(_0x3eadcc => _0x58e00e(json(_0x3eadcc)))["catch"](_0x5b4426 => _0x58e00e(json(_0x5b4426)));
        break;
      case "promote":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x439c33 && !_0x3bb18c && !_0x49b7a1) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        let _0x218043 = _0x3ec39e.mentionedJid[0x0] ? _0x3ec39e.mentionedJid[0x0] : _0x3ec39e.quoted ? _0x3ec39e.quoted.sender : _0x38be52.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x449011.groupParticipantsUpdate(_0x3ec39e.chat, [_0x218043], "promote");
        await _0x58e00e("Promoted successful");
        break;
      case "antibot":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        if (!_0x439c33 && !_0x3bb18c && !_0x49b7a1) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        if (_0x1e269b.length < 0x1) {
          return _0x58e00e("on/off?");
        }
        if (_0x1e269b[0x0] === 'on') {
          antibot = true;
          _0x58e00e(_0x29fbe7 + " is enabled");
        } else if (_0x1e269b[0x0] === 'off') {
          antibot = false;
          _0x58e00e(_0x29fbe7 + " is disabled");
        }
        break;
      case "unavailable":
        if (!_0x49b7a1) {
          return _0x58e00e(mess.owner);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        "Example " + (_0x59ea59 + _0x29fbe7) + " on/off";
        if (q === 'on') {
          db.data.settings[_0x3aa6f5].online = true;
          replyKish("Successfully changed unavailable to " + q);
        } else if (q === "off") {
          db.data.settings[_0x3aa6f5].online = false;
          replyKish("Successfully changed unavailable to " + q);
        }
        break;
      case "demote":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x439c33 && !_0x3bb18c && !_0x49b7a1) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        let _0x415a1f = _0x3ec39e.mentionedJid[0x0] ? _0x3ec39e.mentionedJid[0x0] : _0x3ec39e.quoted ? _0x3ec39e.quoted.sender : _0x38be52.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x449011.groupParticipantsUpdate(_0x3ec39e.chat, [_0x415a1f], 'demote');
        await _0x58e00e("Demote successfully");
      case 'setname':
      case "setsubject":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x439c33 && !_0x3bb18c && !_0x49b7a1) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        if (!_0x38be52) {
          return "Text ?";
        }
        await _0x449011.groupUpdateSubject(_0x3ec39e.chat, _0x38be52).then(_0xe59cd4 => _0x58e00e(mess.done))["catch"](_0x23309e => _0x58e00e(json(_0x23309e)));
        break;
      case "setdesc":
      case "setdesk":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x439c33 && !_0x3bb18c && !_0x49b7a1) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        if (!_0x38be52) {
          return "Text ?";
        }
        await _0x449011.groupUpdateDescription(_0x3ec39e.chat, _0x38be52).then(_0x217378 => _0x58e00e(mess.done))["catch"](_0x5dc23e => _0x58e00e(json(_0x5dc23e)));
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x439c33) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        if (!_0x24699f) {
          return _0x58e00e("Send/Reply Image With Caption " + (_0x59ea59 + _0x29fbe7));
        }
        if (!/image/.test(_0x33cdae)) {
          return _0x58e00e("Send/Reply Image With Caption " + (_0x59ea59 + _0x29fbe7));
        }
        if (/webp/.test(_0x33cdae)) {
          return _0x58e00e("Send/Reply Image With Caption " + (_0x59ea59 + _0x29fbe7));
        }
        var _0x1dc7ab = await _0x449011.downloadAndSaveMediaMessage(_0x24699f, "ppbot.jpeg");
        if (_0x1e269b[0x0] == "full") {
          var {
            img: _0x1baffc
          } = await generateProfilePicture(_0x1dc7ab);
          await _0x449011.query({
            'tag': 'iq',
            'attrs': {
              'to': _0x3ec39e.chat,
              'type': "set",
              'xmlns': 'w:profile:picture'
            },
            'content': [{
              'tag': "picture",
              'attrs': {
                'type': "image"
              },
              'content': _0x1baffc
            }]
          });
          fs.unlinkSync(_0x1dc7ab);
          _0x58e00e(mess.done);
        } else {
          var _0x3e7890 = await _0x449011.updateProfilePicture(_0x3ec39e.chat, {
            'url': _0x1dc7ab
          });
          fs.unlinkSync(_0x1dc7ab);
          _0x58e00e(mess.done);
        }
        break;
      case "tag":
      case "tagall":
      case "all":
        {
          if (!_0x3ec39e.isGroup) {
            return replay(mess.grouponly);
          }
          if (!_0x439c33 && !_0x49b7a1) {
            return replay(mess.useradmin);
          }
          let _0x434a9c = "🧩𝗧𝗮𝗴𝗮𝗹𝗹🧩\n  \n *Message : " + (_0x1e269b.join(" ") ? _0x1e269b.join(" ") : "no message") + "*\n\n";
          for (let _0x4e479e of _0x1d2252) {
            _0x434a9c += "ðŸ”® @" + _0x4e479e.id.split('@')[0x0] + "\n";
          }
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'text': _0x434a9c,
            'mentions': _0x1d2252.map(_0x52fd65 => _0x52fd65.id)
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case 'totag':
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        if (!_0x439c33) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x3ec39e.quoted) {
          return _0x58e00e("Reply messages with captions " + (_0x59ea59 + _0x29fbe7));
        }
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'forward': _0x3ec39e.quoted.fakeObj,
          'mentions': _0x1d2252.map(_0x3318f => _0x3318f.id)
        });
        break;
      case 'group':
      case "mute/unmute":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x439c33 && !_0x3bb18c && !_0x49b7a1) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        if (_0x1e269b[0x0] === 'mute') {
          await _0x449011.groupSettingUpdate(_0x3ec39e.chat, 'announcement').then(_0x1ce5a2 => _0x58e00e("*_SUCCESSFULLY CLOSED THE GROUP_*"))['catch'](_0x45f0ef => _0x58e00e(json(_0x45f0ef)));
        } else if (_0x1e269b[0x0] === "unmute") {
          await _0x449011.groupSettingUpdate(_0x3ec39e.chat, 'not_announcement').then(_0x4b6903 => _0x58e00e("*THE GROUP HAS BEEN OPENED SUCCESSFULLY*"))["catch"](_0x17c2fc => _0x58e00e(json(_0x17c2fc)));
        } else {
          _0x58e00e("Mode " + _0x29fbe7 + "\n\n\nType " + (_0x59ea59 + _0x29fbe7) + 'open/close');
        }
        break;
      case "editinfo":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x439c33 && !_0x3bb18c && !_0x49b7a1) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        if (_0x1e269b[0x0] === "open") {
          await _0x449011.groupSettingUpdate(_0x3ec39e.chat, "unlocked").then(_0x175850 => _0x58e00e("Successfully Opened Group Edit Info ðŸ•Šï¸"))['catch'](_0x51384a => _0x58e00e(json(_0x51384a)));
        } else if (_0x1e269b[0x0] === "close") {
          await _0x449011.groupSettingUpdate(_0x3ec39e.chat, "locked").then(_0xf4424a => _0x58e00e("Successfully Closed Group Edit InfoðŸ•Šï¸"))["catch"](_0x23a85d => _0x58e00e(json(_0x23a85d)));
        } else {
          _0x58e00e("Mode " + _0x29fbe7 + "\n\n\nType " + (_0x59ea59 + _0x29fbe7) + "on/off");
        }
        break;
      case "gclink":
      case "grouplink":
        {
          if (!_0x3ec39e.isGroup) {
            return _0x58e00e(mess.group);
          }
          if (!_0x41b04e) {
            return _0x58e00e(mess.botAdmin);
          }
          let _0x4d8d6a = await _0x449011.groupInviteCode(_0x3ec39e.chat);
          _0x449011.sendText(_0x3ec39e.sender, " 🤖𝐵𝑜𝑡 𝑛𝑎𝑚𝑒:-  Kish Bot\n\n🔖𝐺𝑟𝑜𝑢𝑝 𝑛𝑎𝑚𝑒:- " + _0x5e6b57.subject + "\n\n🔰𝐺𝑟𝑜𝑢𝑝 𝑙𝑖𝑛𝑘:- https://chat.whatsapp.com/" + _0x4d8d6a, _0x3ec39e, {
            'detectLink': true
          });
        }
        await _0x449011.sendMessage(_0x3ec39e.chat, "I sent you the Group Link in a personal message. Please check.", {
          'gifPlayback': true,
          'quoted': _0x3ec39e
        });
        break;
      case "revoke":
      case "resetlink":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x439c33 && !_0x3bb18c && !_0x49b7a1) {
          return _0x58e00e(mess.admin);
        }
        if (!_0x41b04e) {
          return _0x58e00e(mess.botAdmin);
        }
        await _0x449011.groupRevokeInvite(_0x3ec39e.chat).then(_0x1f7a64 => {
          _0x58e00e("Successful Reset, Group Invite Link " + _0x5e6b57.subject);
        })["catch"](_0x38f723 => _0x58e00e(json(_0x38f723)));
        break;
      case 'sc':
      case "script":
      case 'repo':
        {
          const _0x4f6da0 = require("axios");
          let _0x2c38a2 = await _0x4f6da0.get('https://api.github.com/repos/Brashokish/Kish-MD');
          let _0x44c7b2 = _0x2c38a2.data;
          console.log(_0x44c7b2);
          const _0x456ee3 = "*🚀𝐊𝐢𝐬𝐡-𝑩𝒐𝒕-𝑺𝒄𝒓𝒊𝒑𝒕🚀*\n\n  *⭐Creator:* Brasho kish\n\n  *⭐ Repo:* " + _0x44c7b2.html_url + "\n\n  *⭐ Total Forks:* " + _0x44c7b2.forks_count + "\n\n  *⭐ Total Stars:* " + _0x44c7b2.stargazers_count + "\n\n  *⭐ Repo Size:* " + (_0x44c7b2.size / 0x400).toFixed(0x2) + " MB\n\n  *🔟Last Updated:* " + _0x44c7b2.updated_at + "\n\n \n *Kish Bots inc* \n* Dont forget to give a Star ⭐ to the repo.*";
          _0x449011.sendMessage(_0x46f484, {
            'video': {
              'url': 'https://media.tenor.com/Zco-fadJri4AAAPo/code-matrix.mp4'
            },
            'gifPlayback': true,
            'caption': _0x456ee3
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case 'sticker':
      case "stiker":
      case 's':
        {
          if (!_0x24699f) {
            return _0x58e00e("Reply to Video/Image With Caption " + (_0x59ea59 + _0x29fbe7));
          }
          if (/image/.test(_0x33cdae)) {
            let _0x3bb90c = await _0x24699f.download();
            let _0x551d68 = await _0x449011.sendImageAsSticker(_0x3ec39e.chat, _0x3bb90c, _0x3ec39e, {
              'author': global.stickername
            });
            await fs.unlinkSync(_0x551d68);
          } else {
            if (_0x42bdfd || /video/.test(_0x33cdae)) {
              if ((_0x24699f.msg || _0x24699f).seconds > 0xb) {
                return _0x58e00e("Maximum 10 seconds!");
              }
              let _0x468df2 = await _0x24699f.download();
              let _0x229c74 = await _0x449011.sendVideoAsSticker(_0x3ec39e.chat, _0x468df2, _0x3ec39e, {
                'packname': global.stickername
              });
              await fs.unlinkSync(_0x229c74);
            } else {
              return _0x58e00e("Send Images/Videos With Captions " + (_0x59ea59 + _0x29fbe7) + "\nVideo Duration 1-9 Seconds");
            }
          }
        }
        break;
      case "smeme":
        {
          let _0x1d8424 = "Send/Reply image/sticker with caption " + (_0x59ea59 + _0x29fbe7) + " text1|text2";
          if (!/image/.test(_0x33cdae)) {
            return _0x58e00e(_0x1d8424);
          }
          if (!_0x38be52) {
            return _0x58e00e(_0x1d8424);
          }
          _0x58e00e(mess.wait);
          atas = _0x38be52.split('|')[0x0] ? _0x38be52.split('|')[0x0] : '-';
          bawah = _0x38be52.split('|')[0x1] ? _0x38be52.split('|')[0x1] : '-';
          let _0x400d98 = await _0x449011.downloadAndSaveMediaMessage(_0x2aec50);
          let _0x2b30c6 = await TelegraPh(_0x400d98);
          let _0x1bc152 = 'https://api.memegen.link/images/custom/' + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x2b30c6;
          let _0x4f0c58 = await _0x449011.sendImageAsSticker(_0x3ec39e.chat, _0x1bc152, _0x3ec39e, {
            'packname': global.stickername
          });
          fs.unlinkSync(_0x4f0c58);
        }
        break;
      case 'swm':
      case "steal":
      case "stickerwm":
      case "take":
        {
          if (!_0x1e269b.join(" ")) {
            return _0x58e00e("Where is the text?");
          }
          if (_0x3ec39e.quoted.isAnimated === true) {
            _0x449011.downloadAndSaveMediaMessage(_0x24699f, 'gifee');
            _0x449011.sendMessage(_0x46f484, {
              'sticker': fs.readFileSync("gifee.webp")
            }, {
              'quoted': _0x3ec39e
            });
          } else {
            if (/image/.test(_0x33cdae)) {} else {
              if (/video/.test(_0x33cdae)) {
                if ((_0x24699f.msg || _0x24699f).seconds > 0xb) {
                  return _0x58e00e("Maximum 10 Seconds!");
                }
              } else {
                _0x58e00e("Photo/Video?");
              }
            }
          }
        }
        break;
      case 'image':
      case 'img':
        {
          if (!/webp/.test(_0x33cdae)) {
            return _0x58e00e("Reply sticker with caption *" + (_0x59ea59 + _0x29fbe7) + '*');
          }
          _0x58e00e(mess.wait);
          let _0x39de10 = await _0x449011.downloadAndSaveMediaMessage(_0x2aec50);
          let _0x31fe20 = await getRandom('.png');
          exec("ffmpeg -i " + _0x39de10 + " " + _0x31fe20, _0x1b6296 => {
            fs.unlinkSync(_0x39de10);
            if (_0x1b6296) {
              return _0x1b6296;
            }
            let _0x238107 = fs.readFileSync(_0x31fe20);
            _0x449011.sendMessage(_0x3ec39e.chat, {
              'image': _0x238107
            }, {
              'quoted': _0x3ec39e
            });
            fs.unlinkSync(_0x31fe20);
          });
        }
        break;
      case "calculator":
      case "cal":
      case "calculate":
        {
          if (_0x1e269b.length < 0x1) {
            return _0x58e00e("*Example :*\n" + _0x59ea59 + "calculator 2*5\n\n");
          }
          let _0x3334b4 = _0x1e269b.join(" ");
          if (typeof mathjs.evaluate(_0x3334b4) !== "number") {
            _0x58e00e("Error ❌");
          } else {
            _0x58e00e("```「 🧮 Calculator Tool 🧮 」```\n\n*Input :* " + _0x3334b4 + "\n*Calculation Result :* " + mathjs.evaluate(_0x3334b4.replace(/×/g, '*').replace(/x/g, '*').replace(/÷/g, '/')));
          }
        }
        break;
      case "mp4":
        if (!/webp/.test(_0x33cdae)) {
          return _0x58e00e("Reply sticker with caption *" + (_0x59ea59 + _0x29fbe7) + '*');
        }
        _0x58e00e(mess.wait);
        let _0x4ee5c6 = await _0x449011.downloadAndSaveMediaMessage(_0x2aec50);
        let _0xc0402 = await webp2mp4File(_0x4ee5c6);
        await _0x449011.sendMessage(_0x3ec39e.chat, {
          'video': {
            'url': _0xc0402.result,
            'caption': "Convert Webp To Video"
          }
        }, {
          'quoted': _0x3ec39e
        });
        await fs.unlinkSync(_0x4ee5c6);
        break;
      case "checkdeath":
        if (!_0x38be52) {
          return replay("Use Someone's Name, Example : " + (_0x59ea59 + _0x29fbe7) + " Kish");
        }
        predea = await _0x418c1d.get("https://api.agify.io/?name=" + q);
        _0x58e00e("Name : " + predea.data.name + "\n*Dead At Age :* " + predea.data.age + " Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_");
        break;
      case "mp3":
        {
          if (!/video/.test(_0x33cdae) && !/audio/.test(_0x33cdae)) {
            return _0x58e00e("Send/Reply Video/Audio that you want to make into MP3 with caption " + (_0x59ea59 + _0x29fbe7));
          }
          _0x58e00e(mess.wait);
          let _0x24bccb = await _0x449011.downloadMediaMessage(_0x2aec50);
          let _0x54f001 = await toAudio(_0x24bccb, 'mp4');
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'document': _0x54f001,
            'mimetype': "audio/mp3",
            'fileName': 'Kish-bot.mp3'
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case 'define':
        if (!_0x1e269b[0x0]) {
          return _0x58e00e("Please specify a word to define. For example: " + _0x59ea59 + "define computer");
        }
        const _0x57c1bf = _0x1e269b[0x0].trim();
        dictionary.getDef(_0x57c1bf, 'en', null, async function (_0x36f90b) {
          if (!_0x36f90b || !_0x36f90b.definition) {
            return _0x58e00e("Definition for \"" + _0x57c1bf + "\" not found.");
          }
          const _0x4b26c7 = _0x36f90b.definition;
          _0x58e00e("*Definition of " + _0x57c1bf + "*\n\n" + _0x4b26c7, {
            'quoted': _0x3ec39e
          });
        });
        break;
      case "sciencefact":
        const _0x4715e0 = await _0x4f2782();
        if (_0x4715e0) {
          _0x58e00e("*Random Science Fact:*\n\n" + _0x4715e0);
        } else {
          _0x58e00e("Failed to fetch a random science fact.");
        }
        break;
        async function _0x4f2782() {
          try {
            const _0x5b1ce9 = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
            const _0xba5f3b = await _0x5b1ce9.json();
            const _0x3cd41e = _0xba5f3b.text;
            return _0x3cd41e;
          } catch (_0x331a4b) {
            console.error("Error fetching random science fact:", _0x331a4b);
            return null;
          }
        }
      case "sciencenews":
        const _0x211774 = await _0xa60688();
        if (_0x211774 && _0x211774.length > 0x0) {
          _0x58e00e("*Latest Science News Headlines:*\n\n" + _0x211774.join("\n"));
        } else {
          _0x58e00e("Failed to fetch science news headlines.");
        }
        break;
        async function _0xa60688() {
          try {
            const _0x76c88a = await fetch("https://newsapi.org/v2/top-headlines?category=science&apiKey=bf17483564e24e2aa83ff6dc6a8e79eb");
            const _0x533a2d = await _0x76c88a.json();
            if (_0x533a2d.articles && _0x533a2d.articles.length > 0x0) {
              const _0xc70066 = _0x533a2d.articles.map(_0x37cf16 => _0x37cf16.title);
              return _0xc70066;
            } else {
              console.error("No articles found in the response.");
              return null;
            }
          } catch (_0x42fb19) {
            console.error("Error fetching science news headlines:", _0x42fb19);
            return null;
          }
        }
      case "chat":
        const _0x418c1d = require("axios");
        botreply = await _0x418c1d.get('http://api.brainshop.ai/get?bid=180857&key=SeLyK3P24U91Ed7a&uid=[Kishbot]&msg=[text]');
        txtChatbot = '' + botreply.data.cnt;
        _0x3ec39e.reply(txtChatbot);
        break;
      case "exec":
      case 'run':
        if (!_0x38be52) {
          return _0x3ec39e.reply("🍭𝑫𝒂𝒓𝒍𝒊𝒏𝒈 𝑷𝒍𝒆𝒂𝒔𝒆 𝒑𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒕𝒐 𝒆𝒙𝒆𝒄𝒖𝒕𝒆! \n\n 𝑬𝒙𝒂𝒎𝒑𝒍𝒆: *" + _0x59ea59 + "𝒆𝒙𝒆𝒄 𝒎.𝒓𝒆𝒑𝒍𝒚(\"3𝒓𝒅 𝒑𝒂𝒓𝒕𝒚 𝒄𝒐𝒅𝒆 𝒊𝒔 𝒃𝒆𝒊𝒏𝒈 𝒆𝒙𝒆𝒄𝒖𝒕𝒆𝒅...\")*");
        }
        try {
          const _0x5424ae = eval(_0x38be52);
          out = JSON.stringify(_0x5424ae, null, "\t") || "Evaluated JavaScript";
        } catch (_0x4b2d29) {
          _0x3ec39e.reply("Error: " + _0x4b2d29.message);
        }
        break;
      case 'vn':
      case "toptt":
        {
          if (!/video/.test(_0x33cdae) && !/audio/.test(_0x33cdae)) {
            return _0x58e00e("Reply Video/Audio that you want to make into a VN with caption " + (_0x59ea59 + _0x29fbe7));
          }
          _0x58e00e(mess.wait);
          let _0x37e139 = await _0x449011.downloadMediaMessage(_0x2aec50);
          let {
            toPTT: _0x46874c
          } = require('./Gallery/lib/converter');
          let _0x32f4e4 = await _0x46874c(_0x37e139, "mp4");
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'audio': _0x32f4e4,
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "gif":
        {
          if (!/webp/.test(_0x33cdae)) {
            return _0x58e00e("Reply sticker with caption *" + (_0x59ea59 + _0x29fbe7) + '*');
          }
          _0x58e00e(mess.wait);
          let _0x2437a4 = await _0x449011.downloadAndSaveMediaMessage(_0x2aec50);
          let _0x40d63e = await webp2mp4File(_0x2437a4);
          await _0x449011.sendMessage(_0x3ec39e.chat, {
            'video': {
              'url': _0x40d63e.result,
              'caption': "Convert Webp To Video"
            },
            'gifPlayback': true
          }, {
            'quoted': _0x3ec39e
          });
          await fs.unlinkSync(_0x2437a4);
        }
        break;
      case "url":
        {
          _0x58e00e(mess.wait);
          let _0x57a350 = await _0x449011.downloadAndSaveMediaMessage(_0x2aec50);
          if (/image/.test(_0x33cdae)) {
            let _0xef0b06 = await TelegraPh(_0x57a350);
            _0x58e00e(util.format(_0xef0b06));
          } else {
            if (!/image/.test(_0x33cdae)) {
              let _0x4cdd6b = await UploadFileUgu(_0x57a350);
              _0x58e00e(util.format(_0x4cdd6b));
            }
          }
          await fs.unlinkSync(_0x57a350);
        }
        break;
      case 'emojimix':
        {
          let [_0x172da3, _0x193c60] = _0x38be52.split`+`;
          if (!_0x172da3) {
            return _0x58e00e("Example : " + (_0x59ea59 + _0x29fbe7) + " 😅+🤔");
          }
          if (!_0x193c60) {
            return _0x58e00e("Example : " + (_0x59ea59 + _0x29fbe7) + " 😅+🤔");
          }
          _0x58e00e(mess.wait);
          let _0x5336bc = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x172da3) + '_' + encodeURIComponent(_0x193c60));
          for (let _0x33db81 of _0x5336bc.results) {
            let _0x3fb11a = await _0x449011.sendImageAsSticker(_0x3ec39e.chat, _0x33db81.url, _0x3ec39e, {
              'packname': global.stickername,
              'categories': _0x33db81.tags
            });
            await fs.unlinkSync(_0x3fb11a);
          }
        }
        break;
      case "toonce":
      case "viewonce":
        {
          if (!_0x24699f) {
            return _0x58e00e("Reply Image/Video");
          }
          if (/image/.test(_0x33cdae)) {
            anuan = await _0x449011.downloadAndSaveMediaMessage(_0x24699f);
            _0x449011.sendMessage(_0x3ec39e.chat, {
              'image': {
                'url': anuan
              },
              'caption': "Here you go!",
              'fileLength': "999",
              'viewOnce': true
            }, {
              'quoted': _0x3ec39e
            });
          } else if (/video/.test(_0x33cdae)) {
            anuanuan = await _0x449011.downloadAndSaveMediaMessage(_0x24699f);
            _0x449011.sendMessage(_0x3ec39e.chat, {
              'video': {
                'url': anuanuan
              },
              'caption': "Here you go!",
              'fileLength': '99999999',
              'viewOnce': true
            }, {
              'quoted': _0x3ec39e
            });
          }
        }
        break;
      case 'qr':
        {
          if (!q) {
            return _0x58e00e(" Please include link or text!");
          }
          const _0x52bef3 = require('qrcode');
          let _0x21ee0a = await _0x52bef3.toDataURL(q, {
            'scale': 0x23
          });
          let _0xfc04e2 = new Buffer.from(_0x21ee0a.replace("data:image/png;base64,", ''), "base64");
          let _0x49886e = getRandom(".jpg");
          await fs.writeFileSync('./' + _0x49886e, _0xfc04e2);
          let _0x581e5f = fs.readFileSync('./' + _0x49886e);
          await _0x449011.sendMessage(_0x46f484, {
            'image': _0x581e5f,
            'caption': "Here you go!"
          }, {
            'quoted': _0x3ec39e
          });
          setTimeout(() => {
            fs.unlinkSync(_0x49886e);
          }, 0x2710);
        }
        break;
      case "fliptext":
        {
          if (_0x1e269b.length < 0x1) {
            return _0x58e00e("Example:\n" + _0x59ea59 + "fliptext Kishy");
          }
          quere = _0x1e269b.join(" ");
          flipe = quere.split('').reverse().join('');
          _0x58e00e("```ã€Œ FLIP TEXT ã€```\n*â€¢> Normal :*\n" + quere + "\n*â€¢> Flip :*\n" + flipe);
        }
        break;
        const {
          inrl: _0x2adbff,
          mode: _0x2be156,
          truecaller: _0x218ae6
        } = require('../lib/');
        _0x2adbff({
          'pattern': "true ?(.*)",
          'desc': "search number on truecaller",
          'type': "search",
          'fromMe': true
        }, async (_0x4ef930, _0xfc0914) => {
          if (_0xfc0914.match(/login/gi)) {
            _0xfc0914 = _0xfc0914.replace(/login/gi, '');
            if (!_0xfc0914) {
              return await _0x4ef930.send("_give me a number to send otp_");
            }
            const _0x41bda1 = await _0x218ae6.set(_0xfc0914);
            if (_0x41bda1 === true) {
              return await _0x4ef930.send("_successfully send otp to this " + _0xfc0914 + " number_\n_use *true otp* <key> to login_");
            }
            return await _0x4ef930.send("*message:* _use *true logout* as first_\n*resone*: " + _0x41bda1);
          } else {
            if (_0xfc0914.match(/logout/gi)) {
              await _0x218ae6.logout(_0xfc0914);
              return await _0x4ef930.send("_successfull_");
            } else {
              if (_0xfc0914.match(/otp/gi)) {
                _0xfc0914 = _0xfc0914.replace(/otp/gi, '');
                if (!_0xfc0914) {
                  return await _0x4ef930.send("_please provide an otp_");
                }
                const _0xc6033e = await _0x218ae6.otp(_0xfc0914);
                if (_0xc6033e === true) {
                  return await _0x4ef930.send("_successfully Logined to Truecaller!!_");
                }
                return await _0x4ef930.send("*message:* _use *true logout* as first_\n*resone*: " + _0xc6033e);
              }
            }
          }
          let _0x3e1017 = (_0x4ef930.mention.jid?.[0x0] || _0x4ef930.reply_message.mention.jid?.[0x0] || _0x4ef930.reply_message.sender || _0xfc0914).replace(/[^0-9]/g, '');
          if (!_0x3e1017) {
            return await _0x4ef930.send("_reply to a user_");
          }
          const _0x281c4a = await _0x218ae6.search(_0x3e1017);
          if (!_0x281c4a.status) {
            return await _0x4ef930.send(_0x281c4a.message);
          }
          let _0x5d7016 = " truecaller  \n";
          delete _0x281c4a.status;
          for (const _0x4f2673 in _0x281c4a) {
            _0x5d7016 += " " + _0x4f2673.toLowerCase() + ": " + _0x281c4a[_0x4f2673] + "\n";
          }
          _0x5d7016 += "";
          return await _0x4ef930.send("```" + _0x5d7016 + "```", {
            'quoted': _0x4ef930.data
          });
        });
      case "afk":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (_0x259ce7) {
          return _0x58e00e("Already afk");
        }
        let _0x13da5f = _0x38be52 ? _0x38be52 : "Nothing.";
        afk.addAfkUser(_0x3ec39e.sender, Date.now(), _0x13da5f, _afk);
        _0x58e00e('@' + _0x3ec39e.sender.split('@')[0x0] + " Currently AFK\nWith reason : " + _0x13da5f);
        break;
      case 'qc':
        {
          const {
            quote: _0x8048f9
          } = require("./Gallery/lib/quote.js");
          if (!q) {
            return _0x58e00e("Enter Text");
          }
          let _0x23c466 = await await _0x449011.profilePictureUrl(_0x3ec39e.sender, "image")["catch"](_0x43546a => "https://telegra.ph/file/6880771a42bad09dd6087.jpg");
          const _0x2aecec = await _0x8048f9(q, _0x30e0a3, _0x23c466);
          _0x58e00e(mess.wait);
          _0x449011.sendImageAsSticker(_0x3ec39e.chat, _0x2aecec.result, _0x3ec39e, {
            'packname': '' + global.stickername
          });
        }
        break;
      case "video":
        {
          let _0x55e335 = _0x1e269b.join(" ");
          if (!_0x55e335) {
            return _0x58e00e("*Provide a search term.* \n*Eg:* " + _0x59ea59 + "video lucid dreams");
          }
          try {
            const {
              videos: _0x25db34
            } = await yts(_0x55e335);
            if (!_0x25db34 || _0x25db34.length === 0x0) {
              return _0x58e00e("No matching videos found!");
            }
            _0x449011.sendMessage(_0x46f484, {
              'react': {
                'text': '🎥',
                'key': _0x3ec39e.key
              }
            });
            const _0x3002e9 = _0x25db34[0x0].url;
            const _0x5d793f = Math.floor(Math.random() * 0x2710) + ".mp4";
            const _0x4b40fe = ytdl(_0x3002e9, {
              'filter': _0x525d22 => _0x525d22.hasVideo && _0x525d22.hasAudio
            }).pipe(fs.createWriteStream('./' + _0x5d793f));
            console.log("Video downloading ->", _0x3002e9);
            await new Promise((_0x34dd41, _0x37dbe9) => {
              _0x4b40fe.on("error", _0x37dbe9);
              _0x4b40fe.on("finish", _0x34dd41);
            });
            const _0x245f92 = fs.statSync('./' + _0x5d793f).size;
            const _0x15fd04 = _0x245f92 / 0x100000;
            console.log("Video downloaded! Size:", _0x15fd04, 'MB');
            await _0x449011.sendMessage(_0x3ec39e.chat, {
              'video': fs.readFileSync('./' + _0x5d793f),
              'mimetype': "video/mp4",
              'caption': " KISH-MD𓅃",
              'contextInfo': {
                'forwardingScore': 0x98967f,
                'isForwarded': true
              }
            }, {
              'quoted': _0x3ec39e
            });
            fs.unlinkSync('./' + _0x5d793f);
          } catch (_0x3c3ac2) {
            console.error("An error occurred:", _0x3c3ac2);
            return _0x58e00e(_0x3c3ac2.toString());
          }
        }
        break;
      case 'play':
      case "stream":
        {
          if (!_0x38be52) {
            _0x58e00e("Provide a search term!\nE.g: play Appetite for destruction. ");
            return;
          }
          try {
            const {
              videos: _0x43f747
            } = await yts(_0x38be52);
            if (!_0x43f747 || _0x43f747.length <= 0x0) {
              _0x58e00e("No Matching videos found for : *" + _0x1e269b[0x0] + "*!!");
              return;
            }
            let _0x4b1361 = _0x43f747[0x0].url;
            let _0x271e30 = await ytdl.getInfo(_0x4b1361);
            if (_0x271e30.videoDetails.lengthSeconds >= 0x1c20) {
              _0x58e00e("File is too big for me to download");
              return;
            }
            let _0x49e239 = _0x271e30.videoDetails.title;
            let _0x138a8b = '' + Math.floor(Math.random() * 0x2710) + ".mp3";
            const _0x54cc57 = ytdl(_0x4b1361, {
              'filter': _0x3270d3 => _0x3270d3.audioBitrate == 0xa0 || _0x3270d3.audioBitrate == 0x80
            }).pipe(fs.createWriteStream('./' + _0x138a8b));
            console.log("Audio downloading ->", _0x4b1361);
            _0x58e00e("_Downloading " + _0x271e30.videoDetails.title + '_');
            await new Promise((_0x4b1f43, _0x259d63) => {
              _0x54cc57.on("error", _0x259d63);
              _0x54cc57.on("finish", _0x4b1f43);
            });
            let _0x1f292b = fs.statSync('./' + _0x138a8b);
            let _0x4a4d1a = _0x1f292b.size;
            let _0x2503a2 = _0x4a4d1a / 1048576;
            console.log("Audio downloaded ! \n Size: " + _0x2503a2);
            if (_0x2503a2 <= 0xc8) {
              await _0x449011.sendMessage(_0x46f484, {
                'document': fs.readFileSync('./' + _0x138a8b),
                'mimetype': "audio/mpeg",
                'fileName': _0x49e239 + ".mp3"
              }, {
                'quoted': _0x3ec39e
              });
            } else {
              _0x58e00e("File size bigger.");
            }
            fs.unlinkSync('./' + _0x138a8b);
          } catch (_0x210345) {
            _0x58e00e(_0x210345.toString());
          }
        }
        break;
      case "ytmp4":
      case "ytvideo":
        {
          const _0x4da4d5 = require("./Gallery/lib/ytdl2");
          if (_0x1e269b.length < 0x1 || !isUrl(_0x38be52) || !_0x4da4d5.isYTUrl(_0x38be52)) {
            _0x58e00e("Where is the link??\n\nExample : " + (_0x59ea59 + _0x29fbe7) + " https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps");
          }
          const _0x590481 = await _0x4da4d5.mp4(_0x38be52);
          const _0x20c0ba = "\n*" + themeemoji + "Tittle:* " + _0x590481.title + "\n*" + themeemoji + "Date:* " + _0x590481.date + "\n*" + themeemoji + "Duration:* " + _0x590481.duration + "\n*" + themeemoji + "Quality:* " + _0x590481.quality;
          await _0x449011.sendMessage(_0x3ec39e.chat, {
            'video': {
              'url': _0x590481.videoUrl
            },
            'caption': _0x20c0ba
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "gpt4":
        const {
          G4F: _0x41212c
        } = require("g4f");
        if (!_0x38be52) {
          return _0x3ec39e.reply("provide text.");
        }
        const _0x351b85 = new _0x41212c();
        const _0x592006 = [{
          'role': "system",
          'content': "You're a bot."
        }, {
          'role': "user",
          'content': _0x38be52
        }];
        _0x351b85.chatCompletion(_0x592006).then(_0x78ed83 => {
          console.log(_0x78ed83);
          _0x3ec39e.reply(_0x78ed83);
        });
        break;
      case 'rules':
        _0x449011.sendMessage(_0x46f484, {
          'video': {
            'url': "https://c.tenor.com/geMdtLCXZkAAAAPo/rules.mp4"
          },
          'gifPlayback': true,
          'caption': "_*📍[Rules for Kish Md usage]📍*_\n\n\n*>>>* use -support to get the Official group link in your dm.\n\n*--->* If you want to add Kish-Md in your group the contact the owner by *-owner/-mods* \n\n*--->* Dont use wrong command, use the command given in the *-help* list \n\n* Dont spam the bot with commands if Kish-Md is not responding, its means the maybe owner is offline or facing internet issue. \n\n*IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BANNED* 🚫 \n\n\n*𓅃 Kish Bots inc* "
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "bot":
        let _0x95bfb4 = " Hello *" + _0x30e0a3 + "*, i am  *Kish-Md* A whatsapp bot command " + _0x59ea59 + 'menu';
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'image': {
            'url': "./Gallery/ch1.jpg"
          },
          'caption': _0x95bfb4,
          'gifPlayback': true
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "support":
        await _0x449011.sendMessage(_0x3ec39e.sender, {
          'image': {
            'url': "./Gallery/sup.jpg"
          },
          'caption': "📍Welcome to My Developer's Hub!📍\n\nhttps://chat.whatsapp.com/LhBwWwQAS4y93XOsCKpxdv"
        });
        await _0x449011.sendMessage(_0x3ec39e.chat, {
          'image': {
            'url': "./Gallery/ch2.jpg"
          },
          'caption': "I sent you the support Link in personal message.\n Pls check.",
          'gifPlayback': true
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "info":
        let _0x423224 = "⭐KISH MD ⭐\n*Creator:*  KISH\n*Version:* 3.0\n*Uptime:* " + runtime(process.uptime()) + "\n\n*Powered by Kish*";
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'image': {
            'url': './Gallery/ch3.jpg'
          },
          'caption': _0x423224,
          'gifPlayback': true
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "google":
        {
          _0x449011.sendMessage(_0x46f484, {
            'react': {
              'text': "ðŸ”Ž",
              'key': _0x3ec39e.key
            }
          });
          if (!q) {
            return _0x58e00e("Example : " + (_0x59ea59 + _0x29fbe7) + " Brasho kish");
          }
          let _0x220627 = require("google-it");
          _0x220627({
            'query': _0x38be52
          }).then(_0x24b0ea => {
            let _0x1d49a8 = "🏮  *Google Search Engine*🏮  \n\n\n";
            for (let _0x58e6ab of _0x24b0ea) {
              _0x1d49a8 += "🧧  *Title* : " + _0x58e6ab.title + "\n";
              _0x1d49a8 += "🔮 *Description* : " + _0x58e6ab.snippet + "\n";
              _0x1d49a8 += "🔗 *Link* : " + _0x58e6ab.link + "\n\n────────────────────\n\n";
            }
            _0x58e00e(_0x1d49a8);
          });
        }
        break;
      case 'wanumber':
      case "nowa":
      case 'searchnumber':
        {
          if (!_0x38be52) {
            return _0x58e00e("📵🔢 Enter a number ending with 'x'\n\nExample: " + (_0x59ea59 + _0x29fbe7) + " 2547459368xx");
          }
          var _0x23bc3d = _0x38be52.split(" ")[0x0];
          _0x58e00e("📱🔍 Exploring for WhatsApp accounts within the range...");
          var _0x38afb3 = _0x23bc3d.split('x')[0x0];
          var _0x31ba80 = _0x23bc3d.split('x')[_0x23bc3d.split('x').length - 0x1] ? _0x23bc3d.split('x')[_0x23bc3d.split('x').length - 0x1] : '';
          var _0x18032e = _0x23bc3d.split('x').length - 0x1;
          var _0x18f366;
          if (_0x18032e == 0x1) {
            _0x18f366 = 0xa;
          } else {
            if (_0x18032e == 0x2) {
              _0x18f366 = 0x64;
            } else if (_0x18032e == 0x3) {
              _0x18f366 = 0x3e8;
            }
          }
          var _0x52d801 = "𓅃 *WhatsApp Numbers Directory*\n\n";
          var _0x421e3b = "\n*Bio:* || \nHey there! I am using WhatsApp.\n";
          var _0x30a22a = "\n*Numbers with no WhatsApp account within provided range.*\n";
          for (let _0x256e93 = 0x0; _0x256e93 < _0x18f366; _0x256e93++) {
            var _0x4d41a4 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            var _0x251ca4 = _0x4d41a4[Math.floor(Math.random() * _0x4d41a4.length)];
            var _0x4f6fad = _0x4d41a4[Math.floor(Math.random() * _0x4d41a4.length)];
            var _0x27efa2 = _0x4d41a4[Math.floor(Math.random() * _0x4d41a4.length)];
            var _0x4e2dc3 = _0x4d41a4[Math.floor(Math.random() * _0x4d41a4.length)];
            var _0x2e62db;
            if (_0x18032e == 0x1) {
              _0x2e62db = '' + _0x251ca4;
            } else {
              if (_0x18032e == 0x2) {
                _0x2e62db = '' + _0x251ca4 + _0x4f6fad;
              } else {
                if (_0x18032e == 0x3) {
                  _0x2e62db = '' + _0x251ca4 + _0x4f6fad + _0x27efa2;
                } else if (_0x18032e == 0x4) {
                  _0x2e62db = '' + _0x251ca4 + _0x4f6fad + _0x27efa2 + _0x4e2dc3;
                }
              }
            }
            var _0x57bd22 = await _0x449011.onWhatsApp('' + _0x38afb3 + _0x256e93 + _0x31ba80 + "@s.whatsapp.net");
            var _0x254b12 = _0x57bd22.length !== 0x0 ? _0x57bd22 : false;
            try {
              try {
                var _0x10f8ec = await _0x449011.fetchStatus(_0x57bd22[0x0].jid);
              } catch {
                var _0x10f8ec = "401";
              }
              if (_0x10f8ec == "401" || _0x10f8ec.status.length == 0x0) {
                _0x421e3b += "wa.me/" + _0x57bd22[0x0].jid.split('@')[0x0] + "\n";
              } else {
                _0x52d801 += "📞  *Number:* wa.me/" + _0x57bd22[0x0].jid.split('@')[0x0] + "\n  🌐 *Bio :* " + _0x10f8ec.status + "\n☑️*Last update :* " + moment(_0x10f8ec.setAt).tz("Africa/Nairobi").format("HH:mm:ss DD/MM/YYYY") + "\n\n";
              }
            } catch {
              _0x30a22a += '' + _0x38afb3 + _0x256e93 + _0x31ba80 + "\n";
            }
          }
          _0x58e00e('' + _0x52d801 + _0x421e3b + _0x30a22a);
        }
        break;
      case "dare":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        const _0x552d75 = ["eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink", "spill people who make you pause", "call crush/pickle now and send ss", "drop only emote every time you type on gc/pc for 1 day.", "say Welcome to Who Wants To Be a Millionaire! to all the groups you have", "call ex saying miss", "sing the chorus of the last song you played", "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼", "Bang on the table (which is at home) until you get scolded for being noisy", "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing", "mention ex's name", "make 1 rhyme for the members!", "send ur whatsapp chat list", "chat random people with gheto language then ss here", "tell your own version of embarrassing things", "tag the person you hate", "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.", "change name to *I AM DONKEY* for 24 hours", "shout *ma chuda ma chuda ma chuda* in front of your house", "snap/post boyfriend photo/crush", "tell me your boyfriend type!", "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here", "record ur voice that read *titar ke age do titar, titar ke piche do titar*", "prank chat ex and say *i love u, please come back.* without saying dare!", "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*", "change the name to *I am a child of randi* for 5 hours", "type in bengali 24 hours", "Use selmon bhoi photo for 3 days", "drop a song quote then tag a suitable member for that quote", "send voice note saying can i call u baby?", "ss recent call whatsapp", "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!", "pop to a group member, and say fuck you", "Act like a chicken in front of ur parents", "Pick up a random book and read one page out loud in vn n send it here", "Open your front door and howl like a wolf for 10 seconds", "Take an embarrassing selfie and paste it on your profile picture", "Let the group choose a word and a well known song. You have to sing that song and send it in voice note", "Walk on your elbows and knees for as long as you can", "sing national anthem in voice note", "Breakdance for 30 seconds in the sitting roomðŸ˜‚", "Tell the saddest story you know", "make a twerk dance video and put it on status for 5mins", "Eat a raw piece of garlic", "Show the last five people you texted and what the messages said", "put your full name on status for 5hrs", "make a short dance video without any filter just with a music and put it on ur status for 5hrs", "call ur bestie, bitch", "put your photo without filter on ur status for 10mins", "say i love oli london in voice noteðŸ¤£ðŸ¤£", "Send a message to your ex and say I still like you", "call Crush/girlfriend/bestie now and screenshot here", "pop to one of the group member personal chat and Say you ugly bustard", "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist", "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy", "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here", "use any bollywood actor photo as ur pfp for 3 days", "put your crush photo on status with caption, this is my crush", "change name to I AM GAY for 5 hours", "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours", "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl", "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚", "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world", "shout bravooooooooo and send here through voice note", "snap your face then send it here", "Send your photo with a caption, i am lesbian", "shout using harsh words and send it here through vn", "shout you bastard in front of your mom/papa", "change the name to i am idiot for 24 hours", "slap urself firmly and send the sound of slap through voice noteðŸ˜‚", "say i love the bot owner Kish through voice note", "send your gf/bf pic here", "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs", "breakup with your best friend for 5hrs without telling him/her that its a dare", "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare", "say i love depak kalal through voice note", "write i am feeling horny and put it on status, u can delete it only after 5hrs", "write i am lesbian and put it on status, u can delete only after 5hrs", "kiss your mommy or papa and say i love youðŸ˜Œ", "put your father name on status for 5hrs", "send abusive words in any grup, excepting this grup, and send screenshot proof here"];
        const _0x1bee19 = _0x552d75[Math.floor(Math.random() * _0x552d75.length)];
        buffer = await getBuffer("https://graph.org/file/8dd92e67cd4019b092f53.jpg");
        _0x449011.sendMessage(_0x46f484, {
          'image': buffer,
          'caption': "*You have chosen Dare*\n\n" + _0x1bee19
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "truth":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        const _0x4655fa = ["Have you ever liked anyone? How long?", "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)", "apa ketakutan terbesar kamu?", "Have you ever liked someone and felt that person likes you too?", "What is the name of your friend's ex-girlfriend that you used to secretly like?", "Have you ever stolen money from your father or mom? The reason?", "What makes you happy when you're sad?", "Ever had a one sided love? if so who? how does it feel bro?", "been someone's mistress?", "the most feared thing", "Who is the most influential person in your life?", "what proud thing did you get this year", "Who is the person who can make you awesome", "Who is the person who has ever made you very happy?", "Who is closest to your ideal type of partner here", "Who do you like to play with??", "Have you ever rejected people? the reason why?", "Mention an incident that made you hurt that you still remember", "What achievements have you got this year??", "What's your worst habit at school??", "What song do you sing most in the shower", "Have you ever had a near-death experience", "When was the last time you were really angry. Why?", "Who is the last person who called you", "Do you have any hidden talents, What are they", "What word do you hate the most?", "What is the last YouTube video you watched?", "What is the last thing you Googled", "Who in this group would you want to swap lives with for a week", "What is the scariest thing thats ever happened to you", "Have you ever farted and blamed it on someone else", "When is the last time you made someone else cry", "Have you ever ghosted a friend", "Have you ever seen a dead body", "Which of your family members annoys you the most and why", "If you had to delete one app from your phone, which one would it be", "What app do you waste the most time on", "Have you ever faked sick to get home from school", "What is the most embarrassing item in your room", "What five items would you bring if you got stuck on a desert island", "Have you ever laughed so hard you peed your pants", "Do you smell your own farts", "have u ever peed on the bed while sleeping Ã°Å¸Â¤Â£Ã°Å¸Â¤Â£", "What is the biggest mistake you have ever made", "Have you ever cheated in an exam", "What is the worst thing you have ever done", "When was the last time you cried", "whom do you love the most among ur parents", "do u sometimes put ur finger in ur nosetrilÃ°Å¸Â¤Â£", "who was ur crush during the school days", "tell honestly, do u like any boy in this grup", "have you ever liked anyone? how long?", "do you have gf/bf','what is your biggest fear?", "have you ever liked someone and felt that person likes you too?", "What is the name of your ex boyfriend of your friend that you once liked quietly?", "ever did you steal your mothers money or your fathers money", "what makes you happy when you are sad", "do you like someone who is in this grup? if you then who?", "have you ever been cheated on by people?", "who is the most important person in your life", "what proud things did you get this year", "who is the person who can make you happy when u r sad", "who is the person who ever made you feel uncomfortable", "have you ever lied to your parents", "do you still like ur ex", "who do you like to play together with?", "have you ever stolen big thing in ur life? the reason why?", "Mention the incident that makes you hurt that you still remember", "what achievements have you got this year?", "what was your worst habit at school?", "do you love the bot creator Kish?", "have you ever thought of taking revenge from ur teacher?", "do you like current prime minister of ur country", "you non veg or veg", "if you could be invisible, what is the first thing you would do", "what is a secret you kept from your parents", "Who is your secret crush", "whois the last person you creeped on social media", "If a genie granted you three wishes, what would you ask for", "What is your biggest regret", "What animal do you think you most look like", "How many selfies do you take a day", "What was your favorite childhood show", "if you could be a fictional character for a day, who would you choose", "whom do you text the most", "What is the biggest lie you ever told your parents", "Who is your celebrity crush", "Whats the strangest dream you have ever had", "do you play pubg, if you then send ur id number"];
        const _0x5f4ad8 = _0x4655fa[Math.floor(Math.random() * _0x4655fa.length)];
        buffer = await getBuffer('https://graph.org/file/8dd92e67cd4019b092f53.jpg');
        _0x449011.sendMessage(_0x46f484, {
          'image': buffer,
          'caption': "*You have chosen Truth*\n" + _0x5f4ad8
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "menu":
      case 'menu':
      case 'm':
        const _0x102755 = "╭─「 *KISH MD* 」\n┃❃╭──────────────\n┃❃│ Owner: " + ownername + "\n┃❃│ Prefix : *" + _0x59ea59 + "*\n┃❃│ User : " + _0x30e0a3 + " \n┃❃│ Time : " + xtime + "\n┃❃│ Date : " + xdate + "\n┃❃│ Version : " + mver + "\n┃❃│ Uptime : " + runtime(process.uptime()) + "\n┃❃╰───────────────\n╰───────────┈平和\nHere's the list of my Commands.𓅃\n" + readmore + "    \n ╭─_*🧧🅖︎🅔︎🅝︎🅔︎🅡︎🅐︎🅛︎🧧*_\n │ " + _0x59ea59 + "dev\n │ " + _0x59ea59 + "rules\n │ " + _0x59ea59 + "vv\n │ " + _0x59ea59 + "support \n │ " + _0x59ea59 + "rules\n │ " + _0x59ea59 + "help\n │ " + _0x59ea59 + "runtime\n │ " + _0x59ea59 + "ping\n │ " + _0x59ea59 + "owner\n ╰─────────────────\n ╭─_*📓🅐︎🅘︎📓*_\n │ " + _0x59ea59 + "gpt\n │ " + _0x59ea59 + "gpt3\n │ " + _0x59ea59 + "gpt4\n │ " + _0x59ea59 + "define\n ╰─────────────────\n ╭─_*🧑‍💻🅞︎🅦︎🅝︎🅔︎🅡︎🧑‍💻*_\n │ " + _0x59ea59 + "autosview\n │ " + _0x59ea59 + "autorecordtyp\n │ " + _0x59ea59 + "autorecording\n │ " + _0x59ea59 + "block\n │ " + _0x59ea59 + "backup\n │ " + _0x59ea59 + "creatgc\n │ " + _0x59ea59 + "join\n │ " + _0x59ea59 + "mode\n │ " + _0x59ea59 + "restart\n │ " + _0x59ea59 + "shutdown\n │ " + _0x59ea59 + "setppbot\n ╰─────────────────\n ╭─__*👮🏻‍♂️🅖︎🅡︎🅞︎🅤︎🅟︎👮🏻‍♂️*_\n │ " + _0x59ea59 + "antilink\n │ " + _0x59ea59 + "closetime\n │ " + _0x59ea59 + "opentime\n │ " + _0x59ea59 + "remove\n │ " + _0x59ea59 + "promote\n │ " + _0x59ea59 + "demote\n │ " + _0x59ea59 + "setdesc\n │ " + _0x59ea59 + "setppgc\n │ " + _0x59ea59 + "tagall\n │ " + _0x59ea59 + "group\n │ " + _0x59ea59 + "editinfo\n │ " + _0x59ea59 + "gclink\n │ " + _0x59ea59 + "revoke\n │ " + _0x59ea59 + "listonline\n ╰─────────────────\n ╭─_*✍️🅔︎🅓︎🅘︎🅣︎✍️*_\n │ " + _0x59ea59 + "write\n │ " + _0x59ea59 + "burnpaper\n │ " + _0x59ea59 + "romatic\n │ " + _0x59ea59 + "coffecup\n │ " + _0x59ea59 + "undergrass\n │ " + _0x59ea59 + "love\n │ " + _0x59ea59 + "narutobanner\n ╰─────────────────\n ╭─_*🎓🅔︎🅓︎🅤︎🅒︎🅐︎🅣︎🅘︎🅞︎🅝︎🎓*_\n │ " + _0x59ea59 + "element \n │ " + _0x59ea59 + "calc\n │ " + _0x59ea59 + "sciencefacct\n │ " + _0x59ea59 + "sciencenews\n ╰─────────────────\n ╭─_*💻🅒︎🅞︎🅓︎🅘︎🅝︎🅖︎💻*_\n │ " + _0x59ea59 + "enc\n │ " + _0x59ea59 + "run\n │ " + _0x59ea59 + "gitclone\n │ " + _0x59ea59 + "exec\n ╰─────────────────\n ╭─_*📂🅓︎🅞︎🅦︎🅝︎🅛︎🅞︎🅐︎🅓︎📂*_\n │ " + _0x59ea59 + "play\n │ " + _0x59ea59 + "lyrics\n │ " + _0x59ea59 + "video\n │ " + _0x59ea59 + "mediafire\n │ " + _0x59ea59 + "ytmp3\n │ " + _0x59ea59 + "ytmp4\n │ " + _0x59ea59 + "fbdl\n │ " + _0x59ea59 + "igimage\n │ " + _0x59ea59 + "gitclone\n │ " + _0x59ea59 + "pinterest\n │ " + _0x59ea59 + "apk\n ╰─────────────────\n ╭─_*🎮🅖︎🅐︎🅜︎🅔︎🅢︎🎮*_\n │ " + _0x59ea59 + "poker\n │ " + _0x59ea59 + "dice\n │ " + _0x59ea59 + "slot\n │ " + _0x59ea59 + "Rps\n │ " + _0x59ea59 + "guess\n │ " + _0x59ea59 + "blackjack\n │ " + _0x59ea59 + "flipcoin\n ╰─────────────────\n ╭─_*⛩️🅞︎🅣︎🅗︎🅔︎🅡︎🅢︎⛩️*_\n │ " + _0x59ea59 + "sticker\n │ " + _0x59ea59 + "qc\n │ " + _0x59ea59 + "calc\n │ " + _0x59ea59 + "smeme\n │ " + _0x59ea59 + "take\n │ " + _0x59ea59 + "toimage\n │ " + _0x59ea59 + "tovideo\n │ " + _0x59ea59 + "toaudio\n │ " + _0x59ea59 + "tomp3\n │ " + _0x59ea59 + "tovn\n │ " + _0x59ea59 + "togif\n │ " + _0x59ea59 + "tourl\n │ " + _0x59ea59 + "toviewonce\n │ " + _0x59ea59 + "google\n │ " + _0x59ea59 + "weather\n │ " + _0x59ea59 + "emojimix\n │ " + _0x59ea59 + "dalle\n ╰─────────────────\n 🍂 To enable NSFW (Admin only!), enter  *" + _0x59ea59 + "nsfw* \n \n🍂 Obtain the full list of NSFW commands by typing  *" + _0x59ea59 + "nsfwmenu*";
        if (_0x1c7f99) {
          _0x449011.sendMessage(_0x46f484, {
            'image': {
              'url': _0x1c7f99
            },
            'caption': _0x102755
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "circlevideo":
        {
          try {
            const _0x187c8f = await require("@whiskeysockets/baileys").generateWAMessageContent({
              'video': await _0x3ec39e.quoted.download()
            }, {
              'upload': _0x449011.waUploadToServer
            });
            await _0x449011.relayMessage(_0x46f484, {
              'ptvMessage': {
                ..._0x187c8f.videoMessage
              }
            }, {});
          } catch (_0x1d98b6) {
            _0x58e00e("Reply to a Video with Caption " + (_0x59ea59 + _0x29fbe7));
          }
        }
        break;
      case "couple":
        {
          if (!_0x3ec39e.isGroup) {
            return _0x58e00e(mess.group);
          }
          let _0x1bb4d8 = _0x1d2252.map(_0x55a782 => _0x55a782.id);
          let _0x34af55 = _0x1bb4d8[Math.floor(Math.random() * _0x1bb4d8.length)];
          let _0x468306 = _0x1bb4d8[Math.floor(Math.random() * _0x1bb4d8.length)];
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'text': '@' + _0x34af55.split('@')[0x0] + " â¤ï¸ @" + _0x468306.split('@')[0x0] + "\nCieeee, What's Going Onâ¤ï¸ðŸ’–ðŸ‘€",
            'contextInfo': {
              'mentionedJid': [_0x34af55, _0x468306],
              'forwardingScore': 0x98967f,
              'isForwarded': true,
              'externalAdReply': {
                'showAdAttribution': true,
                'containsAutoReply': true,
                'title': " " + global.botname,
                'body': '' + ownername,
                'previewType': "PHOTO",
                'thumbnailUrl': '',
                'thumbnail': fs.readFileSync("./Gallery/thumb.jpg"),
                'sourceUrl': '' + link
              }
            }
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "public":
        {
          if (!_0x49b7a1) {
            return _0x58e00e(mess.owner);
          }
          _0x449011["public"] = true;
          _0x58e00e("*Successful in Changing To Public Usage*");
        }
        break;
      case "self":
        {
          if (!_0x49b7a1) {
            return _0x58e00e(mess.owner);
          }
          _0x449011["public"] = false;
          _0x58e00e("*Successful in Changing To Self Usage*");
        }
        break;
      case "nsfwmenu":
        if (!_0x53b9c3) {
          return _0x58e00e(mess.nsfw);
        }
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        const _0x57d4c1 = "┌──⊰ _*🔞NSFW 🔞*_\n│⊳ 💦  " + _0x59ea59 + "blowjob\n│⊳ 💦  " + _0x59ea59 + "cum\n│⊳ 💦  " + _0x59ea59 + "foot\n│⊳ 💦  " + _0x59ea59 + "gangbang\n│⊳ 💦  " + _0x59ea59 + "hentai\n│⊳ 💦  " + _0x59ea59 + "pussy\n│⊳ 💦  " + _0x59ea59 + "ass\n│⊳ 💦  " + _0x59ea59 + "trap\n│⊳ 💦  " + _0x59ea59 + "maal\n│⊳ 💦  " + _0x59ea59 + "ʀɪʙʙᴏɴꜱ\n│⊳ 💦  " + _0x59ea59 + "ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ\n│⊳ 💦  " + _0x59ea59 + "ʜᴇᴀᴅʙᴀɴᴅ\n│⊳ 💦  " + _0x59ea59 + "ꜰᴏxɢɪʀʟ\n│⊳ 💦  " + _0x59ea59 + "ᴀɴɪᴍᴀʟᴇᴀʀꜱ\n│⊳ 💦  " + _0x59ea59 + "ʙʀᴀ\n│⊳ 💦  " + _0x59ea59 + "ꜱᴋɪʀᴛ\n│⊳ 💦  " + _0x59ea59 + "ʙʀᴇᴀꜱᴛꜱ\n│⊳ 💦  " + _0x59ea59 + "ᴛᴀᴛᴛᴏᴏ\n│⊳ 💦  " + _0x59ea59 + "ᴄʜᴀɪɴ\n└──────────⊰ \n";
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'image': {
            'url': "./Gallery/nsfw.jpg"
          },
          'caption': _0x57d4c1
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "nsfw":
        {
          _0x449011.sendMessage(_0x46f484, {
            'react': {
              'text': '🔞',
              'key': _0x3ec39e.key
            }
          });
          if (!_0x3ec39e.isGroup) {
            return _0x58e00e(mess.group);
          }
          if (!_0x439c33 && !_0x3bb18c && !_0x49b7a1) {
            return _0x58e00e(mess.admin);
          }
          if (!_0x41b04e) {
            return _0x58e00e(mess.botAdmin);
          }
          if (_0x1e269b[0x0] === 'on') {
            if (_0x247b93) {
              return _0x58e00e("Already activated✅");
            }
            isnsfw.push(_0x46f484);
            fs.writeFileSync("./Gallery/database/nsfw.json", JSON.stringify(isnsfw));
            _0x58e00e("Successfully activating nsfw mode in this group âœ”ï¸");
            var _0x4bdc41 = await _0x449011.groupMetadata(_0x46f484);
            var _0x5bd22c = _0x4bdc41.participants;
            var _0x5527a1 = [];
            _0x5bd22c.map(async _0x43c7cd => {
              _0x5527a1.push(_0x43c7cd.id.replace('c.us', "s.whatsapp.net"));
            });
            _0x449011.sendMessage(_0x46f484, {
              'text': "```⚠️Warning⚠️```\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!",
              'contextInfo': {
                'mentionedJid': _0x5527a1
              }
            }, {
              'quoted': _0x3ec39e
            });
          } else {
            if (_0x1e269b[0x0] === "off") {
              if (!_0x247b93) {
                return _0x58e00e("Already deactivated");
              }
              let _0x1edb96 = isnsfw.indexOf(_0x46f484);
              isnsfw.splice(_0x1edb96, 0x1);
              fs.writeFileSync('./Gallery/database/nsfw.json', JSON.stringify(isnsfw));
              _0x58e00e("Successfully deactivating nsfw mode in this group âœ”ï¸");
            } else {
              await _0x58e00e("*Kindly input the choice as follows:*\n*Example: " + (_0x59ea59 + _0x29fbe7) + " on*\n*Example: " + (_0x59ea59 + _0x29fbe7) + " off*\nðŸŸ¢ *Use 'on' to enable and 'off' to disable.* ðŸ”´");
            }
          }
        }
        break;
      case "chain":
      case "tattoo":
      case "breasts":
      case 'skirt':
      case "bra":
      case "animalears":
      case "foxgirl":
      case "headband":
      case "hatsunemiku":
      case "ribbons":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x53b9c3) {
          return _0x58e00e(mess.nsfw);
        }
        const _0x57ff1d = await _0x418c1d.get('https://fantox-apis.vercel.app/' + _0x29fbe7);
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'caption': "OMG🥵",
          'image': {
            'url': _0x57ff1d.data.url
          }
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "blowjob":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x53b9c3) {
          return _0x58e00e(mess.nsfw);
        }
        var _0x2331a4 = JSON.parse(fs.readFileSync("./Gallery/nsfw/blowjob.json"));
        var _0x406009 = _0x2331a4[Math.floor(Math.random() * _0x2331a4.length)];
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'caption': mess.done,
          'image': {
            'url': _0x406009.url
          }
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "cum":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x53b9c3) {
          return _0x58e00e(mess.nsfw);
        }
        var _0x2331a4 = JSON.parse(fs.readFileSync('./Gallery/nsfw/cum.json'));
        var _0x406009 = _0x2331a4[Math.floor(Math.random() * _0x2331a4.length)];
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'caption': mess.done,
          'image': {
            'url': _0x406009.url
          }
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case 'foot':
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x53b9c3) {
          return _0x58e00e(mess.nsfw);
        }
        var _0x2331a4 = JSON.parse(fs.readFileSync("./Gallery/nsfw/foot.json"));
        var _0x406009 = _0x2331a4[Math.floor(Math.random() * _0x2331a4.length)];
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'caption': mess.done,
          'image': {
            'url': _0x406009.url
          }
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "gangbang":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x53b9c3) {
          return _0x58e00e(mess.nsfw);
        }
        var _0x2331a4 = JSON.parse(fs.readFileSync('./Gallery/nsfw/gangbang.json'));
        var _0x406009 = _0x2331a4[Math.floor(Math.random() * _0x2331a4.length)];
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'caption': mess.done,
          'image': {
            'url': _0x406009.url
          }
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "hentai":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x53b9c3) {
          return _0x58e00e(mess.nsfw);
        }
        var _0x2331a4 = JSON.parse(fs.readFileSync("./Gallery/nsfw/hentai.json"));
        var _0x406009 = _0x2331a4[Math.floor(Math.random() * _0x2331a4.length)];
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'caption': mess.done,
          'image': {
            'url': _0x406009.url
          }
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "pussy":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x53b9c3) {
          return _0x58e00e(mess.nsfw);
        }
        var _0x2331a4 = JSON.parse(fs.readFileSync('./Gallery/nsfw/pussy.json'));
        var _0x406009 = _0x2331a4[Math.floor(Math.random() * _0x2331a4.length)];
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'caption': mess.done,
          'image': {
            'url': _0x406009.url
          }
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "ass":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x53b9c3) {
          return _0x58e00e(mess.nsfw);
        }
        var _0x2331a4 = JSON.parse(fs.readFileSync("./Gallery/nsfw/ass.json"));
        var _0x406009 = _0x2331a4[Math.floor(Math.random() * _0x2331a4.length)];
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'caption': mess.done,
          'image': {
            'url': _0x406009.url
          }
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "trap":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        if (!_0x53b9c3) {
          return _0x58e00e(mess.nsfw);
        }
        waifudd = await _0x418c1d.get("https://waifu.pics/api/nsfw/" + _0x29fbe7);
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'caption': mess.done,
          'image': {
            'url': waifudd.data.url
          }
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "maal":
        {
          if (!_0x53b9c3) {
            return _0x58e00e(mess.nsfw);
          }
          if (!_0x3ec39e.isGroup) {
            return _0x58e00e(mess.group);
          }
          _0x58e00e(mess.wait);
          await _0x449011.sendMessage(_0x3ec39e.chat, {
            'image': await getBuffer("https://Kishhh.onrender.com"),
            'caption': "OMG ðŸ¥µ"
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case 'hd':
        {
          if (!_0x24699f) {
            return _0x58e00e("Where is the picture?");
          }
          if (!/image/.test(_0x33cdae)) {
            return _0x58e00e("Send/Reply Photos With Captions " + (_0x59ea59 + _0x29fbe7));
          }
          _0x58e00e(mess.wait);
          const {
            remini: _0x5b0960
          } = require("./Gallery/lib/remini");
          let _0x44571b = await _0x24699f.download();
          let _0x112372 = await _0x5b0960(_0x44571b, 'enhance');
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'image': _0x112372,
            'caption': mess.done
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case 'awesomecheck':
      case "greatcheck":
      case "gaycheck":
      case "cutecheck":
      case "lesbicheck":
      case 'lesbiancheck':
      case "hornycheck":
      case 'prettycheck':
      case "lovelycheck":
      case "uglycheck":
        if (!_0x3ec39e.isGroup) {
          return _0x58e00e(mess.group);
        }
        const _0x53e846 = _0x953bad.slice(0x0);
        const _0x37a346 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', "100"];
        const _0x497d38 = _0x37a346[Math.floor(Math.random() * _0x37a346.length)];
        if (_0x4615ea) {
          _0x449011.sendMessage(_0x46f484, {
            'text': "Question : *" + _0x53e846 + "*\nChecker : " + ('@' + _0x4615ea.split('@')[0x0]) + "\nAnswer : " + _0x497d38 + '%',
            'mentions': [_0x4615ea]
          }, {
            'quoted': _0x3ec39e
          });
        } else {
          if (_0x2c9bf[0x0] && _0x5765f0) {
            _0x449011.sendMessage(_0x46f484, {
              'text': "Question : *" + _0x53e846 + "*\nChecker : " + ('@' + _0x2c9bf[0x0].split('@')[0x0]) + "\nAnswer : " + _0x497d38 + '%',
              'mentions': [_0x2c9bf[0x0]]
            }, {
              'quoted': _0x3ec39e
            });
          } else if (!_0x4615ea && !_0x2c9bf[0x0]) {
            _0x449011.sendMessage(_0x46f484, {
              'text': "Question : *" + _0x53e846 + "*\nChecker : " + ('@' + _0x13fc48.split('@')[0x0]) + "\nAnswer : " + _0x497d38 + '%',
              'mentions': [_0x13fc48]
            }, {
              'quoted': _0x3ec39e
            });
          }
        }
        break;
      case 'hidetag':
        {
          if (!_0x3ec39e.isGroup) {
            return _0x58e00e(mess.group);
          }
          if (!_0x439c33 && !_0x49b7a1) {
            return _0x58e00e(mess.admin);
          }
          if (!_0x41b04e) {
            return _0x58e00e(mess.botAdmin);
          }
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'text': _0x1e269b.join(" ") ? _0x1e269b.join(" ") : '',
            'mentions': _0x1d2252.map(_0x405055 => _0x405055.id)
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "admin":
      case 'tagadmin':
        {
          if (!_0x3ec39e.isGroup) {
            return _0x58e00e(mess.group);
          }
          if (!_0x439c33 && !_0x49b7a1) {
            return _0x58e00e(mess.admin);
          }
          if (!_0x41b04e) {
            return _0x58e00e(mess.botAdmin);
          }
          if (!_0x38be52) {
            return replay("🧩*Please quote or write a meaningful message to tag admins to*");
          }
          let _0x1e4970 = "*🧩𝗚𝗿𝗼𝘂𝗽 𝗔𝗱𝗺𝗶𝗻𝘀🧩*\n  \n *Message : " + _0x38be52 + "*\n\n";
          for (let _0xed4385 of _0x1b8bf6) {
            _0x1e4970 += "👸 @" + _0xed4385.split('@')[0x0] + "\n";
          }
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'text': _0x1e4970,
            'mentions': _0x1b8bf6
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "pinterest":
      case "pin":
        {
          if (!_0x1e269b.join(" ")) {
            return _0x58e00e('🧩*' + _0x30e0a3 + "Please provide a search term!");
          }
          _0x58e00e(mess.waiting);
          let {
            pinterest: _0x1ffa7e
          } = require("./Gallery/lib/scraper");
          let _0x32a558 = await _0x1ffa7e(_0x38be52);
          let _0x5f5d13 = [];
          for (let _0x15526f = 0x0; _0x15526f < 0x5 && _0x15526f < _0x32a558.length; _0x15526f++) {
            _0x5f5d13.push(_0x32a558[Math.floor(Math.random() * _0x32a558.length)]);
          }
          for (let _0x3b6473 = 0x0; _0x3b6473 < _0x5f5d13.length; _0x3b6473++) {
            _0x449011.sendMessage(_0x3ec39e.chat, {
              'image': {
                'url': _0x5f5d13[_0x3b6473]
              }
            }, {
              'quoted': _0x3ec39e
            });
          }
        }
        break;
      case "runtime":
        {
          let _0x58caea = "*The Bot Has Been Online For:*\n🎉 *" + runtime(process.uptime()) + '*';
          _0x58e00e(_0x58caea);
        }
        break;
      case "igimage":
      case "igimg":
        {
          if (!_0x38be52) {
            return _0x58e00e("🧩Link?");
          }
          let _0x310024 = await fetch('https://vihangayt.me/download/instagram?url=' + _0x38be52);
          let _0x2e1365 = await _0x310024.json();
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'image': {
              'url': _0x2e1365.data.data[0x0].url
            },
            'caption': mess.done
          }, {
            'quoted': _0x3ec39e
          })['catch'](console.error);
        }
        break;
      case "igvideo":
      case "igvid":
        {
          if (!q) {
            return _0x58e00e("🧩Link?");
          }
          let _0x418e18 = await fetch('https://vihangayt.me/download/instagram?url=' + q);
          let _0x3a0b90 = await _0x418e18.json();
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'video': {
              'url': _0x3a0b90.data.data[0x0].url
            },
            'caption': mess.done
          }, {
            'quoted': _0x3ec39e
          })["catch"](console.error);
        }
        break;
      case "apk":
        {
          const {
            download: _0x30a6ec
          } = require('aptoide-scraper');
          try {
            if (!_0x38be52) {
              return _0x3ec39e.reply("Provide an app name");
            }
            let _0x3c2e5a = await _0x30a6ec(_0x38be52);
            if (_0x3c2e5a.size.replace(" MB", '') > 0xfa) {
              return _0x3ec39e.reply("App is more than 250mb, download yourself");
            }
            await _0x449011.sendMessage(_0x3ec39e.chat, {
              'text': "Downloading and uploading " + _0x38be52 + ". . ."
            }, {
              'quoted': _0x3ec39e
            });
            await client.sendMessage(_0x3ec39e.chat, {
              'document': {
                'url': _0x3c2e5a.dllink
              },
              'mimetype': 'application/vnd.android.package-archive',
              'fileName': _0x3c2e5a.name + ".apk"
            }, {
              'quoted': _0x3ec39e
            });
          } catch (_0x11cfdc) {
            _0x3ec39e.reply("Apk download failed");
          }
        }
        ;
        break;
      case "mediafire":
        {
          if (_0x1e269b.length == 0x0) {
            return _0x58e00e("🧩Where is the link ?");
          }
          if (!isUrl(_0x1e269b[0x0]) && !_0x1e269b[0x0].includes("mediafire.com")) {
            return _0x58e00e("🧩The link you provided is invalid");
          }
          const {
            mediafireDl: _0x40e690
          } = require("./Gallery/lib/mediafire.js");
          const _0x3fc6b1 = await _0x40e690(_0x38be52);
          if (_0x3fc6b1[0x0].size.split('MB')[0x0] >= 0x64) {
            return _0x58e00e("Oops, the file is too big...");
          }
          const _0x7803d8 = "𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀\n*â– Name* : " + _0x3fc6b1[0x0].nama + "\n*â– Size* : " + _0x3fc6b1[0x0].size + "\n*â– Mime* : " + _0x3fc6b1[0x0].mime + "\n*â– Link* : " + _0x3fc6b1[0x0].link;
          _0x58e00e('' + _0x7803d8);
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'document': {
              'url': _0x3fc6b1[0x0].link
            },
            'fileName': _0x3fc6b1[0x0].nama,
            'mimetype': _0x3fc6b1[0x0].mime
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "welcome":
      case "left":
        {
          if (!_0x3ec39e.isGroup) {
            return _0x58e00e(mess.group);
          }
          if (!_0x49b7a1) {
            return _0x58e00e(mess.owner);
          }
          if (_0x1e269b.length < 0x1) {
            return _0x58e00e('on/off?');
          }
          if (_0x1e269b[0x0] === 'on') {
            welcome = true;
            _0x58e00e(_0x29fbe7 + " is enabled");
          } else if (_0x1e269b[0x0] === "off") {
            welcome = false;
            _0x58e00e(_0x29fbe7 + " is disabled");
          }
        }
        break;
      case "git":
      case "gitclone":
        if (!_0x1e269b[0x0]) {
          return _0x58e00e("🧩Where is the link?\n🔮Example :\n" + _0x59ea59 + _0x29fbe7 + " https://github.com/Brashokish/Kish-Md ");
        }
        if (!isUrl(_0x1e269b[0x0]) && !_0x1e269b[0x0].includes("github.com")) {
          return replygcKish("Link invalid!!");
        }
        let [, _0x77817b, _0x2546d1] = _0x1e269b[0x0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || [];
        _0x2546d1 = _0x2546d1.replace(/.git$/, '');
        let _0x33b720 = "https://api.github.com/repos/" + _0x77817b + '/' + _0x2546d1 + "/zipball";
        let _0x469094 = (await fetch(_0x33b720, {
          'method': "HEAD"
        })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'document': {
            'url': _0x33b720
          },
          'fileName': _0x469094 + ".zip",
          'mimetype': "application/zip"
        }, {
          'quoted': _0x3ec39e
        })["catch"](_0x51cd82 => _0x58e00e(mess.error));
        break;
      case "ggg":
        if (_0x240a1f) {
          const _0x5c5761 = "*Did You Mean " + _0x59ea59 + "help*";
          let _0x583b5a = {
            'text': _0x5c5761
          };
          _0x449011.sendMessage(_0x3ec39e.chat, _0x583b5a, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "telestick":
        {
          if (_0x1e269b[0x0] && _0x1e269b[0x0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
            let _0x4905c5 = await _0x5c87df(_0x1e269b[0x0]);
            await _0x58e00e("Sending " + _0x4905c5.length + " stickers...");
            if (_0x3ec39e.isGroup && _0x4905c5.length > 0x1e) {
              await _0x58e00e("Number of stickers more than 30, bot will send it in private chat.");
              for (let _0x3252fe = 0x0; _0x3252fe < _0x4905c5.length; _0x3252fe++) {
                _0x449011.sendMessage(_0x3ec39e.sender, {
                  'sticker': {
                    'url': _0x4905c5[_0x3252fe].url
                  }
                });
              }
            } else {
              for (let _0x2156b2 = 0x0; _0x2156b2 < _0x4905c5.length; _0x2156b2++) {
                _0x449011.sendMessage(_0x3ec39e.chat, {
                  'sticker': {
                    'url': _0x4905c5[_0x2156b2].url
                  }
                });
              }
            }
          } else {
            _0x58e00e("🧩Telegram sticker Link??\n🔮Example. " + (_0x59ea59 + _0x29fbe7) + " https://t.me/addstickers/FriendlyDeath");
          }
        }
        break;
      case "shadow":
      case "write":
      case 'romantic':
      case 'burnpaper':
      case 'smoke':
      case "narutobanner":
      case "love":
      case "undergrass":
      case "doublelove":
      case "coffecup":
      case "underwaterocean":
      case "smokyneon":
      case 'starstext':
      case 'rainboweffect':
      case "balloontext":
      case "metalliceffect":
      case "embroiderytext":
      case 'flamingtext':
      case "stonetext":
      case "writeart":
      case "summertext":
      case "wolfmetaltext":
      case "nature3dtext":
      case "rosestext":
      case 'naturetypography':
      case "quotesunder":
      case "shinetext":
        {
          if (!q) {
            return _0x58e00e("🔮Example : " + (_0x59ea59 + _0x29fbe7) + " Kish");
          }
          let _0x411b02;
          if (/stonetext/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html";
          }
          if (/writeart/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html";
          }
          if (/summertext/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html";
          }
          if (/wolfmetaltext/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html";
          }
          if (/nature3dtext/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html";
          }
          if (/rosestext/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html";
          }
          if (/naturetypography/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html";
          }
          if (/quotesunder/.test(_0x29fbe7)) {
            _0x411b02 = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
          }
          if (/shinetext/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html";
          }
          if (/shadow/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html";
          }
          if (/write/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html";
          }
          if (/romantic/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html";
          }
          if (/burnpaper/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html";
          }
          if (/smoke/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html";
          }
          if (/narutobanner/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html";
          }
          if (/love/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html";
          }
          if (/undergrass/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html";
          }
          if (/doublelove/.test(_0x29fbe7)) {
            _0x411b02 = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
          }
          if (/coffecup/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html";
          }
          if (/underwaterocean/.test(_0x29fbe7)) {
            _0x411b02 = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
          }
          if (/smokyneon/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html";
          }
          if (/starstext/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html";
          }
          if (/rainboweffect/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html";
          }
          if (/balloontext/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html";
          }
          if (/metalliceffect/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html";
          }
          if (/embroiderytext/.test(_0x29fbe7)) {
            _0x411b02 = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
          }
          if (/flamingtext/.test(_0x29fbe7)) {
            _0x411b02 = "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html";
          }
          let _0x54eb83 = await _0x549084.photoOxy(_0x411b02, q);
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'image': {
              'url': _0x54eb83
            },
            'caption': '' + mess.done
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "poll":
        {
          if (!_0x3ec39e.isGroup) {
            return replay(mess.grouponly);
          }
          let [_0x10c28f, _0x25e080] = _0x38be52.split('|');
          if (_0x38be52.split('|') < 0x2) {
            return await _0x58e00e("Mention question and atleast 2 options\nExample: " + _0x59ea59 + "poll Who is best admin?|Kish,Kish,Owner...");
          }
          let _0x187509 = [];
          for (let _0x11eaae of _0x25e080.split(',')) {
            _0x187509.push(_0x11eaae);
          }
          await _0x449011.sendMessage(_0x3ec39e.chat, {
            'poll': {
              'name': _0x10c28f,
              'values': _0x187509
            }
          });
        }
        break;
      case "creategc":
      case "creategroup":
        {
          if (!_0x49b7a1) {
            return replay(mess.botowner);
          }
          if (!_0x1e269b.join(" ")) {
            return _0x58e00e("Use " + (_0x59ea59 + _0x29fbe7) + " groupname");
          }
          try {
            let _0x563abf = await _0x449011.groupCreate(_0x1e269b.join(" "), []);
            let _0x2e6b18 = await _0x449011.groupInviteCode(_0x563abf.id);
            teks = " 《༒𝙂𝙧𝙤𝙪𝙥 𝘾𝙧𝙚𝙖𝙩𝙚༒》\n\nâ˜¤Name : " + _0x563abf.subject + "\nâ˜¤Owner : @" + _0x563abf.owner.split('@')[0x0] + "\n\nhttps://chat.whatsapp.com/" + _0x2e6b18 + "\n       ";
            _0x449011.sendMessage(_0x3ec39e.chat, {
              'text': teks,
              'mentions': await _0x449011.parseMention(teks)
            }, {
              'quoted': _0x3ec39e
            });
          } catch {
            _0x58e00e("Error!");
          }
        }
        break;
      case "test":
      case 'p':
      case "ping":
        let _0x179a9d = speed();
        let _0x1bb874 = speed() - _0x179a9d;
        _0x58e00e("Testing successful, Bot is active\n\nping " + _0x1bb874.toFixed(0x4) + " milliseconds");
        break;
      case 'mods':
      case 'developer':
      case "dev":
        const _0x2249c7 = "  Ⓜ️*Moderators* Ⓜ️\n\n\n*🎫Kish🎇* @254745936840\n\n*🎫Tophaz* @254705243111\n \n\n type *" + _0x59ea59 + "support* and ask in the group.\n\n*✨️Thanks for using Kish-Md* ✨";
        _0x449011.sendMessage(_0x3ec39e.chat, {
          'text': _0x2249c7,
          'mentions': ["254745936840@s.whatsapp.net", "254745936840@s.whatsapp.net", "254745936840@s.whatsapp.net", "918602239106@s.whatsapp.net"]
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case 'compliment':
        {
          let _0x52acf0 = ["You're amazing!", "You've got a great sense of humor!", "Your kindness is contagious!", "You're a true inspiration!", "Keep shining bright!", "You make the world a better place!", "Your smile lights up the room!", "You're one of a kind!", "You're doing an awesome job!", "You're simply fantastic!"];
          let _0x25248e = _0x52acf0[Math.floor(Math.random() * _0x52acf0.length)];
          let _0x218f5f = _0x3ec39e.mentionedJid[0x0] ? _0x3ec39e.mentionedJid[0x0] : _0x3ec39e.sender;
          _0x23533d = "\t🎉 *Compliment Generator* 🎉 \n";
          _0x23533d += "\t\t---------------------------------\n";
          _0x23533d += '@' + _0x3ec39e.sender.split('@')[0x0] + ", " + _0x25248e + " 😊";
          _0x23533d += "\n\t\t---------------------------------";
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'text': _0x23533d,
            'mentions': [_0x218f5f, _0x3ec39e.sender]
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "dice":
        {
          const _0x44bfd0 = new Map();
          const _0x1d1d28 = _0x44bfd0.get(_0x3ec39e.sender) || 0x0;
          const _0x499d5a = Date.now();
          const _0x5de86c = _0x499d5a - _0x1d1d28;
          if (_0x5de86c < 21600000 && _0x1d1d28 !== 0x0) {
            _0x23533d = "🚫 Sorry, you have reached the maximum play limit. Please try again later.";
          } else {
            const _0x24532e = _0x44bfd0.get(_0x3ec39e.sender + '_count') || 0x0;
            if (_0x24532e >= 0x14) {
              _0x23533d = "🚫 Sorry, you have reached the maximum play limit of 20 times in 6 hours. Please try again later.";
            } else {
              _0x44bfd0.set(_0x3ec39e.sender, _0x499d5a);
              _0x44bfd0.set(_0x3ec39e.sender + "_count", _0x24532e + 0x1);
              let _0x433208 = parseInt(_0x3ec39e.text.split(" ")[0x1], 0xa);
              if (isNaN(_0x433208) || _0x433208 < 0x1 || _0x433208 > 0x6) {
                _0x23533d = "🤷 Please choose a number between 1 and 6 for the dice game.";
              } else {
                let _0x5dcafb = Math.floor(Math.random() * 0x6) + 0x1;
                let _0x291227;
                if (_0x433208 > _0x5dcafb) {
                  _0x291227 = "🎲 You chose " + _0x433208 + "! Casino rolled a " + _0x5dcafb + ". You win! 🎉";
                } else if (_0x433208 < _0x5dcafb) {
                  _0x291227 = "🎲 You chose " + _0x433208 + "! Casino rolled a " + _0x5dcafb + ". You lose! 😢";
                } else {
                  _0x291227 = "🎲 You chose " + _0x433208 + "! Casino rolled a " + _0x5dcafb + ". It's a tie! 🎝";
                }
                _0x23533d = "\t🔢 *Dice Roll Game* 🔢 \n";
                _0x23533d += "\t\t---------------------------------\n";
                _0x23533d += '' + _0x291227;
                _0x23533d += "\n\t\t---------------------------------";
              }
            }
          }
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'text': _0x23533d,
            'mentions': [_0x3ec39e.sender]
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "poker":
        {
          let _0x1d97f1;
          if (_0x3ec39e.mentionedJid && _0x3ec39e.mentionedJid.length > 0x0) {
            _0x1d97f1 = _0x3ec39e.mentionedJid[0x0];
          } else if (_0x3ec39e.quoted && _0x3ec39e.quoted.sender) {
            _0x1d97f1 = _0x3ec39e.quoted.sender;
          } else {
            _0x1d97f1 = _0x38be52.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          }
          function _0xd71218() {
            const _0x5d6379 = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            const _0x361a0e = [_0x5d6379[Math.floor(Math.random() * _0x5d6379.length)], _0x5d6379[Math.floor(Math.random() * _0x5d6379.length)]];
            const _0x196baa = [_0x5d6379[Math.floor(Math.random() * _0x5d6379.length)], _0x5d6379[Math.floor(Math.random() * _0x5d6379.length)]];
            const _0x3be1e6 = _0x4e6186(_0x361a0e);
            const _0x560932 = _0x4e6186(_0x196baa);
            let _0x42d7c0 = "\t🃏 *Poker Prestige* 🃏\n";
            _0x42d7c0 += "\t\t---------------------------------\n";
            _0x42d7c0 += '*@' + _0x3ec39e.sender.split('@')[0x0] + "*'s Hand: " + _0x361a0e.join(", ") + "\n";
            _0x42d7c0 += "*Kish*'s Hand: " + _0x196baa[0x0] + ", \n";
            _0x42d7c0 += "\t\t---------------------------------\n";
            if (_0x3be1e6 > _0x560932) {
              _0x42d7c0 += "\t\t🎉 Congratulations! You win! 🎉";
            } else if (_0x3be1e6 < _0x560932) {
              _0x42d7c0 += "\t\t😢 Better luck next time. Kish wins. 😢";
            } else {
              _0x42d7c0 += "\t\t🎝 It's a tie! 🎝";
            }
            return _0x42d7c0;
          }
          function _0x4e6186(_0x2f25bc) {
            const _0x5a977e = {
              '2': 0x2,
              '3': 0x3,
              '4': 0x4,
              '5': 0x5,
              '6': 0x6,
              '7': 0x7,
              '8': 0x8,
              '9': 0x9,
              '10': 0xa,
              'J': 0xb,
              'Q': 0xc,
              'K': 0xd,
              'A': 0xe
            };
            const _0x194689 = _0x2f25bc.sort((_0x5e93b5, _0xc80ee6) => _0x5a977e[_0xc80ee6] - _0x5a977e[_0x5e93b5]);
            return _0x5a977e[_0x194689[0x0]];
          }
          const _0x2fa458 = _0xd71218();
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'text': _0x2fa458,
            'mentions': [_0x1d97f1, _0x3ec39e.sender]
          }, {
            'quoted': _0x3ec39e
          });
        }
        break;
      case "slot":
      case "spin":
        {
          if (!_0x3ec39e.isGroup) {
            return _0x58e00e(mess.grouponly);
          }
          const _0x32073f = ['🍍', '🥥', '🍎'];
          const _0x17de24 = _0x32073f[Math.floor(Math.random() * _0x32073f.length)];
          const _0x2ad63c = _0x32073f[Math.floor(Math.random() * _0x32073f.length)];
          const _0x52c148 = _0x32073f[Math.floor(Math.random() * _0x32073f.length)];
          const _0x38eb19 = _0x2ac90b(_0x17de24, _0x2ad63c, _0x52c148, _0x3ec39e.sender);
          _0x58e00e(_0x38eb19);
          break;
        }
        function _0x2ac90b(_0x11770e, _0x57fd88, _0x4e130c, _0x3b455e) {
          const _0x4431a4 = [_0x11770e, _0x57fd88, _0x4e130c];
          const _0xce8df5 = ['🍒', '🍇', '🍊', '🍋', '🍉', '🍎', '🍓', '🍈'];
          const _0x3b8922 = ["*You harvested a basket of*\n\n_--> " + _0xce8df5[0x0] + '+' + _0xce8df5[0x0] + '+' + _0xce8df5[0x0] + '_', "*Impressive, You must be a specialist in plucking coconuts*\n\n_--> " + _0xce8df5[0x1] + '+' + _0xce8df5[0x1] + '+' + _0xce8df5[0x1] + '_', "*Amazing, you are going to be making pineapple juice for the family*\n\n_--> " + _0xce8df5[0x2] + '+' + _0xce8df5[0x2] + '+' + _0xce8df5[0x2] + '_'];
          const _0x26b64b = ["*You suck at playing this game*\n\n_--> " + _0xce8df5[0x0] + '-' + _0xce8df5[0x1] + '-' + _0xce8df5[0x2] + '_', "*Totally out of line*\n\n_--> " + _0xce8df5[0x1] + '-' + _0xce8df5[0x2] + '-' + _0xce8df5[0x0] + '_', "*Are you a newbie?*\n\n_--> " + _0xce8df5[0x2] + '-' + _0xce8df5[0x0] + '-' + _0xce8df5[0x1] + '_'];
          return _0x4431a4[0x0] === _0x4431a4[0x1] && _0x4431a4[0x1] === _0x4431a4[0x2] ? "🎰 *Slot Symphony* 🎰\n-------------------------\n" + _0x3b8922[Math.floor(Math.random() * _0x3b8922.length)] + "\n-------------------------\n@" + _0x3b455e.split('@')[0x0] + " Congratulations, you won!*" : "🎰 *Slot Symphony* 🎰\n-------------------------\n" + _0x26b64b[Math.floor(Math.random() * _0x26b64b.length)] + "\n-------------------------\n@" + _0x3b455e.split('@')[0x0] + " Better luck next time!*";
        }
      case 'guesspokemon':
        {
          const _0x297dd1 = [{
            'name': "Pikachu",
            'type': "Electric",
            'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
          }, {
            'name': "Charmander",
            'type': 'Fire',
            'image': "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
          }, {
            'name': "Bulbasaur",
            'type': "Grass",
            'image': "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
          }, {
            'name': "Squirtle",
            'type': 'Water',
            'image': "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
          }];
          const _0x3b140f = Math.floor(Math.random() * _0x297dd1.length);
          const _0x3164a5 = _0x297dd1[_0x3b140f];
          const _0x3d41ae = "Guess the Pokémon based on its type: *" + _0x3164a5.type + "*.\n\nReply with the name of the Pokémon!\n\nImage: " + _0x3164a5.image;
          _0x449011.sendMessage(_0x3ec39e.chat, {
            'text': _0x3d41ae,
            'mentions': [_0x3ec39e.sender]
          }, {
            'quoted': _0x3ec39e
          });
          _0x449011.onMessage(_0x138b76 => {
            if (_0x138b76.body && _0x138b76.body.toLowerCase() === _0x3164a5.name.toLowerCase() && _0x138b76.sender === _0x3ec39e.sender) {
              const _0x1033fc = _0x138b76.body.trim().toLowerCase() === _0x3164a5.name.toLowerCase() ? "🎉 Congratulations! You guessed it right! It's " + _0x3164a5.name + '!' : "❌ Wrong guess! Keep trying!";
              _0x449011.sendMessage(_0x3ec39e.chat, {
                'text': _0x1033fc
              }, {
                'quoted': _0x3ec39e
              });
              _0x449011.removeAllListeners("message");
            }
          });
        }
        break;
      case "element":
        if (!_0x1e269b[0x0]) {
          return _0x58e00e("Please use this command like this: " + _0x59ea59 + "element br");
        }
        const _0x2fe7d5 = _0x1e269b.join(" ");
        const _0x30f371 = await pTable(_0x2fe7d5);
        if (_0x30f371 === undefined) {
          return _0x58e00e("❗️Please provide me a valid element by visiting here !\n\nhttps://en.m.wikipedia.org/wiki/Periodic_table");
        }
        const _0x8c1fe4 = await npt.getByNumber(_0x30f371.number);
        let _0x23533d = '';
        _0x23533d = "              *『  Element Details  』*\n\n";
        _0x23533d += "🔴 *Elelment:* " + _0x8c1fe4.name + "\n";
        _0x23533d += "⬜ *Atomic Number:* " + _0x8c1fe4.number + "\n";
        _0x23533d += "🟡 *Atomic Mass:* " + _0x8c1fe4.atomic_mass + "\n";
        _0x23533d += "⬛ *Symbol:* " + _0x8c1fe4.symbol + "\n";
        _0x23533d += "❓ *Appearance:* " + _0x8c1fe4.apearance + "\n";
        _0x23533d += "🟢 *Phase:* " + _0x8c1fe4.phase + "\n";
        _0x23533d += "♨️ *Boiling Point:* " + _0x8c1fe4.boil + " K\n️";
        _0x23533d += "💧 *Melting Point:* " + _0x8c1fe4.melt + " K\n";
        _0x23533d += "🟣 *Density:* " + _0x8c1fe4.density + " g/mL\n";
        _0x23533d += "⚫ *Shells:* " + _0x8c1fe4.shells.join(", ") + "\n";
        _0x23533d += "🌐 *URL:* " + _0x8c1fe4.source + "\n\n";
        _0x23533d += "💬 *Summary:* " + _0x8c1fe4.summary + "\n";
        await _0x449011.sendMessage(_0x46f484, {
          'image': {
            'url': "https://telegra.ph/file/c04277a44ee5a7a81b94c.jpg"
          },
          'caption': _0x23533d
        }, {
          'quoted': _0x3ec39e
        });
        break;
      case "pokemon":
        {
          if (!_0x38be52) {
            return _0x3ec39e.reply("❌ No query provided!");
          }
          try {
            let {
              data: _0x5132f7
            } = await _0x418c1d.get('https://pokeapi.co/api/v2/pokemon/' + _0x38be52);
            if (!_0x5132f7.name) {
              return _0x3ec39e.reply("❌ No such pokemon");
            }
            let _0x50e0f2 = "💫 *Name: " + _0x5132f7.name + "*\n〽️ *Pokedex ID: " + _0x5132f7.id + "*\n⚖ *Weight: " + _0x5132f7.weight + "*\n🔆 *Height: " + _0x5132f7.height + "*\n🌟 *Base Experience: " + _0x5132f7.base_experience + "*\n📛 *Abilities: " + _0x5132f7.abilities[0x0].ability.name + ", " + _0x5132f7.abilities[0x1].ability.name + "*\n🎀 *Type: " + _0x5132f7.types[0x0].type.name + "*\n✳ *HP: " + _0x5132f7.stats[0x0].base_stat + "*\n⚔ *Attack: " + _0x5132f7.stats[0x1].base_stat + "*\n🔰 *Defense: " + _0x5132f7.stats[0x2].base_stat + "*\n☄ *Special Attack: " + _0x5132f7.stats[0x3].base_stat + "*\n🛡 *Special Defense:" + _0x5132f7.stats[0x4].base_stat + "*\n🎐 *Speed: " + _0x5132f7.stats[0x5].base_stat + "*\n";
            _0x449011.sendMessage(_0x3ec39e.chat, {
              'image': {
                'url': _0x5132f7.sprites.front_default
              },
              'caption': _0x50e0f2
            }, {
              'quoted': _0x3ec39e
            });
          } catch (_0x48f5ad) {
            _0x3ec39e.reply("An Error Occurred");
            console.log(_0x48f5ad);
          }
        }
        break;
      case "flipcoin":
      case 'coin':
        {
          const _0x16316d = Math.random() < 0.5 ? 'Heads' : "Tails";
          const _0x4dd7e4 = "🪙 *Coin Flip Result: " + _0x16316d + '*';
          _0x58e00e(_0x4dd7e4);
        }
        break;
      case "rps":
        {
          const _0xde9f4a = ["rock", "paper", "scissors"];
          if (!_0x1e269b[0x0] || !_0xde9f4a.includes(_0x1e269b[0x0].toLowerCase())) {
            return _0x58e00e("Please provide a valid move: rock, paper, or scissors.");
          }
          const _0x19e90 = _0xde9f4a[Math.floor(Math.random() * _0xde9f4a.length)];
          const _0x3e2926 = _0x1e269b[0x0].toLowerCase();
          let _0xb7a00c;
          if (_0x3e2926 === _0x19e90) {
            _0xb7a00c = "It's a tie!";
          } else if (_0x3e2926 === 'rock' && _0x19e90 === "scissors" || _0x3e2926 === "paper" && _0x19e90 === "rock" || _0x3e2926 === "scissors" && _0x19e90 === "paper") {
            _0xb7a00c = "You win! 🥳 " + _0x3e2926 + " beats " + _0x19e90 + '.';
          } else {
            _0xb7a00c = "You lose! 🫳🏻 " + _0x19e90 + " beats " + _0x3e2926 + '.';
          }
          _0x58e00e("You chose " + _0x3e2926 + ".\nThe bot chose " + _0x19e90 + ".\n" + _0xb7a00c);
        }
        break;
      case "calculator":
      case "cal":
      case "calculate":
        {
          if (_0x1e269b.length < 0x1) {
            return _0x58e00e("*Example :*\n" + _0x59ea59 + "calculator 2*5\n\n");
          }
          let _0x295c41 = _0x1e269b.join(" ");
          if (typeof mathjs.evaluate(_0x295c41) !== "number") {
            _0x58e00e("Error ❌");
          } else {
            _0x58e00e("```「 🧮 Calculator Tool 🧮 」```\n\n*Input :* " + _0x295c41 + "\n*Calculation Result :* " + mathjs.evaluate(_0x295c41.replace(/×/g, '*').replace(/x/g, '*').replace(/÷/g, '/')));
          }
        }
        break;
      case "guess":
        {
          const _0x90a776 = Math.floor(Math.random() * 0x64) + 0x1;
          const _0x446d08 = parseInt(_0x1e269b[0x0]);
          if (!_0x446d08 || _0x446d08 < 0x1 || _0x446d08 > 0x64) {
            return _0x58e00e("Please provide a valid guess between 1 and 100.");
          }
          if (_0x446d08 === _0x90a776) {
            _0x58e00e("Congratulations! 🎉 You guessed the correct number " + _0x90a776 + '!');
          } else {
            const _0x281400 = Math.abs(_0x90a776 - _0x446d08);
            let _0x33e90a = '';
            if (_0x281400 <= 0xa) {
              _0x33e90a = "Close! 🔥";
            } else {
              _0x33e90a = "Not quite! ❄️";
            }
            _0x58e00e("Wrong guess! " + _0x33e90a + " The correct number was " + _0x90a776 + '.');
          }
        }
        break;
        if (_0x240a1f) {
          _0x58e00e("No such command, Baka!");
        }
      default:
        if (_0x56dbd2.startsWith('=>')) {
          if (!_0x49b7a1) {
            return _0x58e00e(mess.owner);
          }
          try {
            _0x58e00e(util.format(eval("(async () => { return " + _0x56dbd2.slice(0x3) + " })()")));
          } catch (_0x20d2e2) {
            _0x58e00e(String(_0x20d2e2));
          }
        }
        if (_0x56dbd2.startsWith('>')) {
          if (!_0x49b7a1) {
            return _0x58e00e(mess.owner);
          }
          try {
            let _0x36c3c8 = await eval(_0x56dbd2.slice(0x2));
            if (typeof _0x36c3c8 !== 'string') {
              _0x36c3c8 = require("util").inspect(_0x36c3c8);
            }
            await _0x58e00e(_0x36c3c8);
          } catch (_0x5ddfbb) {
            await _0x58e00e(String(_0x5ddfbb));
          }
        }
        if (_0x56dbd2.startsWith('$')) {
          if (!_0x49b7a1) {
            return _0x58e00e(mess.owner);
          }
          exec(_0x56dbd2.slice(0x2), (_0x302215, _0x4a097d) => {
            if (_0x302215) {
              return _0x58e00e(_0x302215);
            }
            if (_0x4a097d) {
              return _0x58e00e(_0x4a097d);
            }
          });
        }
    }
  } catch (_0xfd0ed7) {
    _0x449011.sendText(modnumber + "@s.whatsapp.net", util.format(_0xfd0ed7), _0x3ec39e);
    console.log(util.format(_0xfd0ed7));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
process.on("uncaughtException", function (_0x3fc633) {
  let _0x14a86e = String(_0x3fc633);
  if (_0x14a86e.includes("Socket connection timeout")) {
    return;
  }
  if (_0x14a86e.includes("item-not-found")) {
    return;
  }
  if (_0x14a86e.includes('rate-overlimit')) {
    return;
  }
  if (_0x14a86e.includes("Connection Closed")) {
    return;
  }
  if (_0x14a86e.includes("Timed Out")) {
    return;
  }
  if (_0x14a86e.includes("Value not found")) {
    return;
  }
  console.log("Caught exception: ", _0x3fc633);
});
