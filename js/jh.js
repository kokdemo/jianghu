/**
 * Created by kokdemo on 2016/1/20.
 */
var jianghu = new Vue({
    el: 'body',
    data: {
        start: true,
        man: {
            name: '无名氏',
            from: '天涯海角',
            age: 15,
            force: {base: 5, add: 0},
            body: {base: 5, add: 0},
            mind: {base: 75, add: 0},
            prestige: {num: 0, level: '无名小虾'},
            achievement: [],
            kongfu: [
                {
                    name: '基本拳脚',
                    type: 'force',
                    describe: '大概是和附近的小流氓打架学会的',
                    base: 5,
                    stage: [1, 0.7, 0.3, 0.1, 0.01],
                    proficiency: 0
                },
                {
                    name: '慢跑',
                    type: 'body',
                    describe: '大概是被小流氓追杀学会的',
                    stage: [1, 0.7, 0.3, 0.1, 0.01],
                    base: 5,
                    proficiency: 0
                },
                {
                    name: '三字经',
                    type: 'mind',
                    describe: '大概是附近的街道上捡到的',
                    stage: [1, 0.7, 0.1, 0.05, 0],
                    base: 5,
                    proficiency: 0
                }
            ],
            martial: {
                name: '无',
                level: '',
                base: 0
            }
        },
        prestige:[],
        martial:[],
        radio: [
            '公元1100年，年轻的赵煦主政7年，还在努力的推广新法，希望能缓解朝廷中的三冗问题，减轻农民的负担。',
            '正月，赵煦突然患病，不日离世。大臣们为他定下"哲宗"的谥号。同月，他那位文采卓绝的弟弟赵佶登基，即宋徽宗。',
            '苍茫北顾，同样的完颜阿骨打跟随着自己的哥哥在草原上打猎，心中却想着辽国那位昏庸的皇帝耶律洪基。',
            '江湖波澜又起，不知是哪位大侠横空出世。'
        ],
        time: 1,
        switchTabs: 0
    },
    created: function () {
        // 初始化时间
        this.time = 0;
        // 加载data中的数据
        this.prestige = jianghuInfo.prestige;
        this.martial = jianghuInfo.martial;
    },
    ready: function () {
        //初始化组件
        $('[data-toggle="tooltip"]').tooltip()
    },
    methods: {
        //开始游戏
        startGame: function () {
            if (this.man.name && this.man.from) {
                this.start = true;
                console.info('start');
            } else {
                alert('身为大侠，总得有个清楚的身世吧');
            }
        },
        //切换tab
        switchTab: function (x) {
            this.switchTabs = x;
        },
        //在底部通知栏输出信息
        print: function (text) {
            this.radio.unshift(text);
        },
        //一个计算函数的入口，可以计算，更新时间，年龄，武力，体力，悟性，武功，声望，江湖等级，门派等级
        calc: function (input) {
            if (input.time) {
                //更新时间
                this.time += input.time
                var age = 15 + Math.floor(this.time / 12)
                if (age != this.man.age) {
                    this.print(this.man.name + '又长大了一岁')
                }
                this.man.age = age
            }
            if (input.force) {
                this.man.force.base += input.force
            }
            if (input.body) {
                this.man.body.base += input.body
            }
            if (input.mind) {
                this.man.mind.base += input.mind
            }
            // 输入内容包括 功夫的名字name，功夫的数量num
            if (input.kongfu) {
                var kflength = this.man.kongfu.length;
                for (var i = 0; i < kflength; i++) {
                    if (input.kongfu.name === this.man.kongfu[i].name) {
                        var kf = this.man.kongfu[i];
                        var stage = Math.floor(kf.proficiency / 0.5);
                        this.man.kongfu[i].proficiency += (this.man.mind.base + this.man.mind.add) * input.kongfu.num * kf.stage[stage] / 100 / kf.base;
                        break;
                    }
                }
                var add = {force: 0, body: 0, mind: 0};
                for (var i = 0; i < kflength; i++) {
                    var kongfu = this.man.kongfu[i];
                    add[kf.type] += kongfu.proficiency * kongfu.base;
                }
                this.man.force.add = add.force;
                this.man.body.add = add.body;
                this.man.mind.add = add.mind;
            }
            if (input.prestige) {
                var prestige = this.man.prestige;
                this.man.prestige.num += input.prestige;
                for (var i = 0, length = this.prestige.length; i < length; i++) {
                    var level = this.prestige[i];
                    if (prestige > level.num) {
                        prestige.level = level.level;
                    }
                }
            }
            if (input.martial) {
                var martial = this.man.martial;
                this.man.martial.base += input.martial;
                var power = (this.man.force.base + this.man.force.add) + this.man.martial.base;
                for (var i = 0, length = martial.levelInfo.length; i < length; i++) {
                    if (power >= martial.levelInfo[i].force) {
                        this.man.martial.level = martial.levelInfo[i].name;
                    }
                }
            }
        },
        //加入门派
        martial_join: function (name) {
            var martial = this.man.martial;
            if (martial.name == '无') {
                for (var i = 0, length = this.martial.length; i < length; i++) {
                    if (name == this.martial[i].name) {
                        var myMartial = this.martial[i];
                        this.man.martial.name = name;
                        this.man.martial.levelInfo = myMartial.levelInfo;
                        this.calc({martial: 1,time: 1});
                        this.print(this.man.name + '加入了' + this.man.martial.name + '，成为了一位' + this.man.martial.level);
                        this.martial_getKongfu(name,this.man.martial.level);
                        break;
                    }
                }
            }
        },
        //传功
        martial_getKongfu: function (name, martialLevel) {
            for (var i = 0, length = this.martial.length; i < length; i++) {
                if (name == this.martial[i].name) {
                    var myMartial = this.martial[i];
                    this.man.kongfu = this.man.kongfu.concat(myMartial.kongfu[martialLevel]);
                    this.print(this.man.name + '学习到了' + martialLevel + '等级的武功');
                    return 0
                }
            }
            this.print('你的修为尚不足以学习更高层次的武功');
        },
        //门派任务
        martial_work: function(name, martialLevel){
            var random = Math.random();
            var printText = '';
            for (var i = 0, length = this.martial.length; i < length; i++) {
                if (name == this.martial[i].name) {
                    var martialWork = this.martial[i].work[martialLevel];
                    for(var j = 0,length2 = martialWork.length;j<length2;j++){
                        if(random < martialWork[j].probability){
                            martialWork[j].effect();
                            printText = martialWork[j].print;
                            break;
                        }
                    }
                    this.print(printText);
                    return 0
                }
            }
        }

    }
});