import Mock from 'mockjs';
var Random = Mock.Random;
Mock.setup({ timeout: '1200-2600' })

Random.extend({
    constellation: function(date) {
        var constellations = ['模拟', '角色', '养成', '策略', '战争']
        return this.pick(constellations)
    },
    game_title: function(date) {
        var game_title = ['幻剑奇缘', '剑雨乾坤', '九转牧云记', '巨炮舰队', '决战沙城']
        return this.pick(game_title)
    },
    board_type: function(date) {
        var board_type = ['删档封测', '删档内测', '不删档内测', '公测']
        return this.pick(board_type)
    }
})
//Random.float(整数部分的最小值, 整数部分的最大值, 小数部分位数的最小值, 小数部分位数的最大值)
//整数部分范围为100-400，小数部分最少0位，最多1位
Random.float(100, 400, 0, 1)
Random.float(10, 40, 0, 1)

Mock.mock('/data', {
    "count":10,
    "start":0,
    "subjects|10":[
        {
            "id|+1": 20171001,
            title: ()=>Random.game_title(),
            "content": "2017年经典手游重磅巨制！",
            "size": "@float(100, 400, 0, 1)m",
            type: ()=>Random.constellation()
        }
    ]
})

Mock.mock('/billboard/new', {
    "count":10,
    "start":0,
    "subjects|10":[
        {
            "id|+1": 20171101,
            title: ()=>Random.game_title(),
            "content": "2017年经典手游重磅巨制！",
            "players": "@float(10, 40, 0, 1)万",
            type: ()=>Random.board_type()
        }
    ]
})

Mock.mock('/billboard/down', {
    "count":10,
    "start":0,
    "subjects|10":[
        {
            "id|+1": 20171121,
            title: ()=>Random.game_title(),
            "content": "2017年经典手游重磅巨制！",
            "size": "@float(100, 400, 0, 1)m",
            type: ()=>Random.constellation()
        }
    ]
})

Mock.mock('/billboard/single', {
    "count":10,
    "start":0,
    "subjects|10":[
        {
            "id|+1": 20171101,
            title: ()=>Random.game_title(),
            "content": "2017年经典手游重磅巨制！",
            "players": "@float(100, 400, 0, 1)m",
            type: ()=>Random.board_type()
        }
    ]
})

Mock.mock('/billboard/hot', {
    "count":10,
    "start":0,
    "subjects|10":[
        {
            "id|+1": 20171101,
            title: ()=>Random.game_title(),
            "content": "2017年经典手游重磅巨制！",
            "players": "@float(100, 400, 0, 1)m",
            type: ()=>Random.board_type()
        }
    ]
})

/*参考地址：

    [官方demo](http://mockjs.com/examples.html)
    [Mockjs怎么模拟多条数据？](http://cnodejs.org/topic/59940e4cbae6f2ed6f7e4a3e)


*/