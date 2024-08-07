/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6e92b29f7dac60dc',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '51c189453e81fadaf2dd928c950670a2',

  PROVINCE: '宁夏',
  CITY: '银川',
  SWITCH: {
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
  },
  USERS: [
    {
      // 想要发送的人的名字
      name: '屹玮',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXYV36s3FxyUs2ppmCvi2w8fzD_I',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'nIclgLOi52OJyw3wOlTkIkjU0OrB0GOQbDOjKIOStvI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-01',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '屹玮', year: '2002', date: '03-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '屹玮', year: '2002', date: '05-01',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2020', date: '11-21',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-11-21' },
        { keyword: 'leave_day', date: '2024-6-22' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Jog33fKI8XBqIA3JbyvBLNFmt9VEF5Xvke3HToh8jzU',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXYV36jhIzuh1jPawzcZ9xLvVQ88',
    }
  ],

}

module.exports = USER_CONFIG

